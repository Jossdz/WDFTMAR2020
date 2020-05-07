import React from 'react'
import { Form, Input, Button } from 'antd'

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
}

const buttonLayout = {
  wrapperCol: { offset: 0, span: 16 },
}

function EditForm({ onFinish, onFinishFailed, initialValues }) {
  return (
    <Form
      {...layout}
      initialValues={initialValues}
      onFinishFailed={onFinishFailed}
      onFinish={onFinish}
    >
      <Form.Item
        label="Country Name"
        name="name"
        rules={[{ required: true, message: 'Please input the country name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Confirmed Cases"
        name="confirmed"
        rules={[
          { required: true, message: 'Please input the confirmed cases!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Recovered Cases"
        name="recovered"
        rules={[
          { required: true, message: 'Please input the recovered cases!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Deaths"
        name="deaths"
        rules={[
          { required: true, message: 'Please input the number of deaths!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...buttonLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default EditForm
