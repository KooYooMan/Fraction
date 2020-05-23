import React from 'react';
import Home from './Home';
import Form from './Form';
import {Transition, animated} from 'react-spring/renderprops';
import StudentActions from '../../actions/student-actions';
import { connect } from 'react-redux';
import Actions from '../../actions/step-by-step-action';
import Start from '../MainScreen/Start';
import Exam from '../../actions/step-by-step-action'
import Ending from '../MainScreen/Ending';

class StepByStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: this.props.screen
        }
        this.updateScreen = this.updateScreen.bind(this);
    }

    updateScreen() {
        this.setState({
            screen: this.state.screen + 1
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            screen: nextProps.screen
        })
    }

    render() {
        switch(this.state.screen) {
            case 0:
                return <Start nextScreen={() => this.updateScreen()} />;
            case this.props.listQuestion.length + 1:
                return <Ending />
            default:
                return <Form 
                    screen = {this.state.screen}
                    listQuestion = {this.props.listQuestion}
                    mainScreen = {() => {this.props.mainScreen()}}
                    updateScreen = {() => this.updateScreen()}
                />
        }
    }
}

const mapStatetoProps = (store) => {
    return {
        screen: store.StepByStep.get('screen'),
        listQuestion: Array.from(store.StepByStep.get('listQuestion'))
    }
}


const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        mainScreen: () => dispatch(StudentActions.Home),
        changeScreen: () => dispatch(Exam.Exam)
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(StepByStep);