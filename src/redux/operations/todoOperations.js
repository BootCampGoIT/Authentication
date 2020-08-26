import axios from 'axios';
import { loaderOn, loaderOff } from '../actions/loaderActions';
import { setTasks, addNewTask, deleteTask, checkImportant } from '../actions/todoActions';
import { setError, resetError } from '../actions/errorActions';

export const getTasksOperation = () => async (dispatch) => {
    try {
        dispatch(loaderOn());
        const response = await axios.get('https://bc-29-async-redux.firebaseio.com/tasks.json');
        dispatch(setTasks(response))
    } catch (error) {
        dispatch(setError("Something went wrong!!!"))
    }
    finally {
        dispatch(loaderOff())
    }
}

export const postTasksOperation = (task) => async (dispatch) => {
    try {
        dispatch(loaderOn());
        dispatch(resetError());
        const response = await axios.post('https://bc-29-async-redux.firebaseio.com/tasks.json', task);
        dispatch(addNewTask({ id: response.data.name, ...task }))
    } catch (error) {
        console.log('error', error)
        dispatch(setError("Something went wrong!!!"));
    }
    finally {
        dispatch(loaderOff())
    }
}
export const deleteTasksOperation = (id) => async (dispatch) => {
    try {
        // dispatch(loaderOn());
        dispatch(resetError());
        await axios.delete(`https://bc-29-async-redux.firebaseio.com/tasks/${id}.json`);
        dispatch(deleteTask(id));
    } catch (error) {
        dispatch(setError("Something went wrong!!!"))
    }
    finally {
        dispatch(loaderOff())
    }
}

export const setImportantTasksOperation = (id, task) => async (dispatch) => {
    try {
        dispatch(loaderOn());
        dispatch(resetError());
        await axios.patch(`https://bc-29-async-redux.firebaseio.com/tasks/${id}.json`, { ...task, important: !task.important });
        dispatch(checkImportant(id));
    } catch (error) {
        dispatch(setError("Something went wrong!!!"))
    }
    finally {
        dispatch(loaderOff())
    }
}