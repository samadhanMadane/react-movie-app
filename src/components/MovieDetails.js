import React, { Component } from 'react';
import axios from 'axios';
import '../styles/MovieDetails.css';
import { BrowserRouter, Link, Route } from "react-router-dom";
import {connect} from 'react-redux';
import * as moviesActions from '../actions/MoviesActionCreator';
import {bindActionCreators} from 'redux';
import '../../node_modules/font-awesome/css/font-awesome.min.css'

class MovieDetails extends Component {

    componentWillMount(){
        // this.props.moviesActions.fetchMovies();
        this.props.moviesActions.fetchMovieDetails(this.props.match.params.movieId);
    }

    render() {        
        return (
            <div className="movieDoc-details">
            <div className="other-details">
               <img className="movies-poster" src={this.props.movieDetails.Poster}/>
               <div className="director">
               <span className="movie-headers">Director : </span>{this.props.movieDetails.Director}
                    </div>
                    <div className="director">
                    <span className="movie-headers">Production : </span>{this.props.movieDetails.Production}</div>
                    <div className="director">
                    <span className="movie-headers">Response : </span>{this.props.movieDetails.Response}</div>
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
                  <i className="fa fa-calendar"/>&nbsp;&nbsp; {this.props.movieDetails.Released}
                  </span>
                  <span className="release-time">
                  <i className="fa fa-clock-o"/>&nbsp;&nbsp; {this.props.movieDetails.Runtime}
                  </span>
                  </div>
                
                  {/* Metascore : {this.props.movieDetails.Metascore}<br/> */}
                  {/* Ratings : {this.props.movieDetails.Ratings}<br/> */}
                  {/* Rated :  {this.props.movieDetails.Rated}<br/> */}
                  {/* <h3 className="movie-synopsis">Synopsis:</h3> */}
                  <p className="movie-plot">
                  <span className="movie-headers">Synopsis</span>
                      <p>{this.props.movieDetails.Plot}</p>
                  </p>
                  <div className="type-detail">
                  <div className="movie-actors">
                  <span className="movie-headers">Actors : </span>
                  {this.props.movieDetails.Actors}
                  </div>
                  <div className="movie-actors">   
                    <span className="movie-headers">Writer : </span>{this.props.movieDetails.Writer}</div>
                  <div className="movie-actors">
                  <span className="movie-headers">Rating : </span>
                  {this.props.movieDetails.imdbRating} / 10
                  </div>
                  <div className="movie-actors">
                  <span className="movie-headers">Votes : </span>
                  {this.props.movieDetails.imdbVotes}
                  </div>
                  <div className="movie-actors">
                  <span className="movie-headers">Website : </span>
                  <a href={this.props.movieDetails.Website} target="_blank">{this.props.movieDetails.Website}</a>
                  </div>
                  <div className="movie-actors">
                  <span className="movie-headers">Awards : </span>
                  {this.props.movieDetails.Awards}
                  </div>
                  <div className="movie-actors">
                  <span className="movie-headers">Box Office : </span>
                  {this.props.movieDetails.BoxOffice}
                  </div>
                  <div className="movie-actors">
                  <span className="movie-headers">Country : </span>
                  {this.props.movieDetails.Country}
                  </div>
                  <div className="movie-actors">
                  <span className="movie-headers">DVD : </span>
                  {this.props.movieDetails.DVD}
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