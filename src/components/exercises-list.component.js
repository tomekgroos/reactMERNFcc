import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

class ExercisesList extends Component {
    constructor(props){
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {exercises: []};
    }  

        componentDidMount() {
            axios.get('http://localhost:4000/exercises')
            .then(response => {
                this.setState((exercises: response.data))
            })
            .catch((error) => {
                console.log(error);
                
            })
        }

    render() {
        return (
            <div>
                <h1>This is the list</h1>
            </div>
        )
    }
}

export default ExercisesList;
