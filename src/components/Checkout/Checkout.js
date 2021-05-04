import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useState, useEffect, useContext } from 'react';
import OrderInfo from './OrderInfo';
import PaymentCard from './PaymentCard';
import { UserContext } from '../../App';

const Checkout = () => {

    const [orderItem, setOrderItem] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/orderPayment?email='+loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrderItem(data))
    }, [setOrderItem])
    return (
        <section className='payment'>
            <Header></Header>
            <div class='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        
                       <h2 id='cart-title'>{orderItem.length} items are added in your cart</h2>
                        {
                            orderItem.map(info => <OrderInfo info={info} key={info.id}></OrderInfo>)
                        }
                    </div>
                    <div className='col-md-6 pay-card'>
                    <h2>Payment</h2>
                        <PaymentCard></PaymentCard>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Checkout;