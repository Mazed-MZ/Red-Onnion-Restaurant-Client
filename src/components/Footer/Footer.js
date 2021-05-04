import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='logo-text'>
                <img src="https://i.ibb.co/Tr5kSk9/logo.png" alt="" srcset=""/>
                <div className='text-line1'>
                    <a href="/about">• About online food</a><br/>
                    <a href="/blog">• Read our blog</a><br/>
                    <a href="/order">• Add your resturent</a><br/>
                    <a href="/signin">• Sign up to deliver</a>
                </div>
                <div className='text-line2'>
                    <a href="/contact">• Get help</a><br/>
                    <a href="/blog">• Read FAQs</a><br/>
                    <a href="/order">• View all cities</a><br/>
                    <a href="/order">• Resturents near me</a>
                </div>
            </div>
            <div className='foot-text'>
                <h5>Copyright@2020 Red Onion Foods all rights reserved</h5>
                <div className='foot-div'>
                    <a href="/terms">Privacy Policy</a>
                    <a className='term' href="/terms">Terms of use</a>
                    <a className='contact' href="/contact">Contact us</a>
                </div>
            </div>
            <h5 className='last-line'>D@veloped by Mazed Mohammed</h5>
        </div>
    );
};

export default Footer;