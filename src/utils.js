import axios from 'axios'
import apiKey from './config'

const baseMovieUrl = 'https://api.themoviedb.org/3/movie';
const baseTvUrl = 'https://api.themoviedb.org/3/tv';


export const getGenres = () => {
  return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then(({ data: { genres } }) => {
      return genres.reduce((lookUp, genre) => {
        lookUp[`${genre.id}`] = genre.name;
        return lookUp;
      }, {})
    })
};

export const getLatestMovies = (page = 1) => {
  return axios.get(`${baseMovieUrl}/upcoming?api_key=${apiKey}&language=en-US&page=${page}`)
    .then(({ data: { results, total_pages } }) => [results, total_pages])
};

export const getPopularMovies = page => {
  return axios.get(`${baseMovieUrl}/popular?api_key=${apiKey}&language=en-US&page=${page}`)
    .then(({ data: { results, total_pages } }) => [results, total_pages])
};

export const getTopRatedMovies = page => {
  return axios.get(`${baseMovieUrl}/top_rated?api_key=${apiKey}&language=en-US&page=${page}`)
    .then(({ data: { results, total_pages } }) => [results, total_pages])
};

export const getMoviesPlayingNow = page => {
  return axios.get(`${baseMovieUrl}/now_playing?api_key=${apiKey}&language=en-US&page=${page}`)
    .then(({ data: { results, total_pages } }) => [results, total_pages])
}


export const getSingleMovieDetails = movie_id => {
  return axios.get(`${baseMovieUrl}/${movie_id}?api_key=${apiKey}&language=en-US&page=1`)
    .then(({ data }) => data)
}

export const getRelatedMovies = movie_id => {
  return axios.get(`${baseMovieUrl}/${movie_id}/similar?api_key=${apiKey}&language=en-US&page=1`)
    .then(({ data: { results } }) => results.slice(0, 12))
}

export const getPopularTvSeries = page => {
  return axios.get(`${baseTvUrl}/popular?api_key=${apiKey}&language=en-US&page=${page}`)
    .then(({ data: { results, total_pages } }) => [results, total_pages])
};

export const getTopRatedTvseries = page => {
  return axios.get(`${baseTvUrl}/top_rated?api_key=${apiKey}&language=en-US&page=${page}`)
    .then(({ data: { results, total_pages } }) => [results, total_pages])
};

export const getLatestTvSeries = page => {
  return axios.get(`${baseTvUrl}/airing_today?api_key=${apiKey}&language=en-US&page=${page}`)
    .then(({ data: { results, total_pages } }) => [results, total_pages])
};

export const getTvSeriesPlayingNow = page => {
  return axios.get(`${baseTvUrl}/latest?api_key=${apiKey}&language=en-US&page=${page}`)
    .then(({ data: { results, total_pages } }) => {
      console.log(results, 'GFGFGFBF')
      return [results, total_pages]
    })
};

export const getCastByMovieId = movie_id => {
  return axios.get(`${baseMovieUrl}/${movie_id}/credits?api_key=${apiKey}`)
    .then(({ data: { cast } }) => cast.slice(0, 15))
};





