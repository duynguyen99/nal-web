import React, { Component } from 'react'
import Logo from './Logo'
import SearchBox from './SearchBox';
import Cart from './Cart';
import NavigationBar from './NavigationBar';
import ImageHeader from '../../assets/images/lamborghini-header.jpg'
class Header extends Component {
    render() {
        return (
            <div className="header">
                <div id="fixed-navigation">
                    <div className='container'>
                        <Logo />
                        <SearchBox />
                        <Cart />
                    </div>
                </div>
                 <div className='container'>
                    <NavigationBar />
                </div>
                <div id = 'image-header'>
                    <img src={ImageHeader} />
                </div>
            </div>

        );
    }
}
export default Header;
