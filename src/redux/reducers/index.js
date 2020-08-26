import { combineReducers } from 'redux';
import tasks, { filter } from './todoReducer';
import loader from './loaderReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
    tasks,
    filter,
    loader,
    error
})
export default rootReducer;