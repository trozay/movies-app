import axios from 'axios'
import apiKey from './config'

const baseUrl = 'https://api.themoviedb.org/3/movie';

export const getLatestMovies = () => {
  return axios.get(`${baseUrl}/upcoming?api_key=${apiKey}&language=en-US&page=1`)
    .then(({ data: { results } }) => results)
};
