import React, {Component} from 'react';
import { Link, Route } from "react-router-dom";
import '../styles/MovieTile.css';

const MovieTile = (props) => {
     return (
                <Link to= {"/movies/" + props.movieId} className="tile-bg" >
                    <img className="img-poster" src={props.img_src}/>
                    <div className="movie-title">{props.movie_title} </div>
                    <div className="movie-year">{props.movie_year} </div>  
                </Link>
    );
}

export default MovieTile;