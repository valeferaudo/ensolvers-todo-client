import { combineReducers } from 'redux';
import authReducer from '../Auth/reducer';
import foldersReducer from '../Folders/reducer';
import tasksReducer from '../Tasks/reducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  folders: foldersReducer,
  auth: authReducer
});

export default rootReducer;