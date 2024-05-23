import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction('ADD_TASK');
export const deleteTask = createAction('DELETE_TASK');
export const editTask = createAction('EDIT_TASK');
export const completeTask = createAction('COMPLETE_TASK');
