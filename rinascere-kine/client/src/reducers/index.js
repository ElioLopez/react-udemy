import { combineReducers } from 'redux';
import ejerciciosReducer from './ejerciciosReducer';
import profesionalesReducer from './profesionalesReducer';
import authReducer from './authReducer'

export default combineReducers({
  ejercicios: ejerciciosReducer,
  profesionales: profesionalesReducer,
  auth: authReducer
});