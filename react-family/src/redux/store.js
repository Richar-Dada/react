import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
import combinReducers from './reducers.js'
import promiseMiddleware from './middleware/promiseMiddleware'

let store = createStore(combinReducers, applyMiddleware(promiseMiddleware))
console.log(combinReducers)
export default store