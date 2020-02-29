import React, { Component } from 'react';

class Autocomplete extends Component{
    constructor(props){
        super(props);
        this.state = {
            // Active selction index
            activeSuggestion: 0,

            // Suggestion that match the users input
            filteredSuggestion: [],

            // Whether or not the suggestion list is shown
            showSuggestion: false,

            // What the user has entered
            userInput: ""
        }
    }
    render(){
        return(
            <input></input>
        );
    }
}

export default Autocomplete;