import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NoMatch from './NoMatch';
import ProductsPage from './ProductsPage';
import ProductProfilePage from './ProductProfilePage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Empty from './Empty';
import './index.css';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="about" component={AboutPage} />
      <Route path="products" component={ProductsPage}>
        <IndexRoute component={Empty} />
        <Route path="/products/:productId" component={ProductProfilePage} />
      </Route>
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>,
  document.getElementById('root')
);
