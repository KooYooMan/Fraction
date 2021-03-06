import React from 'react';
import { connect } from 'react-redux';
import Simplifying from './Simplifying';
import WhenToSimplify from './WhenToSimplify';
import StepByStep from './StepByStep';
import SimplifyEverything from './SimplifyEverything';
import Simplifiable from './Simplifiable';

class Home extends React.Component {
    render() {
        switch(this.props.screen) {
            case 0:
                return <Simplifying />
            case 1:
                return <Simplifiable />
            case 2:
                return <StepByStep />
            case 3:
                return <SimplifyEverything />
            case 4:
                return <WhenToSimplify />
            default:
                return <h1>Error Rendering Lecturer</h1>
        }
    }
} 

const mapStatetoProps = (store) => {
    return {
        screen: store.Lecturer.get('screen')
    }
}

export default connect(mapStatetoProps)(Home);