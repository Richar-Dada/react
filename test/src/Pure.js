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
            count: 0,
            info: {
                name: 'richar',
                age: 11
            }
        }
    }

    handleUpdateObject = () => {
        this.setState({
            info: Object.assign({}, this.state.info)
        })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <p>Pure</p>
                <button onClick={() => this.setState({count: count+1})}>Add</button>
                <button onClick={this.handleUpdateObject}>update object</button>
                <Foo name="foo" info={this.state.info}></Foo>
            </div>
        )
    }
}

export default Pure