import React, { Component } from 'react';
import ArticleContainer from './containers/ArticleContainer';

import './articleSingle.css';

class ArticleSingle extends Component {
  render() {
    return (
      <div className="cdp-single">
        <ArticleContainer config={ this.props } />
      </div>
    );
  }
}

export default ArticleSingle;
