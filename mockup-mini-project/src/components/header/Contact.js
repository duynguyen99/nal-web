import React, { Component } from 'react';
import ContactIcon from '../../assets/images/phone.svg';
class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <img src ={ContactIcon} attr ='Contact icon' />
                <span>+84 528 005</span>
            </div>
        )
    }
}
export default Contact;