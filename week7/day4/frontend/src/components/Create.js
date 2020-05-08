import React, { Component } from 'react'
import { notification } from 'antd'
import CreateForm from './CreateForm'
import COUNTRIES_SERVICE from '../services/countriesService'

class Create extends Component {
  onFinish = async (values) => {
    try {
      await COUNTRIES_SERVICE.create(values)
      this.openNotification(
        'success',
        'Country Created',
        'Thanks for contributing'
      )
      this.props.history.push('/countries')
    } catch (e) {
      this.openNotification(
        'error',
        'Something went wrong :(',
        'Try again later'
      )
    }
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  openNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
    })
  }

  render() {
    return (
      <section className="myContainer">
        <CreateForm
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        />
      </section>
    )
  }
}

export default Create
