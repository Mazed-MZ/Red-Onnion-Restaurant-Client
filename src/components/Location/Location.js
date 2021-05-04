import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './Map.css';
import { Link } from 'react-router-dom';

const Location = () => {

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
            console.log('checkout conferm')
        }
        else {
            alert('Sorry! your given information is invalid');
        }
    }


    return (
        <div>
            <Header></Header>
            <div className='input-field'>
                <main className='text-field'>
                    <form>
                        <h1>Checkout Form</h1>
                        <label>Your address</label>
                        <input onBlur={handleBlur} type="email" name="email" id="" placeholder='Type your location' />
                        <label>Choice your restaurant</label>
                        <input onBlur={handleBlur} className='form-control' type="password" name="password" placeholder='Restaurant name' id="" />
                        <label>Number of order</label>
                        <input type="number" name="number" placeholder='Number of items' id=""/>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="I accept to the terms of services"
                            labelPlacement="end"
                        />
                        <a href="/terms">terms and conditions</a><br />
                        <Link to='/checkout'><input className='submit-btn' type="submit" value='Checkout' /></Link>
                    </form>
                </main>
            </div >
            <Footer></Footer>
        </div >
    );
};

export default Location;