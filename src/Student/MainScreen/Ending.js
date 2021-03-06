import React from 'react';
import actions from '../../actions/student-actions.js';
import { connect } from 'react-redux';
import './Ending.css'
import { Spring } from 'react-spring/renderprops';

class Ending extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            document.querySelector(".done").classList.add("drawn");
        }, 500);
    }

    render() {
        return (
            <Spring
                from={{ transform: 'translate3d(0, 200px, 0)' }}
                to={{ transform: 'translate3d(0, 0px, 0)' }}
            >
                {
                    props => (
                        <div className="contain" style={props}>
                            <div className="congrats">
                                <h1 className="pa5">
                                    Chúc mừng<span className="hide">ulation</span> !
                    </h1>
                                <div className="done">
                                    <svg
                                        version="1.1"
                                        id="tick"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 37 37"
                                        style={{ enableBackground: "new 0 0 37 37" }}
                                    // xml:space="preserve"
                                    >
                                        <path
                                            className="circ path"
                                            style={{
                                                fill: "#0cdcc7",
                                                stroke: "#07a796",
                                                strokeWidth: "3",
                                                strokeLinejoin: "round",
                                                strokeMiterlimit: "10",
                                            }}
                                            d={
                                                "M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24," +
                                                "0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
                                            }
                                        />
                                        <polyline
                                            className="tick path"
                                            style={{
                                                fill: "none",
                                                stroke: "#fff",
                                                strokeWidth: "3",
                                                strokeLinejoin: "round",
                                                strokeMiterlimit: "10",
                                            }}
                                            points="11.6,20 15.9,24.2 26.4,13.8 "
                                        />
                                    </svg>
                                </div>
                                <div className="tc bold text">
                                    <h1>Bạn đã hoàn thành bài tập </h1>
                                </div>
                                <button
                                    className="tc ba dib br3 grow bw2 pointer link"
                                    style={{
                                        borderColor: "#02b3e4",
                                        color: "#02b3e4",
                                    }}
                                    onClick={this.props.homeScreen}
                                >
                                    Quay về màn hình chính
                    </button>
                            </div>
                        </div >
                    )
                }
            </Spring>
        );
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        homeScreen: () => dispatch(actions.Home)
    }
}

export default connect(null, mapDispatchtoProps)(Ending);