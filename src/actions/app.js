import axios from 'axios'

export const getAvailableTimeSlots = () => (dispatch) => {

    axios.get('/api/available-time-slots')
    .then(res => {
        const data = res.data
        dispatch({type: 'APP:SET_DATA', key: 'availableTimeSlots', val: data})
    })
    .catch(err => {

    })
}

export const handleModal = (name = '') => (dispatch) => {
    dispatch({
       type: 'APP:HANDLE_MODAL', 
        modal: {
            name
        }
    })
}