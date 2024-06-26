import React, { useState } from 'react'
import Navbar from './Navbar'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'; 
import List from './List';
import { useSelector } from 'react-redux';


const Home = () => {
  const paintings=useSelector(state=>state.PaintingSlice.paintings)
  const [newpainting, setnewpainting] = useState({
    name:"",
    description:"",
    image:"",
    price:0,
    category:""
  })
    const [search, setsearch] = useState("")
    const [categ, setcateg] = useState("all")
  return (
   
    <div>
      <div className='logo_section'>
        <img className='logo' src="data:image/png;base64,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" alt="" />
      </div>
      
        <Navbar setsearch={setsearch} setnewpainting={setnewpainting}  newpainting={newpainting}   />
        <h1 className='about'>ABOUT:</h1>
        <h2 className='about'>this website allows turns beautiful art work into posters for sale that are easely mounted using using magnets which do not damage your walls in the proccess.</h2>
        <div className='types'>
        <h1>CATEGORIES :</h1>
        <ul className='types'>
          <li className='pp'  onClick={()=>setcateg("all")} >ALL</li>
          <li className='pp' onClick={()=>setcateg("landscapes")} >landscapes</li>
          <li className='pp' onClick={()=>setcateg("gaming")} >gaming</li>
          <li className='pp' onClick={()=>setcateg("sport teams")} >sport teams</li>
          <li className='pp' onClick={()=>setcateg("movies,comics")} >movies,comics</li>
        </ul>
        </div>

      <List categ={categ} search={search}/>
    </div>
  )
}

export default Home
