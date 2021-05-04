import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from './../../App';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();
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
        else {
            alert('Sorry! your given information is invalid');
        }
    }

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
                storeAuthToken();
                history.replace(from);
            })
            .catch((error) => {
                const newUserInfo = { ...user };
                newUserInfo.success = false;
                newUserInfo.error = error.message;
                setUser(newUserInfo);
            });
    }

    const handleSubmit = (e) => {
        if (user.email && user.password) {
            console.log('submitting')
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = 'Logged in successfully';
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    storeAuthToken();
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

    const storeAuthToken = () =>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('token', idToken)
          }).catch(function(error) {
            // Handle error
          });
    }

    return (
        <div>
            <Header></Header>
            <div className='form-div'>
                <img src="https://i.ibb.co/Tr5kSk9/logo.png" alt="" />
                <form onSubmit={handleSubmit} className='form'>
                    <input onBlur={handleBlur} className='form-control inp' type="email" name="email" id="" placeholder='Type your email' />
                    <input onBlur={handleBlur} className='form-control' type="password" name="password" placeholder='Type your password' id="" />
                    <input className='btn btn-danger' type="submit" value="Log In" />
                    <h4>I have no account, <a href="/signup">create an account</a></h4>
                </form>
                <button id='google-signup' onClick={handleGoogleSignIn} className='btn btn-light'><img src="https://pngimg.com/uploads/google/google_PNG19635.png" alt="" /><p> Continue with google</p></button>
                <div className='login-msg'>
                    <h1 style={{ color: 'red' }}>{user.error}</h1>
                    <h1 style={{ color: 'green' }}>{user.success}</h1>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;