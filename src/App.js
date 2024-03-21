import { TodoCounter } from './TodoCounter.js'
import { TodoSearch } from './TodoSearch.js'
import { TodoList } from './TodoList.js'
import { TodoItem } from './TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton.js';
import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALA', completed: false },
]

function App() {
  return (
    <>
      <TodoCounter
        total={10}
        completed={3}
      />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton /> 
    </>
  );
}
export default App;
