import React, { Component, PureComponent } from 'react'

class Foo extends PureComponent{
    render() {
        console.log('Foo render')
        return null
    }
}

class Pure extends Component{
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    render() {
        console.log('Pure render')

        const { count } = this.state
        return (
            <div>
                <p>{count}</p>
                <button onClick={() => this.setState({count: count+1})}>Add</button>
                <Foo name="foo"></Foo>
            </div>
        )
    }
}

export default Pure