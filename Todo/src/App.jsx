import { useState } from 'react'
import './App.css'
import CreateTodo from './Components/CreateTodo'
import ShowTodo from './Components/ShowTodo'

function App() {
     
    const v1 = [{id:1, data:"help1"}, {id:2, data:"help2"}];
    const [content, setContent] = useState(v1);

    function handleAddTodo(Todo_content)
    {
         setContent([...content, {id: content.length + 1, data:Todo_content}]);
        // console.log(content);
    }

    function handleclickdel(del_id)
    {
        let v2 = [];
        console.log(content);
        console.log(del_id);
        for(let i = 0; i < content.length; i++)
        {    
             if(del_id > i)
             {
                v2.push(content[i]);
             }

            else if(del_id < i)
             {
               v2.push({id:del_id + 1, data:content[i].data});
               del_id++;
             }

        }
         setContent(v2);
    }

  function handleedit(new_data, edit_id)
  {
       let v2 = content;
      //  console.log(v2);
      //  console.log(edit_id);
       for(let i = 0; i < v2.length; i++)
       {
           if(edit_id == i + 1)
           {
              v2[i].data = new_data;
           }
       }

       setContent(v2);
  }

  return (
    <> 
       <CreateTodo handleAddTodo = {handleAddTodo}></CreateTodo>
       {content.map((con) => <ShowTodo key =  {con.id} con = {con} handleclickdel={handleclickdel} handleedit={handleedit}></ShowTodo>)}
    </>
  )
}

export default App
