import axios from 'axios'
import apiKey from './config'

const baseMovieUrl = 'https://api.themoviedb.org/3/movie';
const baseTvUrl = 'https://api.themoviedb.org/3/tv';

export const getLatestMovies = () => {
  return axios.get(`${baseMovieUrl}/now_playing?api_key=${apiKey}&language=en-US&page=1`)
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
  return axios.get(`${baseMovieUrl}/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(({ data: { results } }) => results)
};

export const getPopularTvSeries = () => {
  return axios.get(`${baseTvUrl}/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(({ data: { results } }) => results)
};

export const getTopRatedMovies = () => {
  return axios.get(`${baseMovieUrl}/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    .then(({ data: { results } }) => results)
};

export const getTopRatedTvSeries = () => {
  return axios.get(`${baseTvUrl}/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    .then(({ data: { results } }) => results)
};

export const getSingleMovieDetails = movie_id => {
  return axios.get(`${baseMovieUrl}/${movie_id}?api_key=${apiKey}&language=en-US&page=1`)
    .then(({ data }) => data)
}

export const getCastByMovieId = movie_id => {
  return axios.get(`${baseMovieUrl}/${movie_id}?api_key=${apiKey}&language=en-US&page=1&append_to_response=credits`)
    .then(({ data: { credits: { cast } } }) => cast)
};





