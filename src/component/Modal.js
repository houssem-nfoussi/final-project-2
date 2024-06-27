import React from 'react'

const Modal = ({el,setshow_modal}) => {
  return (
    <div className="modal">
      
        <div className="box">
        <div><button className='x2' onClick={()=>setshow_modal(false)}>X</button></div>
            {/* <h1>{el.name}</h1> */}
            <h1>description:{el.description}</h1>
            <h1>price:{el.price}$</h1>
            <select className="poster_size">
                <option>select size</option>
                <option>M: 45*32cm</option>
                <option>L: 67.5*48cm</option>
                <option>XL :90*64cm</option>
            </select>
           
        </div>
    </div>
  )
}

export default Modal 

