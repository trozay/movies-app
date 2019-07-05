import axios from 'axios'
import apiKey from './config'

const baseUrl = 'https://api.themoviedb.org/3/movie';

export const getLatestMovies = () => {
  return axios.get(`${baseUrl}/now_playing?api_key=${apiKey}&language=en-US&page=1`)
    .then(({ data: { results } }) => results)
};

export const getGenres = () => {
  return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then(({ data: { genres } }) => {
      return genres.reduce((lookUp, genre) => {
        lookUp[`${genre.id}`] = genre.name;
        return lookUp;
      }, {})
    })
};

export const getPopularMovies = () => {
  return axios.get(`${baseUrl}/upcoming?api_key=${apiKey}&language=en-US&page=1`)
    .then(({ data: { results } }) => results)
};



