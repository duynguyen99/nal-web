import React, { Component } from 'react';
import Adress from './Adress';
import Information from './Information';
import CustomerService from './CustomerService';
import Payment from './Payment';
import ConnectWithUs from './ConnectWithUs';
import Author from './Author';
class Footer extends Component {
    render() {
        return (
            <div>
                <hr className='hr-tag' />
                <div id='footer-wrapper' class='container'>
                    <Adress />
                    <Information />
                    <CustomerService />
                    <Payment />
                    <ConnectWithUs />
                </div>
                <hr className = 'hr-tag' />
                <Author />
                <hr className = 'hr-tag' />
            </div>
        );
    }
}
export default Footer;
