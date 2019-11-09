import React, { Component, PureComponent } from 'react'

class Foo extends Component{
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.obj != this.props.obj) {
            return true
        }
        return false
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
            obj: {
                name: 'jack',
                age: 22,
                jobInfo: {
                    company: 'alibaba'
                }
            }
        }
    }

    changeObj1 = () => {
        const { obj } = this.state
        obj.age += 1
        this.setState({
            obj: Object.assign({}, obj)
        })
    }

    changeObj2 = () => {
        const { obj } = this.state
        obj.age += 1
        this.setState({
            obj
        })
    }

    render() {
        const { obj } = this.state
        console.log('obj', obj)

        return (
            <div>
                <p>Pure</p>
                <button onClick={this.changeObj1}>Change Obj 1</button>
                <button onClick={this.changeObj2}>Change Obj 2</button>
                <Foo obj={obj}></Foo>
            </div>
        )
    }
}

export default Pure