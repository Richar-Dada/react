import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Square from './components/square.js'

ReactDom.render(
	<Square value="click" />,
	document.getElementById('root')
	)
