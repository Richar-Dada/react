import axios from 'axios'
import { reset } from '../actions/counter';

export default store => next => action => {
    const { dispatch, getState } = store
    if (typeof action === 'function') {
        action(dispatch, getState)
        return
    }

    const {
        promise,
        types,
        afterSuccess,
        ...reset
    } = action

    if (!action.promise) {
        return next(action)
    }

    const [
        REQUEST,
        SUCCESS,
        FAILURE
    ] = types

    next({
        ...reset,
        type: REQUEST
    })

    const onFulfilled = result => {
        next({
            ...reset,
            result,
            type: SUCCESS
        })
        if (afterSuccess) {
            afterSuccess(dispatch, getState, result)
        }
    }

    const onRejected = error => {
        next({
            ...reset,
            error,
            type: FAILURE
        })
    }

    return promise(axios).then(onFulfilled, onRejected).catch(error => {
        console.error('MIDDLEWARE ERROR:', error)
        onRejected(error)
    })
}