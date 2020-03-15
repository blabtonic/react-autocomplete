/**
 * BOTTOM AUTOSEARCH 
 * suggestions gets called as a product array, array will need to be from database or JSON
 * more customizable
 */
import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

// products variable will have to get product info from the API TODO:// Try multidimentional array 
const products = [
  {
    name: "DL4MED"
  },
  {
    name: "MINNE9593"
  },
  {
    name: "53/39NDJU5G"
  },
  {
    name: "54/39NDJU5G"
  },
  {
    name: "55/39NDJU5G"
  },
  {
    name: "56/39NDJU5G"
  },
  {
    name: "57/39NDJU5G"
  },
  {
    name: "58/39NDJU5G"
  },
  {
    name: "LMED9434"
  },
  {
    name: "LMED9434A"
  },
  {
    name: "LMED9434B"
  },
  {
    name: "LMED9434C"
  },
  {
    name: "LMED9434D"
  },
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toUpperCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : products.filter(part_obj =>
    part_obj.name.toUpperCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class AutoSuggestion extends Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Scan Product',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default AutoSuggestion;