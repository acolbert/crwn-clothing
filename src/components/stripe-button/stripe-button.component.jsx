import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {publishableTestKey} from '../../stripeKey/key';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100; //stripe needs the money in cents
    const publishableKey = publishableTestKey;

    //gets called on submission
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');

    }
    return (

        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}


export default StripeCheckoutButton;