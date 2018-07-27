import React, { Component } from 'react';
import { getItemRequest } from '../../utils/api';
import { normalizeItem } from '../../utils/parser';

import './Article.css';

class ArticleItem extends Component {
  constructor() {
    super();
    this.props = { id: 531295 }
    console.log(this.props);
    const { item } = {};
    this.state = {
      item,
    };
  }
  

  getArticle(){
    const { item } = this.state;
    const site = "share.dev.america.gov";
    getItemRequest(site, 531295)
      .then( response => this.onFetchResult( item ) )
      .then(console.log(response));
    
    // this.setState( {
    //   article: article
    // } );  
    // console.log(this.state)
  }

  onFetchResult = ( response ) => {
    if ( response && response.hits.total > 0 ) {
      const item = normalizeItem( response.hits.hits[0] );
      this.setState( {
        item
      } );
    }
  }

  render(){
    const { article } = this.state;
    return (
      <div className="cdp-article-single">
        {/* <div className="cdp-article-single-media">
          <img className="cdp-article-single-img" src={ article.thumbnail.large.url } alt="" />
        </div>
        <div className="cdp-article-single-content">
          <h1 className="cdp-article-single-title">{ article.title }</h1>
          <div className="cdp-article-single-meta">{ article.author.name + ' - ' + article.published }</div>
          <div className="cdp-article-single-content" dangerouslySetInnerHTML={{__html: article.content }}></div>
        </div> */}
      </div>
    );
  }
};

export default ArticleItem;
