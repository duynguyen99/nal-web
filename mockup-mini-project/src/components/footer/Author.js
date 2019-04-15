import React, { Component } from 'react';
import Heart from '../../assets/images/heart.svg';
class Author extends Component {
    render() {
        return (
            <div class="author">
                <span>Made in</span>
                <img src={Heart} alt="heart" />
                <span> by Nal.vn</span>
            </div>
        );
    }
}
export default Author;
