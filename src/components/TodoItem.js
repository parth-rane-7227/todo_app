import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import '../components/TodoItem.css';

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTodo(todo.id)}>
        {todo.completed ? '✔️' : '❌'}
      </span>
      <p style={{color:"white"}}>{todo.task}</p>
      <button onClick={() => deleteTodo(todo.id)} className='buttondelete'>Delete</button>
    </div>
  );
};

export default TodoItem;
