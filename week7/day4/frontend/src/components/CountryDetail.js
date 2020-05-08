import React, { Component } from 'react'
import { Typography } from 'antd'
import COUNTRIES_SERVICE from '../services/countriesService'

const { Title } = Typography
class CountryDetail extends Component {
  state = {
    country: {},
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const { data: country } = await COUNTRIES_SERVICE.readOne(id)
    this.setState({ country })
  }

  render() {
    const { country } = this.state
    console.log(country)
    return (
      <section style={{ flexDirection: 'column' }} className="myContainer">
        <Title>Country Info</Title>
        <Title level={2}>{country.name}</Title>
        <Title level={2}>Confirmed: {country.confirmed}</Title>
        <Title level={2}>Recovered: {country.recovered}</Title>
        <Title level={3}>Deaths: {country.deaths}</Title>
      </section>
    )
  }
}

export default CountryDetail
