import React, {useState} from 'react'

const TodoList = (props) => {
    
  return (
    <div>
      <li className="list-item">
        {props.item}
        <span className='icons'>

        <i className="fa-solid fa-trash-can icon-delete"
        onClick={e=>{
            props.delitem(props.index)
        }}></i>
        </span>
      </li>
    </div>
  )
}

export default TodoList
