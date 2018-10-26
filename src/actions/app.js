import axios from 'axios'

export const SET_DATA = 'APP:SET_DATA'
export const HANDLE_MODAL = 'APP:HANDLE_MODAL'
export const UPDATE_FORM_STATE = 'APP:UPDATE_FORM_STATE'

export const getAvailableTimeSlots = () => (dispatch) => {
    return axios.get('/api/time-slots')
        .then(res => {
            const data = res.data
            dispatch(setData('availableTimeSlots', data))
        })
        .catch(err => {

        })
}
export const saveFormData = () => (dispatch, getState) => {
    const { formData, timeSlotId } = getState().app.modal
    return axios.put('/api/time-slot', {
        data: { formData, timeSlotId }
    })
        .then(res => {
            dispatch(getAvailableTimeSlots())
            dispatch(handleModal())
        })
        .catch(err => {
            console.log(err.response)
        })
}

export const setData = (key, val) => {
    return {
        type: SET_DATA, key, val
    }
}

export const handleModal = (modalName = '', formData = {}, timeSlotId) => {
    return {
        type: HANDLE_MODAL,
        modal: {
            modalName,
            timeSlotId,
            formData
        }
    }
}

export const setModalFormData = (modalName, data) => {
    return {
        type: HANDLE_MODAL,
        modal: {
            modalName: modalName,
            formData: { ...data }
        }
    }
}

export const updateForm = (value, elementName) => {
    return {
        type: UPDATE_FORM_STATE,
        key: elementName,
        val: value
    }
}