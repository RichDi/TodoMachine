import './TodoItem.css';

function TodoItem({text, completed}) {
    return (
      <li>
        <span className={
          `Icon Icon-check ${completed ? 'Icon-check--active' : 'Icon-check--inactive'}`
        }>V</span>
        <p className='TodoItem__p TodoItem__p--complete'>{text}</p>
        <span className='Icon Icon-delete'>X</span>
      </li>
    );
  }
export { TodoItem };