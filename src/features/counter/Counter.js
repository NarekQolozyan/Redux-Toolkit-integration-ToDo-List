import React, { useState } from 'react';
// import List from "./features/list.js"

import { useDispatch } from 'react-redux';
import {
  addText,
  deleteAllTodos,
} from './counterSlice';
import List from '../list';

export function Counter() {
  
    const dispatch = useDispatch()
  
  const [text, setText] = useState({
    id: new Date().toString(),
    name: ""
  });
  const onSumbit = (event) =>{
    event.preventDefault()
    if(text.name!==""){
      dispatch(addText(text))
    }
    setText({
      id: new Date().toString(),
      name: ""
    })
  }
  return (
    <>
    <div className='formDiv'>
      <form onSubmit={onSumbit} className='main'>
        <input value = {text.name} onChange={(el) => setText({...text,name: el.target.value})}/>
        <button className='addButton'>add text </button>

      <button onClick={() => dispatch(deleteAllTodos())} className='deleteButton'>Delete All</button>
      </form>
      <List name={text.name}/>
    </div>
    </>
  )
}
