import React from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


const reducer = (state = 0, action) => {
	switch (action.type) {
	  case 'INCREMENT': return state + 1
	    break
	  case 'DECREMENT': return state - 1
	    break
	  default: return state
	}
}

const store = createStore(reducer)

const render = () => {
    ReactDOM.render(
    	<div>
	        <h1>{store.getState()}</h1>
	        <button onClick={() => store.dispatch({type: 'INCREMENT'})}>+</button>
	        <button onClick={() => store.dispatch({type: 'DECREMENT'})}>-</button>
	    </div>,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)

registerServiceWorker();
