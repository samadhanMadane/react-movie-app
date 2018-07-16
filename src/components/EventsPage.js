import React, {Component} from 'react';
import { Link, Route } from "react-router-dom";
import '../styles/EventsPage.css';

class EventsPage extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }

    render(){
        return (
            <div className="events-panel">
                <h4>Events Page</h4>
            </div>
    );
    }
}

export default EventsPage;