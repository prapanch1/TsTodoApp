import { useState } from 'react';
import { Todo } from './App';

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  const delTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleComplete = (index: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEdit = (index: number) => {
    setEditIndex(index);
    setEditText(todos[index].text);
  };

  const saveEdit = (index: number) => {
    if (editText.trim()) {
      setTodos(
        todos.map((todo, i) =>
          i === index ? { ...todo, text: editText } : todo
        )
      );
      setEditIndex(null);
      setEditText('');
    }
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => saveEdit(index)}>Save</button>
            </>
          ) : (
            <>
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? 'green' : 'red',
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => startEdit(index)}>Edit</button>
            </>
          )}
          <button onClick={() => delTodo(index)}>Delete</button>
          <button onClick={() => toggleComplete(index)}>
            {todo.completed ? 'Completed ✅' : 'Not Completed ❌'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
