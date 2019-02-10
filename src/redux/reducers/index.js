import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import costReducer from './costReducer';

const reducers = combineReducers({
    projectReducer,
    costReducer
})

export default reducers