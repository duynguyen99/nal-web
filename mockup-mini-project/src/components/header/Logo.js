import React, { Component } from 'react';
import logoImg from '../../assets/images/logo.png';
class Logo extends Component {
    render() {
        return (
            <div className='logo'>
                <a href='/#' >
                    <img src={logoImg} alt='NAL VN' />
                </a>
            </div>
        )
    }
}
export default Logo;