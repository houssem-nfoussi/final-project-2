import React, { useState } from 'react'
import Modal from './Modal'

const Card = ({el}) => {
    const [show_modal, setshow_modal] = useState(false)
  return (
    <div className='card'>
      <img onClick={()=>setshow_modal(true)} src={el.image} alt="" />
      {show_modal?<Modal setshow_modal={setshow_modal} el={el} />:null}
    </div>
  )
}

export default Card
