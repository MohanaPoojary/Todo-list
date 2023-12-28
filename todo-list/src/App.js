
import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
const App = () => {
  const[todo, setTodo] = useState([]);

  const addTodo = (name) => {
    const newTodo = {
      id:new Date().getTime(),
      name:name,
    };
    setTodo((prevTodo)=> [...prevTodo, newTodo]);
  };
  return (
    <div className=''>
      <Header/>
      <Form addTodo={addTodo}/>
      <div>
        <h2>Entered Information</h2>
        <ul>
          {todo.map((todos)=>(
            <li key={todos.id}>{todos.name}</li>
          ))}
        </ul>
      </div>
    </div>
    
  );
}

export default App;
