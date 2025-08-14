import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

export type Todo = {
  text: string;
  completed: boolean;
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
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
      <button onClick={addTodo}>Add Todo</button>

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
