import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import { Layout, Menu } from 'antd'
import Home from './pages/Home'
import Add from './pages/Add'

const { Header, Content, Footer } = Layout
const { Item: MenuItem } = Menu

class App extends Component {
  componentDidMount() {
    axios.get('/api/latest').then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
            <MenuItem key="1">
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem key="2">
              <Link to="/add">Add</Link>
            </MenuItem>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/add" component={Add} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}

export default App
