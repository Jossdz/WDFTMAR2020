import React, { Component } from 'react'
import { Card, Button, Spin } from 'antd'
import axios from 'axios'

class App extends Component {
  state = {
    visible: false,
    data: null,
    loading: false,
    next: '',
    prev: '',
  }

  fetchData = async (e, endpoint) => {
    this.setState({ loading: true })

    const { data } = await axios.get(
      endpoint || 'https://rickandmortyapi.com/api/character/'
    )
    this.setState({
      loading: false,
      data: data.results,
      prev: data.info.prev,
      next: data.info.next,
    })
  }

  sortData = () => {
    const { data } = this.state
    data.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({ data })
  }

  render() {
    if (this.state.loading)
      return (
        <main className="container">
          <Spin size="large" />
        </main>
      )
    return (
      <main className="container">
        {this.state.data && (
          <Button
            style={{ marginBottom: '10px' }}
            block
            type="primary"
            onClick={this.sortData}
          >
            Sort
          </Button>
        )}
        {!this.state.data && (
          <Button onClick={this.fetchData}>Fetch Data</Button>
        )}
        {this.state.data && <Characters characters={this.state.data} />}

        {this.state.prev && (
          <Button
            type="primary"
            onClick={(e) => this.fetchData(e, this.state.prev)}
          >
            Prev page
          </Button>
        )}
        {this.state.next && (
          <Button
            type="primary"
            onClick={(e) => this.fetchData(e, this.state.next)}
          >
            Next page
          </Button>
        )}
      </main>
    )
  }
}

export default App

function Characters(props) {
  return props.characters.map((person) => (
    <Card
      key={person.id}
      hoverable
      style={{ width: '350px', minHeight: '350px', marginBottom: '20px' }}
      cover={<img alt={person.name} src={person.image} />}
    >
      <Card.Meta title={person.name} description={person.status} />
    </Card>
  ))
}

// function Character(props) {
//   const { person } = props
//   return (
//     <Card
//       key={person.id}
//       hoverable
//       style={{ width: '350px', minHeight: '350px' }}
//       cover={<img alt={person.name} src={person.photo} />}
//     >
//       <Card.Meta
//         title={`${person.name} ${person.lastName}`}
//         description={person.desc}
//       />
//     </Card>
//   )
// }

// {/* {this.state.data.map((person) => (
//   <Card
//     key={person.id}
//     hoverable
//     style={{ width: '350px', minHeight: '350px' }}
//     cover={<img alt={person.name} src={person.photo} />}
//   >
//     <Card.Meta
//       title={`${person.name} ${person.lastName}`}
//       description={person.desc}
//     />
//   </Card>
// ))} */}
// {/*
//   <Characters characters={this.state.data}/>
// */}
// {/*
//   this.state.data.map(person => <Character person={person} />)
// */}
