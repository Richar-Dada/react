import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import propTypes from 'prop-types'
import { connect, Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

/**
 * 使用react-redux实现一个counter
 * 它特点是分UI层和容器层
 * */

// UI层
class Counter extends React.Component {
    render() {
        const { value, onIncreaseClick } = this.props
        return (
            <div>
                <span>{ value }</span>
                <button onClick={ onIncreaseClick }>Increase</button>
            </div>
        )
    }
}

// 定义属性
Counter.propTypes = {
    value: propTypes.number.isRequired,
    onIncreaseClick: propTypes.func.isRequired
}
// 定义action
const increaseAction = { type: 'increase' }
// 定义reducer
function counter(state= { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case 'increase': 
            return { count: count + 1 }
        default:
            return state
    }
}

const store = createStore(counter)
// 定义container层，其实就是建立映射
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}
// 使用connect把UI层和container连接起来
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
// 通过Provider注入store
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
