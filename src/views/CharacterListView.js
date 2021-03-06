import React from "react";
import { connect } from "react-redux";

import CharacterList from "../components/CharacterList";
import { fetchCharacters } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    console.log("inListView", this.props.characters);
    if (this.props.fetching) {
      <div className="fetching">
        <h1>Hold On.. We're Summoning Your Characters.. </h1>
      </div>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    isFetching: state.charsReducer.isFetching
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { fetchCharacters }
)(CharacterListView);
