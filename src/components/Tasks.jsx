import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, completeTask } from '../redux/reducers/tasksReducer';

function Tasks() {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleAddTask = () => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    dispatch(addTask(newTask));
    setTaskName('');
  };

  return (
    <div>
      <h1>Tasks</h1>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.name}
            </span>
            <button onClick={() => dispatch(completeTask(task.id))}>
              Complete
            </button>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
