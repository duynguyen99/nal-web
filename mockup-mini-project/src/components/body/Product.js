import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Product extends Component {
    render() {
        return (
            <div className='product'>
                <div className='product-image'>
                    <img src={'/images/' + (this.props.value.image)} attr={this.props.name}
                    />
                </div>
                <div className='product-info'>
                    <p>{this.props.value.name}</p>
                    <p>{this.props.value.price}</p>
                    <button className='btn btn-primary btn-md'>Buy now</button>
                </div>
            </div>
        )
    }
}
export default Product;