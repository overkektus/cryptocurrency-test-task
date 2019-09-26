import React from 'react'
import { List } from 'antd'

const ListItem = ({ rate }) => (
  <List.Item>
    <h3 style={{ marginBottom: '0', marginRight: '20px' }}>{rate.symbol}</h3>
    <p style={{ marginBottom: '0' }}>{rate.last}</p>
  </List.Item>
)

export default ListItem
