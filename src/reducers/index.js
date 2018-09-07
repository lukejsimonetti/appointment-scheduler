import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import app from './app'

// combine reducers
export default combineReducers({
    form: formReducer,
    app
})
