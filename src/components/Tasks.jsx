import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, editTask, completeTask } from '../redux/reducers/tasksReducer';

function Tasks() {
  const [taskName, setTaskName] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleAddTask = () => {
    if (taskName.trim()) {
      const newTask = { id: Date.now(), name: taskName, completed: false };
      dispatch(addTask(newTask));
      setTaskName('');
    }
  };

  const handleEditTask = (task) => {
    setEditMode(true);
    setTaskName(task.name);
    setCurrentTask(task);
  };

  const handleUpdateTask = () => {
    if (taskName.trim() && currentTask) {
      dispatch(editTask({ ...currentTask, name: taskName }));
      setTaskName('');
      setEditMode(false);
      setCurrentTask(null);
    }
  };

  const handleCompleteTask = (taskId) => {
    dispatch(completeTask(taskId));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <h1>Tasks</h1>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      {editMode ? (
        <button onClick={handleUpdateTask}>Update Task</button>
      ) : (
        <button onClick={handleAddTask}>Add Task</button>
      )}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.name}
            </span>
            <button onClick={() => handleCompleteTask(task.id)}>Complete</button>
            <button onClick={() => handleEditTask(task)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
