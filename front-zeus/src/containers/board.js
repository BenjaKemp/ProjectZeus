import React, { Component } from "react";
import { connect } from "react-redux";
import { selectWord } from "../actions/index";
import { SingleCard } from "./SingleCard";
<<<<<<< HEAD
=======
import CardModal from './CardModal'
>>>>>>> a2398b1dbe50a6f46584d28343e129fe72209efa
import "./containers.css";
import { Link } from "react-router-dom";


class Board extends Component {

  state = {
    selectedOption: undefined
  }
<<<<<<< HEAD
  handleClearSelectedOption = () => {
  this.setState(()=>({
    selectedOption: undefined
  }))
}
=======
>>>>>>> a2398b1dbe50a6f46584d28343e129fe72209efa

  renderList() {
    return this.props.words.map((word, index) => {
      return (


        <Link
          to={{ pathname: `/detail/${word.title}`, state: { index, word } }} key={index}
        >
          <SingleCard

            key={index}
          {...word}
          />
        </Link>
      );
    });
  }
  render() {
    return (
      <div className="bingoBoard shadow-drop-2-center">
        <div className="background">
          <div className="wrapper">{this.renderList()}</div>
        </div>

    </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    words: state.sightSeen.words
  };
}
function mapDispatchToProps(dispatch) {
  return {
    selectWord: (word, index) => dispatch(selectWord(word, index))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);



// <CardModal
//   selectedOption={this.state.selectedOption}
//   handleClearSelectedOption={this.handleClearSelectedOption}/>
