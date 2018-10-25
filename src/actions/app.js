import axios from 'axios'

export const getAvailableTimeSlots = () => (dispatch) => {

    axios.get('/api/time-slots')
    .then(res => {
        const data = res.data
        dispatch({type: 'APP:SET_DATA', key: 'availableTimeSlots', val: data})
    })
    .catch(err => {

    })
}

export const handleModal = (modalName = '', formData = {}, timeSlotId) => (dispatch) => {
    dispatch({
       type: 'APP:HANDLE_MODAL', 
        modal: {
            modalName,
            timeSlotId,
            formData
        }
    })
}

export const saveFormData = (formData, timeSlotId) => (dispatch, getState) => {
    const {formData, timeSlotId} = getState().app.modal
    axios.put('/api/time-slot', {
        data: {formData, timeSlotId}
    })
    .then(res => {
        dispatch(getAvailableTimeSlots())
    })
    .catch(err => {
        console.log(err.response)
    })
}

export const setModalFormData = (modalName, data) => (dispatch) => {
    dispatch({
        type: 'APP:HANDLE_MODAL',
        modal: {
            modalName: modalName,
            formData: {...data}
        }
    })
}

export const updateForm = (value, elementName) => (dispatch) => {
    dispatch({
        type: 'APP:UPDATE_FORM_STATE',
        key: elementName,
        val: value
    })
}