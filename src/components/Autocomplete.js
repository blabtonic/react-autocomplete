import React, { Component } from 'react';

class Autocomplete extends Component{

    static defaultProps = {
        suggestions: []
    }
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

    // Event fires when input value changes 
    onChange = e =>{
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;

        // Filter our suggestion that are not in user's input
        const filteredSuggestions = suggestions.filter(
            suggestion => suggestion.toLowerCase().indexOf(userInput.toUpperCase())
        );

        // Update the user input and filtered suggestion, reset active suggestion
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestion:true,
            userInput: e.currentTarget.value
        });
    }

    render(){
        const {
            onChange,
            onClick,
            onKeyDown,
            state:{
                activeSuggestion,
                filteredSuggestion,
                showSuggestion,
                userInput
            }
        } = this;
        return(
            <input type="text" onChange={onChange} onKeyDown={onKeyDown} ></input>
        );
    }
}

export default Autocomplete;