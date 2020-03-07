import React, { Component } from 'react'

class CreateExercises extends Component {
    constructor(props){
        super(props)

        this.state={
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    
    render() {
        return (
            <div>
                <h1>Create Exercise!</h1>
            </div>
        )
    }
}

export default CreateExercises;
