import React from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { editTodo, removeTodo } from './counter/counterSlice'
export default function List({name}) {
    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    return (
        <>
        <ol className='listTodos'>
            {counter.map((el)=>{
              return(
               <div key={el.id} className='todoDiv'>
              
                <li >{el.name}</li>
                <div className='buttonDiv'>
                  <button onClick={()=>{dispatch(removeTodo(el.id))}}>Delete todo</button>
                  <button onClick={() => dispatch(editTodo({id:el.id,name:name}))}>Edit</button>
                </div>
              </div>
              )
              })
            }
        </ol>
        </>
  )
}
