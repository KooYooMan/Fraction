import React from 'react';
import Ending from '../MainScreen/Ending';
import GamePlay from './GamePlay';
import {Transition, animated} from 'react-spring/renderprops';
import GreenBead from '../MainScreen/GreenBead'
import Exam from './Exam'

function gcd_two_numbers(x, y) {
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 1
    }

    this.updateScreen = this.updateScreen.bind(this)

  }

  updateScreen() {
    this.props.updateScreen();
    this.setState({
      screen: this.state.screen + 1
    })
  }

    render(){
      return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" id="viewport-meta" content="width=1024, user-scalable=0, viewport-fit=cover" />
          <meta name="google-site-verification" content="VLpVTu9qe8UpJv-pMvigm2z4dfuTJZ_ubdTe5InyYwc" />
          <meta content="https://dragonlearn.in/countries/india/preview_image.png" property="og:image" />
          <meta content="Educational web-site for children based on interactive learning" property="og:title" />
          <meta content="Educational web-site for children based on interactive learning through interesting gamelike exercises" property="og:description" />
          <title>42Study</title>
          <meta name="description" content="Детский образовательный портал для интерактивного обучения детей при помощи интересных игровых заданий и задач." />
          {/* minimal content settings */}
          <link rel="stylesheet" media="all" href="https://content.dragonlearn.in/fp/97/fat_player/super_lib/super_lib-7a457a19bab09821c23430f716215b384ca6afa981467c475ea2758754541880.css" />
          <link rel="stylesheet" media="all" href="https://content.dragonlearn.in/fp/97/fat_player/fonts/all-b0da70b78acb00b53176f2e203e8e06177145e7576ccc6a447d3d52f5a4f6544.css" />
          <style dangerouslySetInnerHTML={{__html: "\n        html,\n        body,\n        * {\n            font-family: 'PT Sans' !important;\n        }\n\n        #board.ptf *,\n        #board.ptf *,\n        #answer.ptf *,\n        #answer.ptf * {\n            font-family: 'PT Serif' !important;\n        }\n\n        #board.ptf .cr,\n        #board.ptf .cr *,\n        #answer.ptf .cr,\n        #answer.ptf .cr * {\n            font-family: 'CirceRounded' !important;\n        }\n\n        #board.cr *,\n        #answer.cr * {\n            font-family: 'CirceRounded' !important;\n        }\n\n        #board.cr .ab,\n        #answer.cr .ab,\n        #board.cr .ab>br,\n        #answer.cr .ab>br,\n        #board.cr .ab>span,\n        #answer.cr .ab>span,\n        #board.cr .ab>i,\n        #answer.cr .ab>i,\n        #board.cr .ab>b,\n        #answer.cr .ab>b,\n        #board.cr .ab>em,\n        #answer.cr .ab>em,\n        #board.cr .ab>strong,\n        #answer.cr .ab>strong {\n            font-family: 'CirceRounded-Alt-Bold' !important;\n        }\n\n        #board.cr .ci,\n        #answer.cr .ci,\n        #board.cr .ci>br,\n        #answer.cr .ci>br,\n        #board.cr .ci>span,\n        #answer.cr .ci>span,\n        #board.cr .ci>i,\n        #answer.cr .ci>i,\n        #board.cr .ci>b,\n        #answer.cr .ci>b,\n        #board.cr .ci>em,\n        #answer.cr .ci>em,\n        #board.cr .ci>strong,\n        #answer.cr .ci>strong {\n            font-family: 'Circe' !important;\n        }\n\n        #board.cr .ci.bo,\n        #answer.cr .ci.bo,\n        #board.cr .ci.bo>br,\n        #answer.cr .ci.bo>br,\n        #board.cr .ci.bo>span,\n        #answer.cr .ci.bo>span,\n        #board.cr .ci.bo>i,\n        #answer.cr .ci.bo>i,\n        #board.cr .ci.bo>b,\n        #answer.cr .ci.bo>b,\n        #board.cr .ci.bo>em,\n        #answer.cr .ci.bo>em,\n        #board.cr .ci.bo>strong,\n        #answer.cr .ci.bo>strong {\n            font-family: 'Circe' !important;\n            font-weight: bold !important;\n        }\n    " }} />
          <style dangerouslySetInnerHTML={{__html: "\n        .closedhand {\n            cursor: url(\"https://content.dragonlearn.in/fp/97/fat_player/cursors/closedhand-d367ee0a4c16c7cebfdbf92c97a72ff63878e7f8be176ac8c5ede75a2265ec52.cur\"), pointer !important;\n        }\n    " }} />
          <style dangerouslySetInnerHTML={{__html: "\n        .openhand {\n            cursor: url(\"https://content.dragonlearn.in/fp/97/fat_player/cursors/openhand-080627fa359156339e79f118fa66a6937f09ff679fe87e8afa473b95c8168d35.cur\"), pointer;\n        }\n    " }} />
          <style dangerouslySetInnerHTML={{__html: "\n        .pointerhand {\n            cursor: pointer;\n        }\n    " }} />
          {/*[if gte IE 9]><style type="text/css">.gradient{filter: none !important;}</style><![endif]*/}
          {/* board */}
          <style dangerouslySetInnerHTML={{__html: "\n        body.keypaded {\n            padding-bottom: 95px;\n        }\n    " }} />
          <link rel="stylesheet" media="all" href="https://content.dragonlearn.in/fp/97/fat_player/kafel/beads/v1/kafel-5616680406660da790c5311ea3cd5e2dabef55c592082b6ca6309d33b47e1a32.css" />
          <meta name="csrf-param" content="authenticity_token" />
          <meta name="csrf-token" content="gcZz9fdz56OPImmMK49fYJcOPI5D7uh/gNDXlZjGIl8=" />
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
          <noscript>
            &lt;div&gt;&lt;img src="//mc.yandex.ru/watch/47316885" style="position:absolute; left:-9999px;" alt="" /&gt;&lt;/div&gt;
          </noscript>
          {/* /Yandex.Metrika counter */}
          <link rel="stylesheet" media="screen" href="https://content.dragonlearn.in/126749/3391/card.css" />
          <style dangerouslySetInnerHTML={{__html: "\n        #intercom-frame {\n            opacity: 1 !important;\n            overflow: visible !important\n        }\n    " }} />
          <style dangerouslySetInnerHTML={{__html: "\n        #intercom-frame {\n            opacity: 1 !important;\n            overflow: visible !important\n        }\n    " }} />
          <style dangerouslySetInnerHTML={{__html: "\n        #intercom-frame {\n            opacity: 1 !important;\n            overflow: visible !important\n        }\n    " }} />
          <div style={{width: 0, height: 0, overflow: 'hidden'}}>
            <span style={{fontFamily: '"Noto Sans" !important'}}>.</span>
            <span style={{fontFamily: '"Noto Sans" !important', fontWeight: 'bold !important'}}>.</span>
            <span style={{fontFamily: '"Noto Sans" !important', fontStyle: 'italic !important'}}>.</span>
            <span style={{fontFamily: '"Noto Sans" !important', fontStyle: 'italic !important', fontWeight: 'bold !important'}}>.</span>
            <span style={{fontFamily: '"PT Sans" !important'}}>.</span>
            <span style={{fontFamily: '"PT Serif" !important'}}>.</span>
            <span style={{fontFamily: '"CirceRounded" !important'}}>.</span>
            <span style={{fontFamily: '"CirceRounded" !important', fontWeight: 'bold !important'}}>.</span>
            <span style={{fontFamily: '"CirceRounded-Regular" !important'}}>.</span>
            <span style={{fontFamily: '"CirceRounded-Alt-Bold" !important'}}>.</span>
            <span style={{fontFamily: '"Circe" !important'}}>.</span>
            <span style={{fontFamily: '"Circe" !important', fontWeight: 'bold !important'}}>.</span>
            <span style={{fontFamily: '"Circe-Regular" !important'}}>.</span>
            <span style={{fontFamily: '"Circe-Bold" !important'}}>.</span>
            <span style={{fontFamily: '"DejaVu Sans" !important'}}>.</span>
            <span style={{fontFamily: '"Neucha" !important'}}>.</span>
          </div>
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
                      {/* <span>Đã hoàn thành {this.props.screen} / {this.props.length}</span> */}
                    <GreenBead len = {this.props.listQuestion.length} screen = {this.props.screen - 1}  />
                  </div>
              </div>
              <div className="uchiru-head__right-group">
              </div>
            </div>
            
            <div className="card_content">
              <div id="board" className="uchiru-place card player-1 script3811 fixed cr" style={{lineHeight: '1.29'}}>
                <Transition
                  from={{ opacity: 0}}
                  enter={{ opacity: 1 }}
                  leave={{ opacity: 0 }}
                  config={{duration: 0}}
                  items = {this.state.screen}
                >
                {
                  show => show ? props => <Exam
                    numerator = {this.props.listQuestion[this.state.screen - 1].numerator}
                    denominator = {this.props.listQuestion[this.state.screen - 1].denominator}
                    updateScreen = {() => this.updateScreen()}
                  >

                  </Exam>

                  : props => <div></div>
                }
                </Transition>
              </div>
            </div>
          </div>
          <iframe id="intercom-frame" style={{position: 'absolute !important', opacity: 1, width: '1px !important', height: '1px !important', top: '0px !important', left: '0px !important', border: 'none !important', display: 'block !important', zIndex: '-1 !important', overflow: 'visible'}} aria-hidden="true" tabIndex={-1} title="Intercom" __idm_frm__={719} />
          <div id="eJOY__extension_root" style={{all: 'unset'}} />
          <div id="intercom-container" className="intercom-namespace">
            <style dangerouslySetInnerHTML={{__html: "\n            html.intercom-mobile-messenger-active,\n            html.intercom-mobile-messenger-active>body,\n            html.intercom-modal-open,\n            #intercom-container-body {\n                overflow: hidden !important;\n            }\n\n            html.intercom-mobile-messenger-active,\n            html.intercom-mobile-messenger-active>body {\n                position: static !important;\n            }\n\n            html.intercom-mobile-messenger-active>body {\n                height: 0 !important;\n                margin: 0 !important;\n            }\n\n            iframe#intercom-frame {\n                position: absolute !important;\n                opacity: 0 !important;\n                width: 1px !important;\n                height: 1px !important;\n                top: 0 !important;\n                left: 0 !important;\n                border: none !important;\n                display: block !important;\n                z-index: -1 !important;\n            }\n        " }} />
            <div className="intercom-app" aria-live="polite">
              <div id="intercom-modal-container" />
            </div>
          </div>
          <div id="intercom-css-container">
            <style data-emotion="intercom-global" dangerouslySetInnerHTML={{__html: "" }} />
          </div>
        </div>
      );
    } 
  };

  export default Form;