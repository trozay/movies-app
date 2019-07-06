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

export const getTopRatedMovies = () => {
  return axios.get(`${baseUrl}/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    .then(({ data: { results } }) => results)
};

export const getUpcomingMovies = () => {
  return axios.get(`${baseUrl}/upcoming?api_key=${apiKey}&language=en-US&page=1`)
    .then(({ data: { results } }) => results)
};

export const getMovieDetails = movie_id => {
  return axios.get(`${baseUrl}/${movie_id}?api_key=${apiKey}&language=en-US&page=1`)
    .then(({ data }) => data)
}

export const getCastByMovieId = movie_id => {
  return axios.get(`${baseUrl}/${movie_id}?api_key=${apiKey}&language=en-US&page=1&append_to_response=credits`)
    .then(({ data: { credits: { cast } } }) => cast)
};





