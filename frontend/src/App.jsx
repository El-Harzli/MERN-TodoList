import React, { useEffect, useState } from 'react'
import Create from './Create.jsx'
import axios from 'axios';
import Delete from './Delete.jsx'
import MyCheckbox from './MyCheckbox.jsx'

function App() {

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:3000/")
    .then((result) => {
        setTodos(result.data);
    })
    .catch((err) => console.log('Fetch error:', err));
};





  return (
    <div className="container">
      <div>
        <h2>Todo List App</h2>
      </div>
      <Create  onTaskAdded={fetchData} />
      <div>
        {
        todos.length === 0 ? 
        (<h2>No Records</h2>) 
        :
        (todos.map((todo, index) =>{
          return (
          <div key={index} className='todo-item'>
            <MyCheckbox task={todo} onTaskUpdated={fetchData} />
            <h2 >{todo.task}</h2>
            <Delete task={todo} onTaskDelete={fetchData}/>
          </div>)
        }
      ))
        
        }
      </div>
    </div>
  )
}

export default App

