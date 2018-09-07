// import deps
import { createStore, applyMiddleware } from 'redux'

// import middleware
import thunk from 'redux-thunk'

// import rootReducer
import rootReducer from './reducers/index'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)

export default store