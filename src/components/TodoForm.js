import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { v4 as uuidv4 } from 'uuid'; // Import the uuidv4 function
import '../components/TodoForm.css';

const TodoForm = () => {
  const [task, setTask] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    addTodo({
      id: uuidv4(),
      task: task,
      completed: false,
    });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='inputForm'
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit" id="btn" className='button'>Add</button>
    </form>
  );
};

export default TodoForm;
