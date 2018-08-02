import React, { Component } from 'react';
import ArticleItem from '../components/Article/Article';
import Branding from '../components/Branding/Branding';

import { getItemRequest } from '../utils/api';
import { normalizeItem } from '../utils/parser';
import trans from '../utils/translations';

import Placeholder from '../components/Placeholder/Placeholder';

class ArticleContainer extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      error: null,
      isLoading: true,
      data: {},
      translations: trans.en
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const item = this.props.config;
    
    getItemRequest( item.sites, item.ids )
      .then( response => this.onFetchResult( response ), error => this.onError( error ) );
  }

  onFetchResult = ( response ) => {
    if ( response && response.hits.total > 0 ) {
      const data = normalizeItem( response.hits.hits[0] );
      let lang = trans[data.language.language_code];
      
      if ( !lang ) {
        lang = trans.en
      }     
      
      this.setState( {
        isLoading: false,
        data,
        translations: lang
      } );
    }
  }

  onError = ( error ) => {
    this.setState( {
      error,
      isLoading: false,
    } );
  }
  
  render() {
    const { error, isLoading, data, translations } = this.state;
    if ( error ) {
      return <div className="cdp-error-message">Error: { error.message }</div>
    } else if ( isLoading ) {
      return <Placeholder />
    } else {
      return (
        <div className="cdp-article-single-container">
          <ArticleItem data={ data } lang={ translations } />
          <Branding data={ data } lang={ translations } />
        </div>
      )
    }
  }
}

export default ArticleContainer;