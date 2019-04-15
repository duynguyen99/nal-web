import React, { Component } from 'react';
import Facebook from '../../assets/images/facebook.svg';
import Instagram from '../../assets/images/instagram.svg';
import Twitter from '../../assets/images/twitter.svg';
import Youtube from '../../assets/images/youtube.svg';
class ConnectWithUs extends Component {
    render() {
        return (
            <div class = "connect-with-us">
                <p><b>CONNECT WITH US</b></p>
                <div>
                    <img src={Facebook} alt="visa icon" />
                    <img src={Instagram} alt="master card icon" />
                    <img src={Twitter} alt="twitter icon" />
                    <img src={Youtube} alt="youtube icon" />
                </div>
            </div>
        );
    }
}
export default ConnectWithUs;
