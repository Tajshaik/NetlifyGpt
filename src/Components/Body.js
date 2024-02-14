import React,{useEffect} from 'react'
import Header from './Header'
import Browse from './Browse'

import { useNavigate } from 'react-router-dom'

const Body = () => {
  return (
    <div>
        <Header />
        <Browse />
    </div>
  )
}

export default Body