import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Autocomplete extends Component {
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
    };

    static defaultProps = {
        suggestions: []
    };
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
    onChange = event =>{
        const { suggestions } = this.props;
        const userInput = event.currentTarget.value;

        // Filter our suggestion that are not in user's input
        const filteredSuggestions = suggestions.filter(
            suggestion => suggestion.toLowerCase().indexOf(userInput.toUpperCase())
        );

        // Update the user input and filtered suggestion, reset active suggestion
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestion:true,
            userInput: event.currentTarget.value
        });
    };

    // Event fired when user selects suggestion
    onClick = event => {
        // Update user input and reset the state
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestion: false,
            userInput: event.currentTarget.innerText
        });
    };

    onKeyDown = event => {
        const { activeSuggestion, filteredSuggestions } = this.state;

        // User press the enter key update the input and close suggestions
        if (event.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestion: false,
                userInput: filteredSuggestions[activeSuggestion]
            });
        }
        // User pressed the up arrow decrement the index
        else if (event.keyCode === 38){
            if (activeSuggestion === 0){
                return;
            }
            this.setState({ activeSuggestion: activeSuggestion -1 });
        } 
        // User pressed the down arrow
        else if (event.keyCode === 40){
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    render(){
        const {
            onChange,
            onClick,
            onKeyDown,
            state:{
                activeSuggestion,
                filteredSuggestion,
                showSuggestions,
                userInput
            }
        } = this;

        let suggestionsListComponent;

        if (showSuggestions && userInput) {
            if(filteredSuggestions.length){
                suggestionsListComponent = (
                    <ul class="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;

                            // Flag the active suggestion with a class
                            if (index === activeSuggestion) {
                                className = "suggestion-active";
                            }
                            return (
                                <li className={className} key={suggestion} onClick={onClick}>
                                    {suggestion}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <div class="no-suggestions">
                        <em>No suggestion available</em>
                    </div>
                );
            }
        }

        return(
            <Fragment>
                <input type="text" onChange={onChange} onKeyDown={onKeyDown} ></input>
                {suggestionsListComponent}
            </Fragment>
        );
    }
}

export default Autocomplete;