import React from 'react';
import { object } from 'prop-types';

import './Article.css';

const ArticleItem = ( { data } ) => (
  <div className="cdp-article-single">
    <div className="cdp-article-single-media">
      <img className="cdp-article-single-img aligncenter" src={ data.thumbnail.large.url } alt="" />
    </div>
    <div className="cdp-article-single-content">
      <h1 className="cdp-article-single-title">{ data.title }</h1>
      <div className="cdp-article-single-meta">{ `${data.author.name} - ${data.date}` }</div>
      <div className="cdp-article-single-content" dangerouslySetInnerHTML={ { __html: data.content } } />
    </div>
  </div>
);

ArticleItem.propTypes = {
  data: object
};

export default ArticleItem;
