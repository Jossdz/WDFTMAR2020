import React from 'react'
import styles from './index.module.css'

const Heading = (props) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{props.title}</h1>
    <h3
      style={{
        display: props.title === 'Hola mundo' ? 'block' : 'none',
      }}
    >
      perro
    </h3>
  </div>
)

export default Heading
