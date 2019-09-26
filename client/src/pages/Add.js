import React, { Component } from 'react'
import { Form, Input, Select, Button, notification } from 'antd'
import axios from 'axios'
import uuidv4 from 'uuid/v4'
import Cookies from 'universal-cookie'

const { Item: FormItem } = Form
const { Option } = Select

const cookies = new Cookies()

class Add extends Component {
  state = {
    symbols: [],
  }

  componentDidMount() {
    const userId = uuidv4()
    cookies.set('userId', userId)
    axios.get('/api/symbols').then(({ data }) => {
      this.setState({ symbols: data })
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((error, value) => {
      if (error) return
      axios
        .post('/api/add', { ...value, userId: cookies.get('userId') })
        .then(res => {
          notification['success']({
            message: 'New rate successfully added',
          })
        })
        .catch(error => {
          console.log(error)
        })
    })
  }

  render() {
    const { symbols } = this.state
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <h1>Add exchange rate</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="Cryptocurrency">
            {getFieldDecorator('cryptocurrencyId', {
              rules: [
                {
                  required: true,
                  message: 'Please choose cryptocurrency',
                },
              ],
            })(
              <Select style={{ width: '200px' }}>
                {symbols.map(({ id, symbol }) => (
                  <Option key={id} value={id}>
                    {symbol}
                  </Option>
                ))}
              </Select>,
            )}
          </FormItem>
          <FormItem label="Value">
            {getFieldDecorator('value', {
              rules: [
                {
                  required: true,
                  message: 'Please input value',
                },
              ],
            })(<Input style={{ width: '200px' }} />)}
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

export default Form.create({ name: 'add' })(Add)
