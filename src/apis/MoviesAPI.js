import axios from 'axios';

export const fetchMovies = () =>
    axios.get("http://www.mocky.io/v2/5b44a1b92f00006400583823");