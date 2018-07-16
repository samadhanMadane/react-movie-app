import React, {Component} from 'react';
import { Link, Route } from "react-router-dom";
import '../styles/MovieList.css';
import MovieTile from './MovieTile';
import moviesArray from '../data/MovieData';
import axios from 'axios';
import {connect} from 'react-redux';
import * as moviesActions from '../actions/MoviesActionCreator';
import {bindActionCreators} from 'redux';

class MovieList extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         movies : [],
    //     }
    // }

    componentDidMount(){
        this.props.moviesActions.fetchMovies();
        // axios.get("http://www.mocky.io/v2/5b44a1b92f00006400583823")
        // .then(response => {
        //     this.setState({ movies: response.data })
        // })

        // this.setState({ movies: moviesArray });
    }

    // addRemoveFavourites = (movieId, isFav) =>{
    //     const index = this.props.movies.findIndex( movie => { return movie.imdbID == movieId})
    //     let movies = [...this.props.movies]
    //     movies[index].isFav = isFav;
    //     this.setState({
    //         movies : movies
    //     });

        // const movie = this.state.movies.find(m =>{
        //     if(m.imdbID === movieId){
        //         return m
        //     }
        //   });
        // //   console.log(movieId);
        // const tempFav = [...this.state.favourites, movie];

        // this.setState(
        //     {
        //         favourites:tempFav
        //     }
        // )
        // console.log(this.state.movies);
        // console.log(this.state.favourites);
    //   }

    //   removeFromFavourites = (movieId) =>{
    //     const index = this.state.movies.findIndex( movie => { return movie.imdbID == movieId})
    //     let movies = [...this.state.movies]
    //     movies[index].isFav = false;
    //     this.setState({
    //         movies : movies
    //     });
    //   }

    render(){
        let allMovies = null;
        if (this.props.movies.length != 0){
            allMovies = this.props.movies.map((movie) => {
                return(
                    <div className="moviesDoc-summary" key={movie.imdbID} 
                    // onClick={this.props.moviesActions.getMovieDetails()}
                    >
                        <MovieTile 
                        movieId={movie.imdbID} 
                        img_src={movie.Poster}
                        movie_title={movie.Title}
                        movie_year={movie.Year}/>
                        <input className={movie.isFav ? "add-fav" : "added-fav" } type="button" 
                                onClick={() => this.props.moviesActions.addRemoveFavourites(movie.imdbID, true)} 
                                value={movie.isFav ? "Added to favourites" : "Add to favourites"}/>
                    </div>
                        )
                });
        }

        let favMovies = null;
        if(this.props.movies.length != 0){
            favMovies = this.props.movies.map((movie) => {
                if (movie.isFav){
                    return(
                        <div className="moviesDoc-summary" key={movie.imdbID}>
                            <MovieTile  
                            movieId={movie.imdbID}
                            img_src={movie.Poster}
                            movie_title={movie.Title}
                            movie_year={movie.Year}/>
                            <input className="added-fav" type="button" 
                                    onClick={() => this.props.moviesActions.addRemoveFavourites(movie.imdbID, false)} 
                                    value="Remove from favourites"/>
                        </div>
                    )
                }
            });
        }
        
        return (
            <div className="moviesDoc-list">
                {this.props.showAll ? allMovies : favMovies}
            </div>
        );  
    }
}

function mapStateToProps(state){
    return{
        movies: state.moviesReducer.movies || []
    }
}

function mapDispatchToProps(dispatch){
    return{
        moviesActions: bindActionCreators(moviesActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);