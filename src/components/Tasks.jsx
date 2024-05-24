import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTaskToFirestore, fetchData, updateTaskInFirestore, deleteTaskFromFirestore } from '../redux/actions/firestoreActions';

function Tasks() {
  const [taskName, setTaskName] = useState('');
  const [taskLabel, setTaskLabel] = useState('');
  const [taskPriority, setTaskPriority] = useState('low');
  const [taskTags, setTaskTags] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.firestore.tasks);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      dispatch(fetchData());
    } else {
      const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: localTasks });
    }
  }, [dispatch, user]);

  const handleAddTask = () => {
    setError('');
    if (!taskName.trim()) {
      setError('Task name cannot be empty.');
      return;
    }
    const newTask = {
      name: taskName,
      label: taskLabel,
      priority: taskPriority,
      tags: taskTags.split(',').map((tag) => tag.trim()),
      completed: false,
    };
    if (user) {
      dispatch(addTaskToFirestore(newTask));
    } else {
      const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      localTasks.push({ ...newTask, id: Date.now().toString() });
      localStorage.setItem('tasks', JSON.stringify(localTasks));
      dispatch({ type: 'ADD_TASK_SUCCESS', payload: { ...newTask, id: Date.now().toString() } });
    }
    setTaskName('');
    setTaskLabel('');
    setTaskPriority('low');
    setTaskTags('');
  };

  const handleEditTask = (task) => {
    setEditMode(true);
    setTaskName(task.name);
    setTaskLabel(task.label);
    setTaskPriority(task.priority);
    setTaskTags(task.tags.join(', '));
    setCurrentTask(task);
  };

  const handleUpdateTask = () => {
    setError('');
    if (!taskName.trim()) {
      setError('Task name cannot be empty.');
      return;
    }
    if (currentTask) {
      const updatedTask = {
        ...currentTask,
        name: taskName,
        label: taskLabel,
        priority: taskPriority,
        tags: taskTags.split(',').map((tag) => tag.trim()),
      };
      if (user) {
        dispatch(updateTaskInFirestore(updatedTask));
      } else {
        const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const taskIndex = localTasks.findIndex((task) => task.id === currentTask.id);
        localTasks[taskIndex] = updatedTask;
        localStorage.setItem('tasks', JSON.stringify(localTasks));
        dispatch({ type: 'UPDATE_TASK_SUCCESS', payload: updatedTask });
      }
      setTaskName('');
      setTaskLabel('');
      setTaskPriority('low');
      setTaskTags('');
      setEditMode(false);
      setCurrentTask(null);
    }
  };

  const handleCompleteTask = (task) => {
    if (user) {
      dispatch(updateTaskInFirestore({ ...task, completed: !task.completed }));
    } else {
      const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const taskIndex = localTasks.findIndex((t) => t.id === task.id);
      localTasks[taskIndex].completed = !task.completed;
      localStorage.setItem('tasks', JSON.stringify(localTasks));
      dispatch({ type: 'UPDATE_TASK_SUCCESS', payload: { ...task, completed: !task.completed } });
    }
  };

  const handleDeleteTask = (taskId) => {
    if (user) {
      dispatch(deleteTaskFromFirestore(taskId));
    } else {
      const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const newTasks = localTasks.filter((task) => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      dispatch({ type: 'DELETE_TASK_SUCCESS', payload: taskId });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="flex flex-col mb-4">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
          className="border border-gray-300 p-2 rounded mb-2"
        />
        <input
          type="text"
          value={taskLabel}
          onChange={(e) => setTaskLabel(e.target.value)}
          placeholder="Task Label"
          className="border border-gray-300 p-2 rounded mb-2"
        />
        <select
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
          className="border border-gray-300 p-2 rounded mb-2"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        <input
          type="text"
          value={taskTags}
          onChange={(e) => setTaskTags(e.target.value)}
          placeholder="Tags (comma separated)"
          className="border border-gray-300 p-2 rounded mb-2"
        />
        {editMode ? (
          <button onClick={handleUpdateTask} className="bg-blue-500 text-white px-4 py-2 rounded">Update Task</button>
        ) : (
          <button onClick={handleAddTask} className="bg-green-500 text-white px-4 py-2 rounded">Add Task</button>
        )}
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between bg-gray-100 p-2 rounded">
            <div className="flex-1">
              <span className={`${task.completed ? 'line-through' : ''} font-bold`}>{task.name}</span>
              <span className="ml-2 text-gray-500">{task.label}</span>
              <span className={`ml-2 px-2 py-1 rounded ${task.priority === 'high' ? 'bg-red-500 text-white' : task.priority === 'medium' ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'}`}>{task.priority}</span>
              <span className="ml-2 text-gray-500">{task.tags.join(', ')}</span>
            </div>
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
