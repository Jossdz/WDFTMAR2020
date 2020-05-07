import React, { Component } from 'react'
import { Typography, Table, Space } from 'antd'
import { Link } from 'react-router-dom'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import COUNTRIES_SERVICE from '../services/countriesService'
import EditModal from './EditModal'

const { Title } = Typography

class Countries extends Component {
  state = {
    initialValues: {},
    visible: false,
    countries: [],
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, { _id }) => <Link to={`/countries/${_id}`}>{text}</Link>,
      },
      {
        title: 'Confirmed Cases',
        dataIndex: 'confirmed',
        key: 'confirmed',
      },
      {
        title: 'Recovered Cases',
        dataIndex: 'recovered',
        key: 'recovered',
      },
      {
        title: 'Deaths',
        dataIndex: 'deaths',
        key: 'deaths',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, { _id, ...rest }) => (
          <Space size="middle">
            <EditOutlined onClick={() => this.startEditing({ ...rest, _id })} />
            <DeleteOutlined onClick={() => this.deleteCountry(_id)} />
          </Space>
        ),
      },
    ],
  }

  async componentDidMount() {
    const { data } = await COUNTRIES_SERVICE.readAll()
    const countries = data.countries.map((c) => ({ ...c, key: c._id }))
    this.setState({ countries })
  }

  deleteCountry = async (id) => {
    await COUNTRIES_SERVICE.deleteOne(id)
    const { countries } = this.state
    const updated = countries.filter((c) => c._id !== id)
    this.setState({ countries: updated })
  }

  startEditing = (obj) => {
    this.showModal()
    this.setState({ initialValues: obj })
  }

  onFinishFailed = () => {}

  onFinish = async (values) => {
    const { _id } = this.state.initialValues
    const { countries } = this.state
    const { data: country } = await COUNTRIES_SERVICE.editOne(_id, values)
    const countriesUpdated = countries.map((c) => {
      if (c._id === _id) return { ...country, key: country._id }
      return c
    })
    this.setState({ countries: countriesUpdated })
    this.handleOk()
  }

  showModal = () => this.setState({ visible: !this.state.visible })

  handleCancel = () => this.showModal()

  handleOk = () => this.showModal()

  render() {
    const { countries, columns, visible, initialValues } = this.state

    return (
      <section style={{ flexDirection: 'column' }} className="myContainer">
        <Title>Countries</Title>
        <Table dataSource={countries} columns={columns} />
        <EditModal
          visible={visible}
          initialValues={initialValues}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          onFinishFailed={this.onFinishFailed}
          onFinish={this.onFinish}
        />
      </section>
    )
  }
}

export default Countries
