import React, { Component, PureComponent } from 'react'

class Foo extends Component{

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.arr.length != this.props.arr.length) {
            return true
        }

        let result = false
        for (let i = 0, len = nextProps.arr.length; i < len; i++) {
            if (nextProps.arr[i] != this.props.arr[i]) {
                result = true
                break
            }
        }
        return result
    }

    render() {
        console.log('Foo render')
        return null
    }
}

class Pure extends Component{
    constructor() {
        super()
        this.state = {
            arr: []
        }
    }

    fetch = () => {
        let result = []
        for (let i = 0; i < 100; i++) {
            result.push(i)
        }
        this.setState({
            arr: result
        })
    }


    render() {
        const { arr } = this.state

        return (
            <div>
                <p>Pure</p>
                <button onClick={this.fetch}>fetch</button>
                <Foo arr={arr}></Foo>
            </div>
        )
    }
}

export default Pure