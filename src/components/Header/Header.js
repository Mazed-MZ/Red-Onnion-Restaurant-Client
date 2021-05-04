import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './../../App';



const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className='header'>
            <Link to="/home"><img src="https://i.ibb.co/Tr5kSk9/logo.png" alt="logo" border="0"/></Link>
            <nav className='nav-btn'>
                <Link to="/home">Home</Link>
                <Link to="/foods">Foods</Link>
                <Link to='/account'>Account</Link>
                <Link to="/signup"><button className='btn btn-danger'>Sign up</button></Link>
                <img id='user-img' src={loggedInUser.photo} alt=""/>
            </nav>
        </div>
    );
};

export default Header;