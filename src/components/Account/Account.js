import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useContext } from 'react';
import { UserContext } from './../../App';
import './Account.css';

const Account = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Header></Header>
            <div>
                <div className='account-img d-flex align-items-center'>
                <img src={loggedInUser.photo} alt=""/>
                <h1 className='p-5'>{loggedInUser.name}</h1>
                </div>
                <h4>{loggedInUser.email}</h4>
                <button onClick={() => setLoggedInUser({})} className='btn btn-danger'>Sign out</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Account;