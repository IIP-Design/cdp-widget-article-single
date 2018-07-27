import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ArticleSingle from './articleSingle';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ArticleSingle />, document.getElementById('root'));
registerServiceWorker();
