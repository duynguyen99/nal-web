import React, { Component } from 'react';
class SearchBox extends Component {
    render() {
        return (
            <div className='search-box'>
                <input type='text' name='search-input' placeholder='Search...'>
                </input>
            </div>
        )
    }
}
export default SearchBox;