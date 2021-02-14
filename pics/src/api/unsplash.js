import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
      Authorization:
        'Client-ID uQ9oEvciKR_aWZVVQvOIgH1u9O_sW5WK47dtPex3uV0',
    }
});