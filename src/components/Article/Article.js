import React from 'react';
import Parser from 'html-react-parser';
import { object } from 'prop-types';

import './Article.css';

const ArticleItem = ( { data } ) => (
  <article className="cdp-article-single">
    <div className="cdp-article-single-media">
      <img className="cdp-article-single-img aligncenter" src={ data.thumbnail } alt={ data.thumbnailMeta.alt } />
      <figcaption>{ data.thumbnailMeta.caption }</figcaption>
    </div>
    <div className="cdp-article-single-content">
      <h1 className="cdp-article-single-title">{ data.title }</h1>
      <div className="cdp-article-single-meta">{ `${data.author.name} - ${data.date}` }</div>
      <div className="cdp-article-single-content"> { Parser( data.content ) } </div>
    </div>
  </article>
);

ArticleItem.propTypes = {
  data: object
};

export default ArticleItem;
