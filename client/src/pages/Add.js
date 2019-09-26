import React, { Component } from 'react'
import { Form, Input, Select, Button } from 'antd'

const { Item: FormItem } = Form
const { Option } = Select

class Add extends Component {
  handleSubmit = e => {
    e.preventDefault()
    console.log('kek')
  }

  render() {
    return (
      <div>
        <h1>Add</h1>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem label="Cryptocurrency">
            <Select style={{ width: '100px' }}>
              <Option value="BTC">BTC</Option>
              <Option value="ETH">ETH</Option>
            </Select>
          </FormItem>
          <FormItem label="Value">
            <Input />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Add
