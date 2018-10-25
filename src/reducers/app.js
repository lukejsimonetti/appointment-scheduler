const initialState = {
    modal:{
        modalName: '',
        formData: {
            name: '',
            phone: ''
        }
    }
}

const app = (state = initialState, action) => {
    switch (action.type) {

        case 'APP:SET_DATA': return {
            ...state,
            [action.key]: action.val
        }
        case 'APP:HANDLE_MODAL': return {
            ...state,
            modal: {
                ...action.modal,
            }
        }
        case 'APP:UPDATE_FORM_STATE': return {
            ...state,
            modal: {
                ...state.modal,
                formData:{
                    ...state.modal.formData,
                    [action.key]: action.val
                }
            }
        }

        default: return state
    }
}

export default app