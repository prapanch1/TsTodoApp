import { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
      setTodos([...todos, newTodo]);
      setNewTodo('');
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
        {todos.map((todo) => (
          <li> {todo}</li>
        ))}
        </ul>
    </div>
  );
};
export default App
//new branch