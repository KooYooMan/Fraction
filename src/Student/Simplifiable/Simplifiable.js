import React, { Component } from "react";
import { connect } from "react-redux";
import Ending from "../MainScreen/Ending";
import StudentActions from "../../actions/student-actions";
import Start from "../MainScreen/Start";
import Stage2 from "./Stage2.js";

class Simplifiable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { started: false };
    this.start = this.start.bind(this);
  }

  start() {
    this.setState({
      started: true,
    });
  }

  render() {
    return (
      this.state.started ? (
				<Stage2
					numberOfExercises={this.props.numberOfExercises}
				/>
      ) : <Start nextScreen={this.start}/>
    );
  }
}

const mapStatetoProps = (store) => {
  return {
    numberOfExercises: store.Simplifiable.get('noQuestions')
  }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    mainScreen: () => {
      dispatch(StudentActions.Home);
    },
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Simplifiable);
