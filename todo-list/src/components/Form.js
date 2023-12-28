import React, { useState } from 'react';

const Form = ({addTodo}) => {
    const[name, setName] = useState('');

    const handleInputChange = (e) => {
        setName(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()!=='')
        addTodo(name);
        setName('');
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter name' value={name} onChange={handleInputChange}/>
        <button type='submit'>Submit</button>
      </form>
      
    </div>
  );
}

export default Form;
