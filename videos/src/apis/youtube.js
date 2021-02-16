import axios from 'axios'

const KEY = 'AIzaSyD1G9q7WJ7W9rQO-WujhQWB9psnAyzjezM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});