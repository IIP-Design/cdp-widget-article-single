import React, { Component } from 'react';
import Branding from './components/Branding/Branding';
import ArticleItem from './components/Article/Article';

import './articleSingle.css';

class ArticleSingle extends Component {
  render() {
    return (
      <div className="App">
        <ArticleItem />
        <Branding />
      </div>
    );
  }
}

export default ArticleSingle;
