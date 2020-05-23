import React from 'react';
import GamePlay from './GamePlay';
import {Transition, animated} from 'react-spring/renderprops';
import GreenBead from '../MainScreen/GreenBead'

function gcd_two_numbers(x, y) {
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}


class Exam extends React.Component {
  constructor(props) {
    super(props);

    let x = this.props.numerator;
    let y = this.props.denominator;
    let g = gcd_two_numbers(x, y);

    let stages = [];

    for(let i = 2; i <= g; ++i) {
      while (g % i === 0) {
        let first = 1; while(g % first === 0) ++first;        
        let second = first + 1; while(g % second === 0) ++second;
        var newStage = {
          numerator: x,
          denominator: y,
          answers: [i, first, second]
        }

        stages = stages.concat(newStage);
        x /= i;
        y /= i;
        g /= i;
      }
    }


    stages = stages.concat({
      numerator: x,
      denominator: y,
      answers: [2, 3, 5]
    });
    this.state = {
      curStage: 1,
      stages: stages
    };
  }



  changeState() {
    if(this.state.curStage == this.state.stages.length) {
      return this.props.updateScreen();
    }
    this.setState({
      curStage: this.state.curStage + 1
    });
  }

    render(){
      return (
        (this.state.curStage > this.state.stages.length) ? 
        (<div></div>) 
        :
              <Transition
                items={this.state.curStage}
                from={{position:'absolute', opacity : 0}}
                enter={{opacity: 1}}
                leave={{opacity: 0}}
                config={{duration: 750}}
              >
                {show => show && (props => (
                  <animated.div style={props}>
                    <GamePlay 
                      denominator = {this.state.stages[this.state.curStage - 1].denominator}
                      numerator = {this.state.stages[this.state.curStage - 1].numerator}
                      answers = {this.state.stages[this.state.curStage - 1].answers}
                      continueGame = {() => this.changeState()}
                    ></GamePlay>
                  </animated.div>
                ))}
              </Transition>
      );
    }
  };

  export default Exam;