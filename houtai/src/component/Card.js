import React from 'react'
import { Card, Col, Row } from 'antd'
import './Card.css'

export default class customerCard extends React.Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
				<div style={{ background: '#ECECEC', padding: '30px' }}>
			    <Row>
			      <Col span="8">
			        <Card title="Card title" bordered={false}>Card content</Card>
			      </Col>
			      <Col span="8">
			        <Card title="Card title" bordered={false}>Card content</Card>
			      </Col>
			      <Col span="8">
			        <Card title="Card title" bordered={false}>Card content</Card>
			      </Col>
			    </Row>
			  </div>
			)
		
	}
}