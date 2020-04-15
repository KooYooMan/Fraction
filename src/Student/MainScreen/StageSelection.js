import React from "react";
import StageCard from "./StageCard";
import { connect } from 'react-redux';
import actions from '../../actions/student-actions'

class StageSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stageImgs = [
      "3389-09a7f07b4baec5efbd2609245b94fc8f.png",
      "3390-e5c045b2a558cbda32ecebeeea99a982.png",
      "3391-40aaab2b73a867ce2b37564226a68fd8.png",
      "3392-aa0bb8aa0ba45aecef3a90164cf8f463.png",
      "india/hn-49bb6b1269464ab8ee1af3a95aaa3f58.png",
    ];

    const stageTitles = [
      "Simplifying fractions",
      "Simplifiable or not simplifiable",
      "Step-by-step",
      "Simplify everything",
      "When to simplify",
    ];

    const onClick = [
      this.props.SimplifyingFraction,
      () => alert('Simplifiable or not simplifiable'),
      () => alert('Step by step'),
      () => alert('Simplify everything'),
      () => alert('When to simplify')
    ]

    const imageStoreURL = "https://dragonlearn.in/assets/card_previews/";

    const stageCards = [];
    for (let i = 0; i < stageImgs.length; i++) {
      stageCards.push(
        <StageCard
          title={stageTitles[i]}
          imgLink={imageStoreURL + stageImgs[i]}
          stageTitle={stageTitles[i]}
          onClick={onClick[i]}
        />
      );
    }
    return (
      <div>
        <h1 className="pa3 b tc"> Simplifying fractions </h1>
        <div className="flex center items-center pa3">{stageCards}</div>;
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    SimplifyingFraction: () => dispatch(actions.SimplifyingFraction)
  }
}

export default connect(null, mapDispatchtoProps)(StageSelection);
