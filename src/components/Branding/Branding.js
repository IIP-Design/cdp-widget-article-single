import React, { Component } from 'react';

import './Branding.css';

class Branding extends Component {
 render(){
  const data = this.props.data;
  const lang = this.props.lang;

  return (
      <div className="cdp-branding-container">
        <div className="cdp-branding-item" style={{textAlign: 'left'}}>
          <a href={ `https://${data.site}` } target="_blank" rel="noopener noreferrer">
            <img src={ data.logo } alt={ data.owner } style={{maxWidth: '200px'}}/>
          </a>
        </div>
        <div className="cdp-branding-item" style={{textAlign: 'center'}}>
          <a href={ data.link } target="_blank" rel="noopener noreferrer" style={{direction: `${lang.textDirection}`}}>{ lang.viewOriginal }</a>
        </div>
        <div className="cdp-branding-item" style={{textAlign: 'right', direction: `${lang.textDirection}`}}>{ lang.broughtToYou}</div>
      </div>
    )
  }
};

export default Branding;
