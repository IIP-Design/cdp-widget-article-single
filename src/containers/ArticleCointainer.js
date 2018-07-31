import React, { Component } from 'react';
import ArticleItem from '../components/Article/Article';
import Branding from '../components/Branding/Branding';
import { getItemRequest } from '../utils/api';
import { normalizeItem } from '../utils/parser';

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
      .then( response => this.onFetchResult( response ) );
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
  
  render() {
    const { error, isLoading, data } = this.state;
    if ( error ) {
      return <div>Error: { error.message }</div>
    } else if (isLoading) {
      return <div>Loading...</div>
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