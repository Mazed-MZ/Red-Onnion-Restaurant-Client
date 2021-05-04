import React from 'react';
import Header from '../Header/Header';
import './Sign.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState, useContext } from 'react';
import Footer from '../Footer/Footer';
import { UserContext } from './../../App';
import { useHistory, useLocation } from 'react-router';
import Form from 'react-bootstrap/Form';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}
const Sign = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    })

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser =
                {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch((error) => {
                const newUserInfo = { ...user };
                newUserInfo.success = false;
                newUserInfo.error = error.message;
                setUser(newUserInfo);
            });
    }
    const handleFbSignin = () => {
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser =
                {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch((error) => {
                const newUserInfo = { ...user };
                newUserInfo.success = false;
                newUserInfo.error = error.message;
                setUser(newUserInfo);
            });
    }

    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPassValid = e.target.value.length > 6;
            const passUseNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPassValid && passUseNumber;
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = 'Account create successfully';
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }

    return (
        <div>
            <Header></Header>
            <div className='sign-div'>
                <img src="https://i.ibb.co/Tr5kSk9/logo.png" alt="" />
                <form onSubmit={handleSubmit} className='sign'>
                    <input onBlur={handleBlur} className='form-control' type="text" name='name' id='name' placeholder='Your Name' />
                    <input onBlur={handleBlur} className='form-control' type="email" name="email" id="email" placeholder='Type your email' required />
                    <input onBlur={handleBlur} className='form-control' type="password" name="password" placeholder='Type your password' id="pass" required />
                    <h6>*use password at least 6 character with number</h6>
                    <input className='btn btn-danger' type="submit" value="Create new account" />
                    <h5>Already have an account? <a href="/login">Log In</a></h5>
                </form>
                <div className='signup-msg'>
                    <h1 style={{ color: 'red' }}>{user.error}</h1>
                    <h1 style={{ color: 'green' }}>{user.success}</h1>
                </div>
                <div className='brand-logo'>
                    <button onClick={handleGoogleSignIn} className='brand-btn btn btn-light'><img src="https://pngimg.com/uploads/google/google_PNG19635.png" alt="" /><p> Sign up with google</p></button>
                    <h6 style={{color: 'white'}}>Or</h6>
                    <button onClick={handleFbSignin} className='brand-btn btn btn-light'><img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="" /><p> Sign up with facebook</p></button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Sign;