import React, { Component } from 'react';
import MenuDropdown from './MenuDropdown';
import Delivery from './Delivery';
import Contact from './Contact';
class NavigationBar extends Component {
    render() {
        return (
            <div className='navigation-bar'>
                <MenuDropdown />
                <div id = 'wrapper-contact-delivery'>
                    <Delivery />
                    <Contact />
                </div>

            </div>
        )
    }
}
export default NavigationBar;