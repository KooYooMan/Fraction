import React from 'react';
import { Spring } from 'react-spring/renderprops';

class GreenBead extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            position: [],
            display: []
        }
    }

    componentDidMount() {
        const newPosition = []
        const newDisplay = []
        for (let i = 0; i < this.props.len; ++ i) {
            newPosition.push(2 + 24 * i)
            newDisplay.push(<i className="az_ball_0" id="bead0" style={{left: `${newPosition[i]}px`}}></i>)
        }
        this.setState({
            position: newPosition,
            display: newDisplay
        })
    }

    componentWillReceiveProps(nextProps){
        const id = nextProps.len - nextProps.screen
        const newPosition = this.state.position
        const newDisplay = this.state.display
        const x = 440 - (nextProps.len - 1 - id) * 24
        newDisplay[id] = (
            <Spring
                from={{ left: `${newPosition[id]}px` }}
                to={{ left: `${x}px` }}
                config={{
                    duration: 200
                }}
            >
                {
                    props => <i class="az_ball_0" style={props}></i>
                }
            </Spring>
        )
        newPosition[id] = x
        this.setState({
            position: newPosition,
            display: newDisplay
        })
    }

    render() {
        console.log('hello', this.state.display)
        return (
            <div className="inner_progress">
                {this.state.display}
            </div>
        );
    }
}
export default GreenBead;