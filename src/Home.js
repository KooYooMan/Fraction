import React from 'react';
import './Home.css';
import actions from './actions/app-actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops'

class Home extends React.Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{
                    duration: 1000
                }}
            >
                {
                    props => (
                        <div className="slides_wrapper" style={props}>
                            <div className="slide">
                                <div className="text_wrapper">
                                    <div className="container-fluid invite-selector container-equal-heights">
                                        <div className="col-sm-12 align-center col-lg-6 col-md-6">
                                            <div className="row fixed-height">
                                                <div className="invite-block">
                                                    <Link to="/Fraction/Lecturer">
                                                        <button onClick={this.props.lecturerScreen}>
                                                            <img
                                                                src="https://i.ibb.co/tbCZcY9/teacher.jpg"
                                                                alt=""
                                                                style={{ height: '180px' }}
                                                            ></img>
                                                        </button>
                                                    </Link>
                                                </div>
                                                <h2><b>Giáo viên</b></h2>
                                                <div className="column-desc">Bạn có thể tạo bài cho học sinh làm</div>
                                            </div>
                                            <div className="row invite-row">
                                                <Link to="/Fraction/Lecturer" className="invites--button" id="teacher-select-button" onClick={this.props.lecturerScreen}>
                                                    Tiếp Tục
                                    </Link>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 align-center col-lg-6 col-md-6">
                                            <div className="row fixed-height">
                                                <div className="invite-block">
                                                    <Link to="/Fraction/Student">
                                                        <button onClick={this.props.studentScreen}>
                                                            <img
                                                                src="https://i.ibb.co/LYpTKNz/school-drawing-school-cartoon-child-student-education-finger-thumb-png-clip-art.png"
                                                                alt=""
                                                                style={{ height: '180px' }}
                                                            ></img>
                                                        </button>
                                                    </Link>
                                                </div>
                                                <h2><b>Học sinh</b></h2>
                                                <div className="column-desc">Bạn có thể làm các bài kiểm tra</div>
                                            </div>
                                            <div className="row invite-row">
                                                <Link to="/Fraction/Student" className="invites--button" id="parent-select-button" onClick={this.props.studentScreen}>
                                                    Tiếp Tục
                                    </Link>
                                            </div>
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
        studentScreen: () => dispatch(actions.Student),
        lecturerScreen: () => dispatch(actions.Lecturer)
    }
}

export default connect(null, mapDispatchtoProps)(Home);