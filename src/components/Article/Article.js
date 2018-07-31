import React, { Component } from 'react';

import './Article.css';

class ArticleItem extends Component {

  render(){
    const data = this.props.data;
    return (
      <div className="cdp-article-single">
        <div className="cdp-article-single-media">
          <img className="cdp-article-single-img" src={ data.thumbnail.large.url } alt="" />
        </div>
        <div className="cdp-article-single-content">
          <h1 className="cdp-article-single-title">{ data.title }</h1>
          <div className="cdp-article-single-meta">{ data.author.name + ' - ' + data.published }</div>
          <div className="cdp-article-single-content" dangerouslySetInnerHTML={{__html: data.content }}></div>
        </div>
      </div>
    );
  }
};

export default ArticleItem;
