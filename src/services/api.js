import axios from 'axios';



//7def832adbcf74ec0f111e1ec6541d51
//Baase da URL:https://api.themoviedb.org/3/
//URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=7def832adbcf74ec0f111e1ec6541d51&append_to_response=videos


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;