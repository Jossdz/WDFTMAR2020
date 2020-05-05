import React from 'react'
import logo from './logo.svg'
import './App.css'

import Card from './components/Card'
import Heading from './components/Heading'
import Footer from './components/Footer'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Card />
      <Button type="Primary">Puchame</Button>
      <Button type="Secondary">Puchame</Button>
      <Button type="Danger">Puchame</Button>
      <Button>Puchame</Button>
      <Heading title="Hola mundo" />
      <Heading title="Adios mundo" />
      <Footer />
    </div>
  )
}

export default App
