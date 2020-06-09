import React, { Component } from "react";
import { connect } from "react-redux";
import StudentActions from "../../actions/student-actions";
import PlayScreen from "./components/PlayScreen";
import Task from "./components/Task";
import Box from "../Box";

function randomExamNumber() {
  return Math.round(Math.random() * 9 + 1);
}

function generateExam() {
  const randomExam = [];
  const randomMultiplier = Math.round(Math.random() * 2 + 2);
  const randomFraction = Math.round(Math.random() * 2) * 2;
  for (let i = 0; i < 6; i++) randomExam.push(randomExamNumber());
  randomExam[randomFraction] *= randomMultiplier;
  randomExam[randomFraction + 1] *= randomMultiplier;
  return randomExam;
}

class Stage2 extends Component {
  constructor(props) {
    super(props);

		this.pass = this.pass.bind(this);
    this.state = {
      randomExam: generateExam(),
    };
  }

	pass() {
		this.props.success();
		this.setState({ randomExam: generateExam() });
	}

  render() {
    return (
      <div className="center">
        <Task text={"Chọn một trong các phân số sau và tối giản nó"} />
        <PlayScreen
					pass={this.pass}
					fail={this.props.fail}
          exam={this.state.randomExam}
        />
      </div>
    );
  }
}

function Stage2Wrapper({ numberOfExercises, mainScreen }) {
	const Boxed = Box(Stage2, numberOfExercises, mainScreen);

	return (
		<Boxed />
	);
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    mainScreen: () => {
      dispatch(StudentActions.Home);
    },
  };
};

export default connect(null, mapDispatchtoProps)(Stage2Wrapper);
