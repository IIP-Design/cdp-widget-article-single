import React, { Component } from 'react';
import { referralClickEvent } from '../../utils/ga';

import './Branding.css';

class Branding extends Component {
  handleClickHome = () => {
    referralClickEvent('Homepage')
  }
  
  handleClickOriginal = () => {
    referralClickEvent(this.props.data.title)
  }

  render(){
  const data = this.props.data;
  const lang = this.props.lang;

  return (
      <div className="cdp-branding-container">
        <div className="cdp-branding-item" style={{textAlign: 'left'}}>
          <a href={ `https://${data.site}` } target="_blank" rel="noopener noreferrer" onClick={this.handleClickHome}>
            <img src={ data.logo } alt={ data.owner } style={{maxWidth: '200px'}}/>
          </a>
        </div>
        <div className="cdp-branding-item" style={{textAlign: 'center'}}>
          <a href={ data.link } target="_blank" rel="noopener noreferrer" style={{direction: `${lang.textDirection}`}} onClick={this.handleClickOriginal}>
              { lang.viewOriginal }
          </a>
        </div>
        <div className="cdp-branding-item" style={{textAlign: 'right', direction: `${lang.textDirection}`}}>{ lang.broughtToYou }</div>
      </div>
    )
  }
};

export default Branding;
