

import React from 'react'
import { render } from 'react-dom'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入Antd的导航组件
import { Menu, Icon, Switch, Breadcrumb } from 'antd'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup;

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

const Slider =  React.createClass ({

    getInitialState() {
      return {
        current: 'sub1'
      }
    },
    handleClick(e) {
      console.log('click ', e)
      this.setState({
        current: e.key
      })
    },
    render () {
        return (
                <div>
                    <div id="leftMenu">
                        <Menu onClick={this.handleClick}
                          style={{ width: 240 }}
                          defaultOpenKeys={['sub1']}
                          selectedKeys={[this.state.current]}
                          mode="inline"
                        >
                          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
                            <MenuItemGroup title="分组1">
                              <Menu.Item key="1">
                                <Link to="/card">Card</Link>
                              </Menu.Item>
                              <Menu.Item key="2">
                                <Link to="/chart">Chart</Link>
                              </Menu.Item>
                              <Menu.Item key="3">
                                <Link to="/form">Form</Link>
                              </Menu.Item>
                              <Menu.Item key="4">
                                <Link to="/table">Table</Link>
                              </Menu.Item>
                            </MenuItemGroup>
                          </SubMenu>
                        </Menu>
                    </div>

                    <div id="rightWrap" className="right">
                        <Breadcrumb>
                          <Breadcrumb.Item>Home</Breadcrumb.Item>
                          <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                          <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                          <Breadcrumb.Item>An Application</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="content cc" id="gg">
                          <div>
                            {this.props.children}
                          </div>
                        </div>
                    </div>
                </div>
            )
        
    }
})

render (
    <Router hashHistory={hashHistory}> 
        <Route path="/" component={Slider}>
            <Route path="table" component={Table} />
            <Route path="form" component={Form} />
            <Route path="chart" component={Chart} />
            <Route path="card" component={Card} />
        </Route>
    </Router>,
    document.getElementById('app')
)

