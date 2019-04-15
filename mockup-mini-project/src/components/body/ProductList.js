import React, { Component } from 'react';
import Product from './Product'
class ProductList extends Component {
    render() {
        return (
            <div className="product-list">
                {
                    this.props.data.map((product) =>
                        <Product
                            value = {product}
                        />


                    )
                }
            </div>

        )
    }
}
export default ProductList;