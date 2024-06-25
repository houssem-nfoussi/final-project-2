import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Card from './Card'

const List = ({search}) => {
    // const paintings=useSelector(state=>state.Paintings.paintings)
const paintings=useSelector(state=>state.PaintingSlice.paintings)
console.log(paintings)
    return (
    <div className='list'>
        {paintings.filter((el) => el.name.toLowerCase().includes(search.toLowerCase())).map((el) => (<Card el={el} />))}
      
    </div>
 
)
}

export default List
