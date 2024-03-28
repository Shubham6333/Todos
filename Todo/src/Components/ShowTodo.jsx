import { useEffect, useState } from "react";
import './showtodo.css'

function ShowTodo({con, handleclickdel, handleedit})
{   
    const [check, setCheck] = useState(0);
    const [temp, setTemp] = useState(con.data);
    useEffect(() => {
         setTemp(con.data);
    }, [handleclickdel]);
    return (
           <div className="wrapper-div">
                 <input className="input-box" type="checkbox"></input>
                {(check == 0) ? <span>{con.data}</span> : <input value = {temp} onChange={(e) => setTemp(e.target.value)}></input> }
                 <button className="button-box" onClick ={() => {
                      setCheck(check ^ 1);
                      if(check == 1)
                      {    
                           handleedit(temp, con.id);
                      }
                 }}>
                    
                    Edit</button>
                 <button className="button-box" onClick={() => {
                      handleclickdel(con.id - 1);
                 }}>Delete</button>
           </div>
    );
}

export default ShowTodo;