import React from 'react';
import Ending from '../MainScreen/Ending';
import GamePlay from './GamePlay';
import { Transition, animated } from 'react-spring/renderprops';
import GreenBead from '../MainScreen/GreenBead';

function gcd_two_numbers(x, y) {
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}


class Form extends React.Component {
  constructor(props) {
    super(props);

    let x = this.props.numerator;
    let y = this.props.denominator;
    let g = gcd_two_numbers(x, y);

    let stages = [];

    for (let i = 2; i <= g; ++i) {
      while (g % i === 0) {
        let first = 1; while (g % first === 0) ++first;
        let second = first + 1; while (g % second === 0) ++second;
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
    if (this.state.curStage == this.state.stages.length) {
      return this.props.updateScreen();
    }
    this.setState({
      curStage: this.state.curStage + 1
    });
  }


  render() {
    return (
      (this.state.curStage > this.state.stages.length) ?
        (<div></div>)
        : (<div>
          <link rel="stylesheet" media="screen" href="https://content.dragonlearn.in/126749/3391/card.css" />
          <div className="uchiru_bg_cell" />
          <div className="uchiru_bg_color" />
          <div className="uchiru_bg_stuff" />
          <div className="uchiru_box">
            <div className="uchiru_head card with_progress">
              <a className="back-link" href="#" style={{}} onClick={this.props.mainScreen}>
                <div className="arrow-left" />
                <span>  Trở lại màn hình chính</span>
              </a>
              <div className="beads-wrapper">
                <div id="progress">
                <span>Đã hoàn thành {this.props.screen} / {this.props.length}</span>
                </div>
              </div>
              <div className="uchiru-head__right-group">
              </div>
            </div>

            <div className="card_content">
              <div id="board" className="uchiru-place card player-1 script3811 fixed cr" style={{ lineHeight: '1.29' }}>

                <Transition
                  items={this.state.curStage}
                  from={{ position: 'absolute', opacity: 0 }}
                  enter={{ opacity: 1 }}
                  leave={{ opacity: 0 }}
                  config={{ duration: 750 }}
                >
                  {show => show && (props => (
                    <animated.div style={props}>
                      <GamePlay
                        denominator={this.state.stages[this.state.curStage - 1].denominator}
                        numerator={this.state.stages[this.state.curStage - 1].numerator}
                        answers={this.state.stages[this.state.curStage - 1].answers}
                        continueGame={() => this.changeState()}
                      ></GamePlay>
                    </animated.div>
                  ))}
                </Transition>

              </div>
            </div>
          </div>
          <iframe id="intercom-frame" style={{ position: 'absolute !important', opacity: 1, width: '1px !important', height: '1px !important', top: '0px !important', left: '0px !important', border: 'none !important', display: 'block !important', zIndex: '-1 !important', overflow: 'visible' }} aria-hidden="true" tabIndex={-1} title="Intercom" __idm_frm__={719} />
          <div id="eJOY__extension_root" style={{ all: 'unset' }} />
          <div id="intercom-container" className="intercom-namespace">
            <style dangerouslySetInnerHTML={{ __html: "\n            html.intercom-mobile-messenger-active,\n            html.intercom-mobile-messenger-active>body,\n            html.intercom-modal-open,\n            #intercom-container-body {\n                overflow: hidden !important;\n            }\n\n            html.intercom-mobile-messenger-active,\n            html.intercom-mobile-messenger-active>body {\n                position: static !important;\n            }\n\n            html.intercom-mobile-messenger-active>body {\n                height: 0 !important;\n                margin: 0 !important;\n            }\n\n            iframe#intercom-frame {\n                position: absolute !important;\n                opacity: 0 !important;\n                width: 1px !important;\n                height: 1px !important;\n                top: 0 !important;\n                left: 0 !important;\n                border: none !important;\n                display: block !important;\n                z-index: -1 !important;\n            }\n        " }} />
            <div className="intercom-app" aria-live="polite">
              <div id="intercom-modal-container" />
            </div>
          </div>
          <div id="intercom-css-container">
            <style data-emotion="intercom-global" dangerouslySetInnerHTML={{ __html: "" }} />
          </div>
        </div>
        ));
  }
};

export default Form;