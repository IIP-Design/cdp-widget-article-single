import React, { Component } from 'react';
import ArticleItem from '../components/Article/Article';
import Branding from '../components/Branding/Branding';

import { getItemRequest } from '../utils/api';
import { normalizeItem } from '../utils/parser';
import Placeholder from '../components/Placeholder/Placeholder';

class ArticleContainer extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      error: null,
      isLoading: true,
      data: {}
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
      console.log(response);
      const data = normalizeItem( response.hits.hits[0] );
      
      this.setState( {
        data,
        isLoading: false,
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
    const { error, isLoading, data } = this.state;
    if ( error ) {
      return <div>Error: { error.message }</div>
    } else if (isLoading) {
      return <Placeholder />
    } else {
      return (
        <div>
          <ArticleItem data={ data } />
          <Branding data={ data } />
        </div>
      )
    }
  }
}

export default ArticleContainer;