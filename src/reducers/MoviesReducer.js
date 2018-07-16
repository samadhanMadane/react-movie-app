import MoviesActionConstatnts from '../constants/MoviesActionConstants';
import React from 'react';

export const MoviesReducer = (state = {}, action) =>{
    switch (action.type) {
        case MoviesActionConstatnts.MOVIES_FETCH_SUCCESS:
            return { ...state, movies : action.payload }
        
        case MoviesActionConstatnts.MOVIES_DETAILS_SUCCESS:
            // console.log("hello "+action.movieId);
            state.movies = action.payload;
            const id = state.movies.findIndex( movie => { return movie.imdbID == action.movieId})
            let movieDetails = {...state.movies[id]}
            return { ...state, movieDetails : movieDetails }

        case MoviesActionConstatnts.ADD_REMOVE_FAVOURITES_SUCCESS:
            const index = state.movies.findIndex( movie => { return movie.imdbID == action.movieId})
            let movies = [...state.movies]
            movies[index].isFav = action.isFav;

            return { ...state, movies : movies }
    
        default:
            return state;
    }
}