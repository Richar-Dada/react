import React from 'react'
import { Link } from 'react-router'

export default class Repos extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div>
                <p>   /repos</p>
                <Link to="/timeline" activeStyle={{ color: 'green' }} >go timeline </Link>
                <br/>
                <Link to="/summary" >go summary </Link>
            </div>
        )
    }
}