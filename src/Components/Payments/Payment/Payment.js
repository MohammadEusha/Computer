import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../PaymentForm/PaymentForm';


const stripePromise = loadStripe('pk_test_51Ie2j7IVHCUxUjssTmy36VmcM8MyIZnalyb9MdBUtf3Lmeec3IJA6aObROz9QY7COqYyn5xsnE4tqZrtMX8VwKOo0017h5jNuw');
const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <PaymentForm ></PaymentForm>
            </Elements>
        </div>
    );
};

export default Payment;