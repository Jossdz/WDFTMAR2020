import React from 'react'
import { Modal } from 'antd'
import EditForm from './EditForm'

function EditModal(props) {
  const {
    visible,
    handleOk,
    handleCancel,
    onFinish,
    onFinishFailed,
    initialValues,
  } = props
  return (
    <Modal
      title="Edit country"
      visible={visible}
      onOk={handleOk}
      footer={null}
      onCancel={handleCancel}
    >
      <EditForm
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={initialValues}
      />
    </Modal>
  )
}

export default EditModal
