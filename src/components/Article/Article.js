import React, { Component } from 'react';
import moment from 'moment';
import { setDateLocale } from '../../utils/localization';
import { initGA, logPageview, logCDPEvent } from '../../utils/ga';

import './Article.css';

class ArticleItem extends Component {
  
  render(){
    const data = this.props.data;
    
    setDateLocale(data.language.language_code);
    const date = moment(data.published).format( 'LL' );
    
    // Initiate Google Analytics events
    initGA(data.site);
    logPageview(data.slug);
    logCDPEvent(data.title)

    return (
      <div className="cdp-article-single">
        <div className="cdp-article-single-media">
          <img className="cdp-article-single-img aligncenter" src={ data.thumbnail.large.url } alt="" />
        </div>
        <div className="cdp-article-single-content">
          <h1 className="cdp-article-single-title">{ data.title }</h1>
          <div className="cdp-article-single-meta">{ data.author.name + ' - ' + date }</div>
          <div className="cdp-article-single-content" dangerouslySetInnerHTML={{__html: data.content }}></div>
        </div>
      </div>
    );
  }
};

export default ArticleItem;
