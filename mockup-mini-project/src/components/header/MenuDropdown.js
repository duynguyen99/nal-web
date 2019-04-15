import React, { Component } from 'react';
import MenuIcon from '../../assets/images/list-menu.svg';
class MenuDropdown extends Component {
    render() {
        return (
            <div className='menu-dropdown container'>
                <img src ={MenuIcon} attr ='dropdown' />
                <span>Category</span>
            </div>
        )
    }
}
export default MenuDropdown;