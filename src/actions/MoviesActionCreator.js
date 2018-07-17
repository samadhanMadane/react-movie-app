import MoviesActionConstants from '../constants/MoviesActionConstants';
import * as MoviesAPI from '../apis/MoviesAPI';

export const fetchMoviesSuccess = (movies) =>({
    type : MoviesActionConstants.MOVIES_FETCH_SUCCESS,
    payload : movies
})

export const fetchMovies = () =>{
        return function(dispatch, getState) {
            return(
                MoviesAPI.fetchMovies()
                .then((response)=>{
                 dispatch(fetchMoviesSuccess(response.data))
                })
            )
        }
}

// export const fetchMovieDetailsSuccess = (movies, movieId) =>({
//     type : MoviesActionConstants.MOVIES_DETAILS_SUCCESS,
//     movieId : movieId,
//     payload : movies
// })

// export const fetchMovieDetails = (movieId) =>{
//         return function(dispatch, getState) {
//             return(
//                 MoviesAPI.fetchMovies()
//                 .then((response)=>{
//                     dispatch(fetchMovieDetailsSuccess(response.data,movieId));
//                 })
//             )
//         }
// }

// export const fetchMovieDetailsSuccess = (movie) =>({
//     type : MoviesActionConstants.MOVIES_DETAILS_SUCCESS,
//     payload : movie
// })

// export const fetchMovieDetails = (movie) =>{
//         return function(dispatch, getState) {
//                 dispatch(fetchMovieDetailsSuccess(movie));
//         }
// }


export const addRemoveFavouritesSuceess = (movieId, isFav) =>({
    type : MoviesActionConstants.ADD_REMOVE_FAVOURITES_SUCCESS,
    movieId : movieId,
    isFav : isFav
})

export const addRemoveFavourites = (movieId, isFav) =>{
        return function(dispatch, getState) {
            dispatch(addRemoveFavouritesSuceess(movieId, isFav)); 
        }
}