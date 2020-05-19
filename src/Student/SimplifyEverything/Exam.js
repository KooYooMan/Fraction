import React from 'react';
import Tube from './GameStuff/Tube';
import Tube1 from './GameStuff/Tube1'
import Ending from '../MainScreen/Ending';
import { connect } from 'react-redux';
import GreenBead from '../MainScreen/GreenBead';


class Exam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      screen: 0,
      countCorrect: 0,
      answerStatus: [0, 0, 0, 0, 0, 0, 0]
    }
    this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this);
    this.handleWrongAnswer = this.handleWrongAnswer.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleCorrectAnswer(id) {
    let curCount = this.state.countCorrect;
    let answers = this.state.answerStatus;
    curCount = curCount - answers[id] + 1;
    answers[id] = 1;
    this.setState({
      countCorrect: curCount,
      answerStatus: answers
    }, () => {
    });
  }

  handleWrongAnswer(id) {
    let curCount = this.state.countCorrect;
    let answers = this.state.answerStatus;
    curCount = curCount - answers[id];
    answers[id] = 0;
    this.setState({
      countCorrect: curCount,
      answerStatus: answers
    }, () => {
    });
  }

  handleButton() {
    if (this.state.countCorrect === 7) {
      this.setState({
        screen: 1
      });
    }
    else {
      return window.alert('Ôi không đáp án của bạn vẫn bị sai/thiếu thì phải...');
    }
  }

  render() {
    switch (this.state.screen) {
      case 0:
        return (
          <div>
            <meta charSet="utf-8" />
            <meta name="viewport" id="viewport-meta" content="width=1024, user-scalable=0, viewport-fit=cover" />
            <meta name="google-site-verification" content="VLpVTu9qe8UpJv-pMvigm2z4dfuTJZ_ubdTe5InyYwc" />
            <meta content="https://dragonlearn.in/countries/india/preview_image.png" property="og:image" /><meta content="Educational web-site for children based on interactive learning" property="og:title" /><meta content="Educational web-site for children based on interactive learning through interesting gamelike exercises" property="og:description" />
            <title>Dragonlearn.in</title>
            <meta name="description" content="Детский образовательный портал для интерактивного обучения детей при помощи интересных игровых заданий и задач." />
            {/* minimal content settings */}
            <link rel="stylesheet" media="all" href="https://content.dragonlearn.in/fp/97/fat_player/super_lib/super_lib-7a457a19bab09821c23430f716215b384ca6afa981467c475ea2758754541880.css" />
            <style dangerouslySetInnerHTML={{ __html: "@media print {#ghostery-purple-box {display:none !important}}" }} />
            <link rel="stylesheet" media="all" href="https://content.dragonlearn.in/fp/97/fat_player/fonts/all-b0da70b78acb00b53176f2e203e8e06177145e7576ccc6a447d3d52f5a4f6544.css" />
            <style dangerouslySetInnerHTML={{ __html: "\n  html, body, * {\n    font-family: 'PT Sans' !important;\n  }\n  #board.ptf *, #board.ptf *,       #answer.ptf *, #answer.ptf * {\n    font-family: 'PT Serif' !important;\n  }\n  #board.ptf .cr, #board.ptf .cr *, #answer.ptf .cr, #answer.ptf .cr * {\n    font-family: 'CirceRounded' !important;\n  }\n  #board.cr *,                      #answer.cr * {\n    font-family: 'CirceRounded' !important;\n  }\n  #board.cr .ab,             #answer.cr .ab,\n  #board.cr .ab > br,        #answer.cr .ab > br,\n  #board.cr .ab > span,      #answer.cr .ab > span,\n  #board.cr .ab > i,         #answer.cr .ab > i,\n  #board.cr .ab > b,         #answer.cr .ab > b,\n  #board.cr .ab > em,        #answer.cr .ab > em,\n  #board.cr .ab > strong,    #answer.cr .ab > strong {\n    font-family: 'CirceRounded-Alt-Bold' !important;\n  }\n  #board.cr .ci,             #answer.cr .ci,\n  #board.cr .ci > br,        #answer.cr .ci > br,\n  #board.cr .ci > span,      #answer.cr .ci > span,\n  #board.cr .ci > i,         #answer.cr .ci > i,\n  #board.cr .ci > b,         #answer.cr .ci > b,\n  #board.cr .ci > em,        #answer.cr .ci > em,\n  #board.cr .ci > strong,    #answer.cr .ci > strong {\n    font-family: 'Circe' !important;\n  }\n  #board.cr .ci.bo,          #answer.cr .ci.bo,\n  #board.cr .ci.bo > br,     #answer.cr .ci.bo > br,\n  #board.cr .ci.bo > span,   #answer.cr .ci.bo > span,\n  #board.cr .ci.bo > i,      #answer.cr .ci.bo > i,\n  #board.cr .ci.bo > b,      #answer.cr .ci.bo > b,\n  #board.cr .ci.bo > em,     #answer.cr .ci.bo > em,\n  #board.cr .ci.bo > strong, #answer.cr .ci.bo > strong {\n    font-family: 'Circe' !important;\n    font-weight: bold !important;\n  }\n" }} />
            <style dangerouslySetInnerHTML={{ __html: ".closedhand { cursor: url(\"https://content.dragonlearn.in/fp/97/fat_player/cursors/closedhand-d367ee0a4c16c7cebfdbf92c97a72ff63878e7f8be176ac8c5ede75a2265ec52.cur\"), pointer !important; }" }} />
            <style dangerouslySetInnerHTML={{ __html: ".openhand { cursor: url(\"https://content.dragonlearn.in/fp/97/fat_player/cursors/openhand-080627fa359156339e79f118fa66a6937f09ff679fe87e8afa473b95c8168d35.cur\"), pointer; }" }} />
            <style dangerouslySetInnerHTML={{ __html: ".pointerhand { cursor: pointer; }" }} />
            {/*[if gte IE 9]><style type="text/css">.gradient{filter: none !important;}</style><![endif]*/}
            {/* board */}
            <style dangerouslySetInnerHTML={{ __html: "body.keypaded { padding-bottom: 95px; }" }} />
            <link rel="stylesheet" media="all" href="https://content.dragonlearn.in/fp/97/fat_player/kafel/beads/v1/kafel-5616680406660da790c5311ea3cd5e2dabef55c592082b6ca6309d33b47e1a32.css" />
            <meta name="csrf-param" content="authenticity_token" />
            <meta name="csrf-token" content="/KvAzd1eutUWP2pYvAwOW0RsleXmZg5srnBAclerNPM=" />
            <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/favicons/manifest.json" />
            <meta name="msapplication-TileColor" content="#6ec5e1" />
            <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
            <meta name="theme-color" content="#6ec5e1" />
            {/* Yandex.Metrika counter */}
            <noscript>&lt;div&gt;&lt;img src="//mc.yandex.ru/watch/47316885" style="position:absolute; left:-9999px;" alt="" /&gt;&lt;/div&gt;</noscript>
            {/* /Yandex.Metrika counter */}
            <link rel="stylesheet" media="screen" href="https://content.dragonlearn.in/126749/3392/card.css" />
            <div style={{ width: 0, height: 0, overflow: 'hidden' }}>
              <span style={{ fontFamily: '"Noto Sans" !important' }}>.</span>
              <span style={{ fontFamily: '"Noto Sans" !important', fontWeight: 'bold !important' }}>.</span>
              <span style={{ fontFamily: '"Noto Sans" !important', fontStyle: 'italic !important' }}>.</span>
              <span style={{ fontFamily: '"Noto Sans" !important', fontStyle: 'italic !important', fontWeight: 'bold !important' }}>.</span>
              <span style={{ fontFamily: '"PT Sans" !important' }}>.</span>
              <span style={{ fontFamily: '"PT Serif" !important' }}>.</span>
              <span style={{ fontFamily: '"CirceRounded" !important' }}>.</span>
              <span style={{ fontFamily: '"CirceRounded" !important', fontWeight: 'bold !important' }}>.</span>
              <span style={{ fontFamily: '"CirceRounded-Regular" !important' }}>.</span>
              <span style={{ fontFamily: '"CirceRounded-Alt-Bold" !important' }}>.</span>
              <span style={{ fontFamily: '"Circe" !important' }}>.</span>
              <span style={{ fontFamily: '"Circe" !important', fontWeight: 'bold !important' }}>.</span>
              <span style={{ fontFamily: '"Circe-Regular" !important' }}>.</span>
              <span style={{ fontFamily: '"Circe-Bold" !important' }}>.</span>
              <span style={{ fontFamily: '"DejaVu Sans" !important' }}>.</span>
              <span style={{ fontFamily: '"Neucha" !important' }}>.</span>
            </div>
            <div className="uchiru_bg_cell" />
            <div className="uchiru_bg_color" />
            <div className="uchiru_bg_stuff" />
            <img className="uchiru_bg_color" src="https://content.dragonlearn.in/fp/97/fat_player/student/grad-f07e854ce64f9aee2db7bd67146ff0e4800feeed40c8f7116fcb3b6a048deb64.jpg" />
            <div className="uchiru_box">
              <div className="uchiru_head card with_progress">
                <a className="back-link" style={{}} onClick={this.props.mainScreen}>
                  <div className="arrow-left" />
                  <span>      Trở lại màn hình chính</span>
                </a>

                <div className="beads-wrapper">
                  <div id="progress">
                    <GreenBead
                      screen={0}
                      len={0}
                    />
                  </div>
                </div>
                <div className="uchiru-head__right-group">
                </div>
                {/* <div className="beads-wrapper">
                  <div id="progress"><div className="inner_progress"><i className="az_ball_0" id="bead0" style={{left: '4px'}} /><i className="az_ball_1" id="bead1" style={{left: '28px'}} /></div></div>
                </div> */}
              </div>
              <div className="card_content">
                <div id="board" className="uchiru-place card player-1 script3808 fixed cr" style={{}}>
                  <div className="scene">
                    <div className="title">Viết các phân số sau dưới dạng tối giản</div>
                    <div className="main_line">
                      <div className="content">
                        <div className="holder" />
                        <Tube1 numerator={this.props.listQuestion[0].numerator} denominator={this.props.listQuestion[0].denominator} correctAns={() => this.handleCorrectAnswer(0)} wrongAns={() => this.handleWrongAnswer(0)}>  </Tube1>
                        <Tube1 numerator={this.props.listQuestion[1].numerator} denominator={this.props.listQuestion[1].denominator} correctAns={() => this.handleCorrectAnswer(1)} wrongAns={() => this.handleWrongAnswer(1)}>  </Tube1>
                        <Tube1 numerator={this.props.listQuestion[2].numerator} denominator={this.props.listQuestion[2].denominator} correctAns={() => this.handleCorrectAnswer(2)} wrongAns={() => this.handleWrongAnswer(2)}>  </Tube1>
                        <Tube1 numerator={this.props.listQuestion[3].numerator} denominator={this.props.listQuestion[3].denominator} correctAns={() => this.handleCorrectAnswer(3)} wrongAns={() => this.handleWrongAnswer(3)}>  </Tube1>
                        <Tube1 numerator={this.props.listQuestion[4].numerator} denominator={this.props.listQuestion[4].denominator} correctAns={() => this.handleCorrectAnswer(4)} wrongAns={() => this.handleWrongAnswer(4)}>  </Tube1>
                        <Tube1 numerator={this.props.listQuestion[5].numerator} denominator={this.props.listQuestion[5].denominator} correctAns={() => this.handleCorrectAnswer(5)} wrongAns={() => this.handleWrongAnswer(5)}>  </Tube1>
                        <Tube1 numerator={this.props.listQuestion[6].numerator} denominator={this.props.listQuestion[6].denominator} correctAns={() => this.handleCorrectAnswer(6)} wrongAns={() => this.handleWrongAnswer(6)}>  </Tube1>
                      </div>
                    </div>

                    <div className="button-basic button-basic_font_ci button-basic_case_uc button-basic_color_blue button_done pointerhand clickable" id="sprite_49" onClick={this.handleButton}>
                      <div className="button-basic__placeholder" style={{ visibility: 'hidden' }}>
                        <div className="button-basic__placeholder_inner ci">Xác nhận</div>
                      </div>

                      {/* <div className="button-basic__wrong" /> */}
                      <div className="button-basic__right" />
                      <div className="button-basic__text">
                        <div className="button-basic__text_inner ci">Xác nhận</div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="uchiru-keypad-3__keypad" style={{display: 'none'}}><div className="uchiru-keypad-3__keypad__background"><div className="uchiru-keypad-3__keypad__background_blured" /></div><div className="uchiru-keypad-3__keypad__buttons-holder"><div className="uchiru-keypad-3__keypad__button" style={{fontFamily: '"Helvetica-Light", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif !important'}}>1</div><div className="uchiru-keypad-3__keypad__button" style={{fontFamily: '"Helvetica-Light", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif !important'}}>2</div><div className="uchiru-keypad-3__keypad__button" style={{fontFamily: '"Helvetica-Light", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif !important'}}>3</div><div className="uchiru-keypad-3__keypad__button" style={{fontFamily: '"Helvetica-Light", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif !important'}}>4</div><div className="uchiru-keypad-3__keypad__button" style={{fontFamily: '"Helvetica-Light", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif !important'}}>5</div><div className="uchiru-keypad-3__keypad__button" style={{fontFamily: '"Helvetica-Light", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif !important'}}>6</div><div className="uchiru-keypad-3__keypad__button" style={{fontFamily: '"Helvetica-Light", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif !important'}}>7</div><div className="uchiru-keypad-3__keypad__button" style={{fontFamily: '"Helvetica-Light", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif !important'}}>8</div><div className="uchiru-keypad-3__keypad__button" style={{fontFamily: '"Helvetica-Light", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif !important'}}>9</div><div className="uchiru-keypad-3__keypad__button" style={{fontFamily: '"Helvetica-Light", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif !important'}}>0</div><div className="uchiru-keypad-3__keypad__button uchiru-keypad-3__keypad__button_system uchiru-keypad-3__keypad__button_backspace" style={{fontFamily: '"Helvetica-Light", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif !important'}}>&nbsp;</div><div className="uchiru-keypad-3__keypad__button uchiru-keypad-3__keypad__button_system uchiru-keypad-3__keypad__button_enter uchiru-keypad-3__keypad__button_type_ok uchiru-keypad-3__keypad__button_color_blue uchiru-keypad-3__keypad__button_last-button" style={{fontFamily: '"Helvetica-Light", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif !important'}}>OK</div></div></div></div>
                <div className="keypad-iwb-2-hacker keypad-iwb-2-hacker-hide"><div className="keypad_buttons_holder"><div className="keypad_button keypad_button_1">1</div><div className="keypad_button keypad_button_2">2</div><div className="keypad_button keypad_button_3">3</div><div className="keypad_button keypad_button_4">4</div><div className="keypad_button keypad_button_5">5</div><div className="keypad_button keypad_button_6">6</div><div className="keypad_button keypad_button_7">7</div><div className="keypad_button keypad_button_8">8</div><div className="keypad_button keypad_button_9">9</div><div className="keypad_button keypad_button_0">0</div><div className="keypad_button keypad_button_plus">&nbsp;</div><div className="keypad_button keypad_button_minus">&nbsp;</div><div className="keypad_button keypad_button_multiply">&nbsp;</div><div className="keypad_button keypad_button_divide">&nbsp;</div><div className="keypad_button keypad_button_backspace">&nbsp;</div><div className="keypad_button keypad_button_enter">OK</div></div><div className="keypad-move">&nbsp;</div><div className="keypad-showhide">Show Smartboard Keyboard</div> */}
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return <Ending> </Ending>
    }
  }
};

const mapStatetoProps = (store) => {
  return {
    listQuestion: store.SimplifyEverything.get('listQuestion').toJS()
  }
}

export default connect(mapStatetoProps)(Exam);