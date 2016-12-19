import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="navigation">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/products?expandedProductIds='}>Products</Link></li>
          <li><Link to={'/about'}>About</Link></li>
        </ul>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
        {React.cloneElement(this.props.children, {
          key: location.pathname
        })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
