import React, { Component } from 'react';
import axios from 'axios';
export default class ProductProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }
  componentDidMount() {
    this.getProduct()
  }
  componentWillReceiveProps() {
    this.getProduct()
  }
  getProduct() {
    axios.get('http://localhost:3030/products/' + this.props.params.productId).then((response) => {
      this.setState({
        product: response.data
      });
    }).catch((err)=>{
      console.error(err);
    })
  }
  render() {
    return (<div>
      <h2>{this.state.product.description}</h2>
      ....

    </div>);
  }
}
