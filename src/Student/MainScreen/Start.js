import React from 'react';
import { connect } from 'react-redux';
import StudentActions from '../../actions/student-actions';
import { Spring } from 'react-spring/renderprops';

class Start extends React.Component {
  render() {
    return (
      <Spring
        from={{ transform: 'translate3d(0, -200px, 0)' }}
        to={{ transform: 'translate3d(0, 0px, 0)' }}
      >
        {
          props => (
            <div style={props}>
              <div className="uchiru_bg_cell" />
              <div className="uchiru_bg_color" />
              <div className="uchiru_bg_stuff" />
              <div className="uchiru_box">
                <div className="uchiru_head card with_progress">
                  <div>
                    <a className="back-link" onClick={this.props.mainScreen}>
                      <div className="arrow-left" />
                      <span>           Trở lại màn hình chính</span>
                    </a>
                  </div>
                </div>
                <div className="card_content">
                  <div id="board" className="uchiru-place card player-1 script3771 fixed run_on_windows cr" style={{ lineHeight: '1.29' }}>
                    <div className="btn_play">
                      <button
                        style={{ border: "none", padding: 0, background: "none", width: '100%', height: '100%' }}
                        id="button-start-mainscreen"
                        onClick={this.props.nextScreen}
                      >
                        <div className="triangle">
                          <span>Bắt đầu</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </Spring>
    );
  }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    mainScreen: () => dispatch(StudentActions.Home)
  }
}

export default connect(null, mapDispatchtoProps)(Start);