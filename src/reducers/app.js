const initialState = {
    modal:{
        modalName: '',
        formData: {}
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

        default: return state
    }
}

export default app