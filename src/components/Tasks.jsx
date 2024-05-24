import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTaskToFirestore, fetchData, updateTaskInFirestore, deleteTaskFromFirestore } from '../redux/actions/firestoreActions';

function Tasks() {
  const [taskName, setTaskName] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.firestore.tasks);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleAddTask = () => {
    setError('');
    if (!taskName.trim()) {
      setError('Task name cannot be empty.');
      return;
    }
    const newTask = { name: taskName, completed: false };
    dispatch(addTaskToFirestore(newTask));
    setTaskName('');
  };

  const handleEditTask = (task) => {
    setEditMode(true);
    setTaskName(task.name);
    setCurrentTask(task);
  };

  const handleUpdateTask = () => {
    setError('');
    if (!taskName.trim()) {
      setError('Task name cannot be empty.');
      return;
    }
    if (currentTask) {
      dispatch(updateTaskInFirestore({ ...currentTask, name: taskName }));
      setTaskName('');
      setEditMode(false);
      setCurrentTask(null);
    }
  };

  const handleCompleteTask = (task) => {
    dispatch(updateTaskInFirestore({ ...task, completed: !task.completed }));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTaskFromFirestore(taskId));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="flex mb-4">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border border-gray-300 p-2 flex-1 rounded"
        />
        {editMode ? (
          <button onClick={handleUpdateTask} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Update Task</button>
        ) : (
          <button onClick={handleAddTask} className="bg-green-500 text-white px-4 py-2 rounded ml-2">Add Task</button>
        )}
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between bg-gray-100 p-2 rounded">
            <span className={`${task.completed ? 'line-through' : ''} flex-1`}>{task.name}</span>
            <button onClick={() => handleCompleteTask(task)} className="bg-green-500 text-white px-2 py-1 rounded">
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleEditTask(task)} className="bg-yellow-500 text-white px-2 py-1 rounded ml-2">Edit</button>
            <button onClick={() => handleDeleteTask(task.id)} className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
