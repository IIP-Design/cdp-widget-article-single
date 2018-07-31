import React from 'react';
import ReactDOM from 'react-dom';
import ArticleSingle from './articleSingle';

import './index.css';

export const widgets =  {
  Article: {
    new: function( config ) {
      return {
        render: () => {
          if ( !config || !config.selector ) {
            console.log('Please add a valid DOM node to add component to');
            return;
          }

          // let defaultConfig = getDefaultConfig();

          ReactDOM.render (
            <ArticleSingle 
              selector={ config.selector }
              query={ config.query }
              sites={ config.sites }
              from={ config.from }
              size={ config.size }
              ids={ config.ids }
              langs={ config.langs }
              types={ config.types }
              tags={ config.tags }
              categories={ config.categories }
              meta={ config.meta }
              // ui={ getUIConfig(config) }
            />, document.querySelector( config.selector )
          );
        }
      }
    }
  }
}
