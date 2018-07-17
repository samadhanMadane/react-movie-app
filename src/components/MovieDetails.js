import React, { Component } from 'react';
import axios from 'axios';
import '../styles/MovieDetails.css';
import { BrowserRouter, Link, Route } from "react-router-dom";
import {connect} from 'react-redux';
import * as moviesActions from '../actions/MoviesActionCreator';
import {bindActionCreators} from 'redux';
import '../../node_modules/font-awesome/css/font-awesome.min.css'

class MovieDetails extends Component {
    constructor(props){
        super(props);
        console.log("constructor",this.props);
        this.movieDetails = {}

    }

    componentWillMount(){
        // this.props.moviesActions.fetchMovies();
        console.log("componentWillmount");  
        if(this.props.movies.length === 0){
            this.props.moviesActions.fetchMovies();
        }
    }

    render() {
        if (this.props.movies.length != 0){
            const index = this.props.movies.findIndex( mov => { return mov.imdbID == this.props.match.params.movieId})
            this.movieDetails = this.props.movies[index];
        }
        console.log("render",this.movieDetails);
        return (
            <div className="movieDoc-details">
            <div className="other-details">
               <img className="movies-poster" src={this.movieDetails.Poster}/>
               <div className="director">
               <span className="movie-headers">Director : </span>{this.movieDetails.Director}
                    </div>
                    <div className="director">
                    <span className="movie-headers">Production : </span>{this.movieDetails.Production}</div>
                    <div className="director">
                    <span className="movie-headers">Response : </span>{this.movieDetails.Response}</div>
               </div> 
               <div className="movie-details">
               <div className="movie-name">
                  {this.movieDetails.Title}
                </div>
             
                <div className="type">
                <span className="movie-language">
                  {this.movieDetails.Language}
                </span>
                <span className="movie-type">
                  {this.movieDetails.Type}
                </span>
                <span className="movie-genre">
                  {this.movieDetails.Genre}
                  </span>
                  </div>
                  <div>
                  {/* Year : {this.props.movieDetails.Year}<br/> */}
                  </div>
                  <div className="type">
                      <span className="release-date">
                  <i className="fa fa-calendar"/>&nbsp;&nbsp; {this.movieDetails.Released}
                  </span>
                  <span className="release-time">
                  <i className="fa fa-clock-o"/>&nbsp;&nbsp; {this.movieDetails.Runtime}
                  </span>
                  </div>
                
                  {/* Metascore : {this.props.movieDetails.Metascore}<br/> */}
                  {/* Ratings : {this.props.movieDetails.Ratings}<br/> */}
                  {/* Rated :  {this.props.movieDetails.Rated}<br/> */}
                  {/* <h3 className="movie-synopsis">Synopsis:</h3> */}
                  <p className="movie-plot">
                  <span className="movie-headers">Synopsis</span>
                      <p>{this.movieDetails.Plot}</p>
                  </p>
                  <div className="type-detail">
                  <div className="movie-actors">
                  <span className="movie-headers">Actors : </span>
                  {this.movieDetails.Actors}
                  </div>
                  <div className="movie-actors">   
                    <span className="movie-headers">Writer : </span>{this.movieDetails.Writer}</div>
                  <div className="movie-actors">
                  <span className="movie-headers">Rating : </span>
                  {this.movieDetails.imdbRating} / 10
                  </div>
                  <div className="movie-actors">
                  <span className="movie-headers">Votes : </span>
                  {this.movieDetails.imdbVotes}
                  </div>
                  <div className="movie-actors">
                  <span className="movie-headers">Website : </span>
                  <a href={this.movieDetails.Website} target="_blank">{this.movieDetails.Website}</a>
                  </div>
                  <div className="movie-actors">
                  <span className="movie-headers">Awards : </span>
                  {this.movieDetails.Awards}
                  </div>
                  <div className="movie-actors">
                  <span className="movie-headers">Box Office : </span>
                  {this.movieDetails.BoxOffice}
                  </div>
                  <div className="movie-actors">
                  <span className="movie-headers">Country : </span>
                  {this.movieDetails.Country}
                  </div>
                  <div className="movie-actors">
                  <span className="movie-headers">DVD : </span>
                  {this.movieDetails.DVD}
                  </div>
                  </div>
                </div>
            </div>
        );  
    }
}


function mapStateToProps(state){
    return{
        // movieDetails: state.moviesReducer.movieDetails || {},
        movies : state.moviesReducer.movies || []
    }
}

function mapDispatchToProps(dispatch){
    return{
        moviesActions: bindActionCreators(moviesActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);