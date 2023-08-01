import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  if (todos.length === 0) {
    return <p className='texth1'>No todos found!</p>;
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
