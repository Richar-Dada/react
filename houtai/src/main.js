

import React from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon, Switch } from 'antd'
const SubMenu = Menu.SubMenu

// 引入Ant-Design样式 & Animate.CSS样式
import 'animate.css/animate.min.css'
import 'font-awesome/css/font-awesome.min.css'

// 引入主体样式文件
import './main.css'

// 引入各个组件
import Card from './component/Card'
import Chart from './component/Chart'
import Form from './component/Form'
import Table from './component/Table'

class Sider extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
                <div>
                    <div class="left-silder">
                        <p>left left</p>
                    </div>

                    <div class="right-slider">
                        <p>right right</p>
                    </div>
                    <div>
                        {this.props.children}
                    </div>
                
                </div>
            )
        
    }
}

render (
    <Router hashHistory={hashHistory}> 
        <Route path="/" component={Sider}>
            <Route path="table" component={Table} />
            <Route path="form" component={Form} />
            <Route path="chart" component={Chart} />
            <Route path="card" component={Card} />
        </Route>
    </Router>,
    document.getElementById('app')
)

