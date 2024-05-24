import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { setGlobalError } from '../reducers/globalErrorReducer';

// Action to fetch data from Firestore
export const fetchData = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'tasks'));
    const tasks = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: tasks });
  } catch (error) {
    console.error('Error fetching data: ', error);
    dispatch(setGlobalError('Error fetching data from Firestore.'));
  }
};

// Action to add a new task to Firestore
export const addTaskToFirestore = (task) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, 'tasks'), task);
    dispatch({ type: 'ADD_TASK_SUCCESS', payload: { id: docRef.id, ...task } });
  } catch (error) {
    console.error('Error adding task: ', error);
    dispatch(setGlobalError('Error adding task to Firestore.'));
  }
};

// Action to update a task in Firestore
export const updateTaskInFirestore = (task) => async (dispatch) => {
  try {
    const taskDoc = doc(db, 'tasks', task.id);
    await updateDoc(taskDoc, task);
    dispatch({ type: 'UPDATE_TASK_SUCCESS', payload: task });
  } catch (error) {
    console.error('Error updating task: ', error);
    dispatch(setGlobalError('Error updating task in Firestore.'));
  }
};

// Action to delete a task from Firestore
export const deleteTaskFromFirestore = (taskId) => async (dispatch) => {
  try {
    const taskDoc = doc(db, 'tasks', taskId);
    await deleteDoc(taskDoc);
    dispatch({ type: 'DELETE_TASK_SUCCESS', payload: taskId });
  } catch (error) {
    console.error('Error deleting task: ', error);
    dispatch(setGlobalError('Error deleting task from Firestore.'));
  }
};
