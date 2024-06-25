import React, { useState } from 'react'
import Navbar from './Navbar'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'; 
import List from './List';

const Home = () => {
    const [search, setsearch] = useState("")
  return (
   
    <div>
        <Navbar setsearch={setsearch}/>
      <List search={search}/>
    </div>
  )
}

export default Home
