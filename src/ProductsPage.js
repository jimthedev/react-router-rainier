import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import './ProductsPage.css';
import get from 'lodash.get';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

export default class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      expandedProductIds: this.parseExpandedProductIds(get(props, 'location.query.expandedProductIds', ''))
    };
  }
  componentDidMount() {
    this.getProducts();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      expandedProductIds: this.parseExpandedProductIds(get(nextProps, 'location.query.expandedProductIds', ''))
    })
  }
  getProducts() {
    axios.get('http://localhost:3030/products').then((response)=>{
      this.setState({
        products: response.data.data
      })
    }).catch((err)=>{
      console.error(err);
    });
  }
  parseExpandedProductIds(expandedProductIds) {
    return expandedProductIds
      .split(',')
      .map(x=>parseInt(x,10))
      .filter(x=>!isNaN(x));
  }

  /**
   * Toggles whether a value is in an array.
   *
   * Depends on if the value is already in the array
   * or not. Uses indexOf to do the check so it will
   * not work on complex or deep objects like arrays
   * or objects. It will work on numbers or strings
   * but they must match exactly including the type.
   *
   * @param  {number[]|strings[]} arr array of values
   * @param  {number|string} v the number to add or remove
   * @return {number[]|strings[]} values with or without
   */
  toggleArrayValue(arr, v) {
    var arrCopy = arr.slice(0);
    if(arr.indexOf(v) > -1) {
      // Found the value so we're removing it
      return arrCopy.slice(0).filter(x=>x!==v);
    } else {
      // We're adding a value
      return arrCopy.slice(0).concat([v]);
    }
  }
  render() {
    return (
      <div className="ProductsPage">
        <ul className="products">
          {this.state.products.map((product, index)=>{
            if(this.state.expandedProductIds.indexOf(product.id) > -1) {
              return (
                <li key={product.id} className="product--expanded">
                  <div><Link to={'/products?expandedProductIds=' + this.toggleArrayValue(this.state.expandedProductIds, product.id).join(',')}>{product.name}</Link></div>
                  <div>Description</div>
                  <div className="product__description">{product.description}</div>
                </li>
              )
            }
            return (
              <ReactCSSTransitionReplace key={product.id} transitionName="cross-fade"
                               transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                <li key={product.id} className="product--collapsed"><Link to={'/products?expandedProductIds=' + this.toggleArrayValue(this.state.expandedProductIds, product.id).join(',')}>{product.name}</Link></li>
              </ReactCSSTransitionReplace>
            )
          })}
        </ul>

      </div>
    );
  }
}
