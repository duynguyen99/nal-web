import React, { Component } from 'react'
import Title from './Title';
import ProductList from './ProductList'


class Body extends Component {
    render() {
        return (
            <div id='body-wrapper' class ='container'>
                <Title />
                <ProductList 
                    data={this.props.data}
                />
                <button class = 'btn btn-primary btn-md' id ='btn-load-more'>Load More</button>
            </div>
        );
    }
}
export default Body;
