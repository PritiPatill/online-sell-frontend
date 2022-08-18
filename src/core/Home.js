import React from 'react'

import { API } from '../backend'
import Base from './Base';

import "../styles.css"


const Home = () => {
  return (
    <Base title="Home Page" description='Welcome to online tshirt store'>
      <h1 className='text-white'>Hello World</h1>
    </Base>
  )
}

export default Home