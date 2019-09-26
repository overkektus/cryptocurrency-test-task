import React, { Component } from 'react'
import axios from 'axios'
import { List } from 'antd'
import ListItem from '../components/ListItem'

class Home extends Component {
  state = {
    exchangeRate: [],
  }

  componentDidMount() {
    axios.get('/api/latest').then(({ data }) => {
      this.setState({ exchangeRate: data })
    })
  }

  render() {
    const { exchangeRate } = this.state
    return (
      <div>
        <h1>Latest</h1>
        <List size="small" bordered dataSource={exchangeRate} renderItem={item => <ListItem rate={item} />} />
      </div>
    )
  }
}

export default Home
