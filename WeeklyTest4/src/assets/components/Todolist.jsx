import  { useState,useEffect } from 'react';

const TodoApp=()=> {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('Work');
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
  console.log('Saving to localStorage:', todos);
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

useEffect(() => {
  const storedTodos = localStorage.getItem('todos');
  console.log('Loaded from localStorage:', storedTodos);
  if (storedTodos) {
    setTodos(JSON.parse(storedTodos));
  }
}, []);



  const filteredTodos = todos.filter((todo) => {
  if (filter === 'completed') return todo.completed;
  if (filter === 'incomplete') return !todo.completed;
  return true;
});


  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: task,
        category,
        completed: false,
      },
    ]);
    setTask('');
    setCategory('Work');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };



  const startEditing = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveEditing = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editingText } : todo
      )
    );
    setEditingId(null);
    setEditingText('');
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditingText('');
  };

  const deleteTask = (id) => {
  const confirmDelete = window.confirm('Are you sure you want to delete this task?');
  if (confirmDelete) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
};
 

  return (
    <div className="todo-container">
      <h1>2. To-Do List</h1>
      <div className="filter-buttons">
  <button onClick={() => setFilter('all')}>All</button>
  <button onClick={() => setFilter('completed')}>Completed</button>
  <button onClick={() => setFilter('incomplete')}>Incomplete</button>
</div>

      <form onSubmit={addTask} className="todo-form">
        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="todo-input"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shopping">Shopping</option>
        </select>

        <button type="submit" className="add-btn">
          Add
        </button>
      </form>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          >
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="edit-input"
                />
                <button onClick={() => saveEditing(todo.id)} className="save-btn">
                  Save
                </button>
                <button onClick={cancelEditing} className="cancel-btn">
                  Cancel
                </button>
              </>
            ) : (
              <>
                <div
                  onClick={() => toggleComplete(todo.id)}
                  className="todo-text"
                >
                  {todo.text}
                  <span
                    className={`category-tag ${todo.category.toLowerCase()}`}
                  >
                    {todo.category}
                  </span>
                </div>
                <button
                  onClick={() => startEditing(todo.id, todo.text)}
                  className="edit-btn"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(todo.id)}
                  className="delete-btn"
                >
                 Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="empty-msg">No tasks yet! Add one above.</p>
      )}

    </div>
  );
}

export default TodoApp;
