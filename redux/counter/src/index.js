import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';

class Counter extends Component{
    constructor (props) {
        super(props)
    }
    
    render () {
        const { value, onIncrement, onDecrement } = this.props
        return (
            <div>
                <h1>{value}</h1>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>  
        )
    }
}


const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state -1;
        default: return state
    }
}

const store = createStore(reducer)

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({type: 'INCREMENT'})}
            onDecrement={() => store.dispatch({type: 'DECREMENT'})}
         />,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
