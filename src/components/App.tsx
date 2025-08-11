import { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if(newTodo.trim()){
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const delTodo = (index: number) => {
    setTodos(todos.filter((thetodo, theIndexOfTheTodo) => theIndexOfTheTodo !== index));
  };

  return (
    <div>
      <h1>TODO APPLICATION</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Type todo here"
      />
      <button onClick={addTodo}>add todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li>
            {todo}
            <button onClick={() => delTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>

        <h5>todos :{todos}</h5>
        <h5>newTodo:{newTodo}</h5>
    </div>
  );
};
export default App
