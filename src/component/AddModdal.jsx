import React from 'react'
import { useDispatch } from 'react-redux'
import { addpaint } from '../Slices/PaintingSlice'

const AddModdal = ({setshowadd,setnewpainting,newpainting}) => {
    const dispatch=useDispatch()
  return (
    <div className='modal'>
        <div className="add_box">
            
            <button className='x' onClick={()=>setshowadd(false)} >X</button>
            <h1>Add your own art work for others to buy</h1>
            <input type="text" onChange={(e)=>setnewpainting({...newpainting,name:e.target.value})}placeholder="name"/>
            <input type="text" onChange={(e)=>setnewpainting({...newpainting,description:e.target.value})} placeholder="description"/>
            <input type="text" onChange={(e)=>setnewpainting({...newpainting,image:e.target.value})} placeholder="image" />
            <input type="number" onChange={(e)=>setnewpainting({...newpainting,price:e.target.value})} placeholder="price" />
            <input type="text" onChange={(e)=>setnewpainting({...newpainting,category:e.target.value})} placeholder="category" />
            <button onClick={()=>{setshowadd(false);(dispatch(addpaint(newpainting)))}}>ADD</button>
        </div>
      
    </div>
  )
}

export default AddModdal
