import { useReducer, useState } from "react";
import './createtodo.css';

function handlereduce(state, action)
{
      if(action.type == 'simple')
      {
          return
          {
             todo:""
          }
      }

      if(action.type == 'complex')
      {
          return {
             todo:action.extra_parem
          }
      }
}

function CreateTodo({handleAddTodo})
{    
    const [state, dispatch] = useReducer(handlereduce, {todo:""})
     return (
        <div className="wrapper-div">
            <input className="input-box" placeholder="Add Todo... " value = {state.todo} onChange={(e) => dispatch({
                 type:'complex',
                 extra_parem:e.target.value
            })}></input>
            <button className="button-box" onClick={() =>{
                   handleAddTodo(state.todo);
                   dispatch({
                      type:'simple'
                   })
            }}>Add Todo</button>
        </div>
     );
}

export default CreateTodo