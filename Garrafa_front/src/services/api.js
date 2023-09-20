import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apigarrafa.atitude247.com.br',
    //baseURL: 'https://pokeapi.co/api/v2/',
});

export default api;