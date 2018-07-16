import React, {Component} from 'react';
import { Link, Route } from "react-router-dom";
import '../styles/MoviesPage.css';
import MovieList from '../components/MovieList';

class MoviesPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            showAll : true,
        }
    }

    toggleDisplay(){
        this.setState(
            {   
                showAll : !this.state.showAll
            }
        )
        //  console.log(this.state.all + " "+ this.state.favourite);
    }

    render(){
        return (
            <div className="movies-panel">
                <div className="movie-toggle">
                    <input className="radio-button" type="radio" name="movie-page" onChange={() => this.toggleDisplay()} value="all" checked={this.state.showAll}/> All 
                    <input className="radio-button" type="radio" name="movie-page" onChange={() => this.toggleDisplay()} value="favourites" checked={!this.state.showAll}/> Favourites 
                    <input className="search-box" type="text" placeholder="Type here to search..."/>
                </div>
                <div className="movielist-bg">
                    <MovieList showAll={this.state.showAll}/>
                </div>
            </div>
    );
    }
}

export default MoviesPage;