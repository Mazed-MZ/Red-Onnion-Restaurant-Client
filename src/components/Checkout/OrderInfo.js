import React from 'react';
import './Checkout.css';

const OrderInfo = (props) => {

    const { name, image, price } = props.info;


    return (
        <main className='order-card'>
            <div class="card mb-3">
                <img src={image} class="card-img-top img" alt="..."/>
                    <div className='order-text'>
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">Amount: {price}</p>
                        <p class="card-text"><small class="text-muted">Delevery charge free</small></p>
                    </div>
            </div>
        </main>
    );
};

export default OrderInfo;