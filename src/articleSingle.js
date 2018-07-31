import React, { Component } from 'react';
import ArticleContainer from './containers/ArticleCointainer';

import './articleSingle.css';

class ArticleSingle extends Component {
  render() {
    return (
      <div className="cdp-single-article">
        <ArticleContainer config={ this.props } />
      </div>
    );
  }
}

export default ArticleSingle;
