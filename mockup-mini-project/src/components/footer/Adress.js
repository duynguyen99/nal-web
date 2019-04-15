import React, { Component } from 'react';
import Logo from '../../assets/images/logo.png';
import Location from '../../assets/images/location.svg';
import Phone from '../../assets/images/location.svg';
class Footer extends Component {
    render() {
        return (
            <div>
                <div class="adress">
                    <img src={Logo} alt="Logo" />
                    <p>NAL Mart recieves orders online and delivery, does not support buying
                        and recieving goods directly at the
                        office or order processing center.
				    </p>
                    <div id='location'>
                        <img src={Location} alt="location nal" />
                        <span>3F 84 Duy Tan, Cau Giay, Ha Noi, Viet Nam</span>
                        <br />
                        <img src={Phone} alt="contact phone nal" />
                        <span>+84 0123 456 789</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;
