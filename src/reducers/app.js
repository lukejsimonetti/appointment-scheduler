const initialState = {}

const app = (state = initialState, action) => {
    switch (action.type) {

        case 'APP:SET_DATA': return {
            ...state,
            [action.key]: action.val
        }

        default: return state
    }
}

export default app