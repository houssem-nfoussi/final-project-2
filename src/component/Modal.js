import React from 'react'

const Modal = ({el,setshow_modal}) => {
  return (
    <div className="modal">
        <div className="box">
            <button className='x2' onClick={()=>setshow_modal(false)}>X</button>
            <h1>{el.name}</h1>
            <p>description:{el.description}</p>
            <h1>price:{el.price}$</h1>
            <select>
                <option>select size</option>
                <option>M 45*32cm</option>
                <option>L 67.5*48cm</option>
                <option>XL 90*64cm</option>
            </select>

        </div>
      
    </div>
  )
}

export default Modal 

