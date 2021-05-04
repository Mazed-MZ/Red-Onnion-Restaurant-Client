import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './NoMatch.css';


const NoMatch = () => {
    return (
        <div>
            <Header></Header>
            <div className='no-match'>
                <h1>404!! Page not found</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NoMatch;