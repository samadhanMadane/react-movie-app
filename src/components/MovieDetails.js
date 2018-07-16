import React, { Component } from 'react';
import axios from 'axios';
import '../styles/MovieDetails.css';
import { BrowserRouter, Link, Route } from "react-router-dom";
import {connect} from 'react-redux';
import * as moviesActions from '../actions/MoviesActionCreator';
import {bindActionCreators} from 'redux';

class MovieDetails extends Component {

    componentDidMount(){
        // this.props.moviesActions.fetchMovies();
        this.props.moviesActions.fetchMovieDetails(this.props.match.params.movieId);
    }

    render() {        
        return (
            <div className="movieDoc-details" >
            <div className="other-details">
               <img className="movies-poster" src={this.props.movieDetails.Poster}/>
               <div className="director">
                    Director : {this.props.movieDetails.Director}
                    </div>
                    <div className="director">   
                    Writer : {this.props.movieDetails.Writer}</div>
                    <div className="director">
                    Production : {this.props.movieDetails.Production}</div>
                    <div className="director">
                    Response :  {this.props.movieDetails.Response}</div>
               </div> 
               <div className="movie-details">
               <div className="movie-name">
                  {this.props.movieDetails.Title}
                </div>
             
                <div className="type">
                <span className="movie-language">
                  {this.props.movieDetails.Language}
                </span>
                <span className="movie-type">
                  {this.props.movieDetails.Type}
                </span>
                <span className="movie-genre">
                  {this.props.movieDetails.Genre}
                  </span>
                  </div>
                  <div>
                  {/* Year : {this.props.movieDetails.Year}<br/> */}
                  </div>
                  <div className="type">
                      <span className="release-date">
                  Released Date : {this.props.movieDetails.Released}
                  </span>
                  <span className="release-time"> 
                  Runtime : {this.props.movieDetails.Runtime}
                  </span>
                  </div>
                
                  {/* Metascore : {this.props.movieDetails.Metascore}<br/> */}
                  {/* Ratings : {this.props.movieDetails.Ratings}<br/> */}
                  {/* Rated :  {this.props.movieDetails.Rated}<br/> */}
                  {/* <h3 className="movie-synopsis">Synopsis:</h3> */}
                  <p className="movie-plot">
                    {this.props.movieDetails.Plot}
                  </p>
                  <div className="type-detail">
                  <div className="movie-actors">
                  Actors : {this.props.movieDetails.Actors}
                  </div>
                  <div className="movie-actors">
                  imdbRating : {this.props.movieDetails.imdbRating}
                  </div>
                  <div className="movie-actors">
                  imdbVotes : {this.props.movieDetails.imdbVotes}
                  </div>
                  <div className="movie-actors">
                  Website :  <a href={this.props.movieDetails.Website} target="_blank">{this.props.movieDetails.Website}</a>
                  </div>
                  <div className="movie-actors">
                  Awards :  {this.props.movieDetails.Awards}
                  </div>
                  <div className="movie-actors">
                  BoxOffice :  {this.props.movieDetails.BoxOffice}
                  </div>
                  <div className="movie-actors">
                  Country : {this.props.movieDetails.Country}
                  </div>
                  <div className="movie-actors">
                  DVD :  {this.props.movieDetails.DVD}
                  </div>
                  </div>
                </div>
            </div>
        );  
    }
}


function mapStateToProps(state){
    return{
        movieDetails: state.moviesReducer.movieDetails || []
    }
}

function mapDispatchToProps(dispatch){
    return{
        moviesActions: bindActionCreators(moviesActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);