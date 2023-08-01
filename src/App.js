import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';
import logo from '../src/images/logo (2).png'

function App() {
  return (
    <TodoProvider>
      <div className="app">
        <img src={logo} width={50} height={50}/>
        <h1 className="texth1">Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
