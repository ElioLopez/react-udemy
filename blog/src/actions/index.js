import jsonPlacecholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
        const response = await jsonPlacecholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data })
    };  


 export const fetchUser = (id) => async (dispatch) => {
     const response = await jsonPlacecholder.get(`/users/{$id}`);

     dispatch({ type: 'FETCH_USER', payload: response.data })
 };  
