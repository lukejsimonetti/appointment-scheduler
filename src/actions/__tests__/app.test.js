import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import mockTimeSlotData from './mockTimeSlotData.json'
import {
    getAvailableTimeSlots,
    setData,
    saveFormData,
    handleModal,
    setModalFormData,
    updateForm,
    SET_DATA,
    HANDLE_MODAL,
    UPDATE_FORM_STATE
} from '../app'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('app success async actions', () => {
    let store

    beforeEach(() => {
        moxios.install()
        store = mockStore({
            app: {
                modal: {
                    modalName: '',
                    formData: {}
                }
            }
        })
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('getAvailableTimeSlots should dispatch \'setData\' on success', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: mockTimeSlotData
            })
        })

        const expectedActions = [
            setData('availableTimeSlots', mockTimeSlotData)
        ]

        return store.dispatch(getAvailableTimeSlots()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    test('saveFormData should dispatch \'handleModal\' on success', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
            })
        })

        const expectedActions = [
            handleModal()
        ]

        return store.dispatch(saveFormData()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

describe('app actions', () => {

    test('should create an action to set the state', () => {
        const key = 'foo'
        const val = 'bar'
        const expectedAction = {
            type: SET_DATA,
            key,
            val
        }
        expect(setData(key, val)).toEqual(expectedAction)
    })

    test('should create an action to update form state', () => {
        const key = 'foo'
        const val = 'bar'
        const expectedAction = {
            type: UPDATE_FORM_STATE,
            key,
            val
        }
        expect(updateForm(val, key)).toEqual(expectedAction)
    })

    test('should create an action to toggle the modal', () => {
        const expectedAction = {
            type: HANDLE_MODAL,
            modal: {
                formData: {},
                modalName: '',
                timeSlotId: undefined
            }
        }
        expect(handleModal()).toEqual(expectedAction)
    })

    test('should create an action to handle mode change', () => {
        const expectedAction = {
            type: HANDLE_MODAL,
            modal: {
                modalName: undefined,
                formData: {}
            }
        }
        expect(setModalFormData()).toEqual(expectedAction)
    })
})