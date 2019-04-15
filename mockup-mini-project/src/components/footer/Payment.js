import React, { Component } from 'react';
import Visa from '../../assets/images/visa.svg';
import Mastercard from '../../assets/images/mastercard.svg';
import CreditCard from '../../assets/images/credit-card.svg';
class Payment extends Component {
    render() {
        return (
            <div class = "payment">
                <span><b>PAYMENT METHOD</b></span>
                <div>
                    <img src={Visa} alt="visa icon" />
                    <img src={Mastercard} alt="master card icon" />
                    <img src={CreditCard} alt="twitter icon" />
                </div>
            </div>
        );
    }
}
export default Payment;
