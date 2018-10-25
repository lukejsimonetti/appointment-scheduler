import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import getOrganizationContactsMock from '../mocks/getOrganizationContactsMock'
import {
    getAvailableTimeSlots
} from '../app'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('contactListModal success async actions', () => {

    let store

    beforeEach(() => {
        moxios.install()
        store = mockStore({
            modal:{
                modalName: '',
                formData: {}
            }
        })
    })
    
    afterEach(() => {
        moxios.uninstall()
    })

    test('getOrganizationContacts should dispatch \'setState\' on success', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: getOrganizationContactsMock
            })
        })

        const expectedActions = [
            setState('list_data', getAvailableTimeSlots)
        ]

        return store.dispatch(getOrganizationContacts(24)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    test('putContact should dispatch \'handleModeChange\' on success', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
            })
        })

        const expectedActions = [
            handleModeChange('LIST')
        ]

        return store.dispatch(putContact(1, getOrganizationContactsMock[0])).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

// describe('contactListModal actions', () => {

//     test('should create an action to set the state', () => {
//         const key = 'foo'
//         const val = 'bar'
//         const expectedAction = {
//             type: SET_STATE,
//             key,
//             val
//         }
//         expect(setState(key, val)).toEqual(expectedAction)
//     })

//     test('should create an action to toggle the modal', () => {
//         const expectedAction = {
//             type: TOGGLE_MODAL
//         }
//         expect(toggleModal()).toEqual(expectedAction)
//     })

//     test('should create an action to handle mode change', () => {
//         const val = 'foo'
//         const expectedAction = {
//             type: SET_STATE,
//             key: 'mode',
//             val
//         }
//         expect(handleModeChange(val)).toEqual(expectedAction)
//     })
// })