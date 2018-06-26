import React, { Component } from 'react'

import './Page1.css'

import image1 from './images/111.jpg'
import image2 from './images/222.jpg'

export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box">
                this is Page1~112345
                <img src={image1} />
                <img src={image2} />
            </div>
        )
    }
}