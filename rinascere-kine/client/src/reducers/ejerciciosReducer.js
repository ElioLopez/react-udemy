export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_EJERCICIOS':
       return action.payload;
    default:
        return state;
   }
};