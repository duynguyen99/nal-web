import React, { Component } from 'react';
import DeliveryIcon from '../../assets/images/delivery-truck.svg';
class Delivery extends Component {
    render() {
        return (
            <div className='delivery'>
                <img src ={DeliveryIcon} attr ='delivery icon' />
                <span>Free Shipping</span>
            </div>
        )
    }
}
export default Delivery;