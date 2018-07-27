import axios from 'axios';
import bodybuilder from 'bodybuilder';

const CDP_PUBLIC_API = `https://api.dev.america.gov/v1/search`;

export const getItemRequest = ( site, postId ) =>
  axios
    .post( CDP_PUBLIC_API, {
      body: bodybuilder()
        .size( 1 )
        .query( 'query_string', 'query', `(site: ${site} AND post_id: ${postId})` )
        .build()
    } )
    .then( response => response.data );

export function fetchArticles( query ) {
  const request = axios.post( CDP_PUBLIC_API, query );
  return {
    payload: request
  };
}

export function fetchArticlesSuccess( data ) {
  let articles = ( data.hits && data.hits.hits ) ?  data.hits.hits : [];
  return {
    payload: { articles, total: data.hits.total }
  };
}

export function fetchArticlesFailure( error ) {
  return {
    payload: error
  };
}