import { SIGN_IN, SIGN_OUT} from './types';
import rinascereData from '../apis/rinascereData';

export const signIn = () => {
  return {
    type: SIGN_IN
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const fetchEjercicios = () => async dispatch => {
  const response = await rinascereData.get('/ejercicios');

  dispatch({ type: 'FETCH_EJERCICIOS', payload: response.data });
};

export const fetchProfesional = id => async dispatch => {
  const response = await rinascereData.get(`/profesionales/${id}`);

  dispatch({ type: 'FETCH_PROFESIONAL', payload: response.data });
};
