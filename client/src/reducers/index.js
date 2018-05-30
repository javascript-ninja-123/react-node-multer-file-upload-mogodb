import { combineReducers } from 'redux';
import fileReducer from './file';


const rootReducer = combineReducers({
file:fileReducer
});

export default rootReducer;
