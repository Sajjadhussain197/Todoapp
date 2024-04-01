import React, { useState } from 'react'

const Input = (porps) => {
    const [inputText, setInputText]=useState('');
    const handlpress=(e)=>{
        if(e.keyCode===13){
            porps.addlistitem(inputText)
            setInputText("")
        }
    }
  return (
    
    <div >
    <div className="input-container">
      <input type='text' placeholder='Enter you Todo' value={inputText} className='input-box-todo'
        onChange={(e)=>{setInputText(e.target.value)}}
        onKeyDown={handlpress}
      />
      <button onClick={
        ()=>{
            porps.addlistitem(inputText)
            setInputText("")
        }
      } className='add-btn'>+</button>
    </div>
    </div>
  )
}

export default Input
