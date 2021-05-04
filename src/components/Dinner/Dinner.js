import React from 'react';
import './Dinner.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DinnerItem from '../FakeData/dinner';
import DinnerList from './DinnerList';
import { Link } from 'react-router-dom';


const Dinner = (props) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleDinner = (info) =>{
        const newInfo = {...loggedInUser, ...info};
        console.log(newInfo);
        fetch('http://localhost:4000/foods', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newInfo)
        })
        .then(res => res.json())
        .then(result => console.log(result))

    }

    return (
        <div>
            <Header></Header>
            <nav className='food-link'>
                <Link to="/breakfast">BreakFast</Link>
                <Link to="/lunch">Lunch</Link>
                <Link to="/dinner">Dinner</Link>
            </nav>
            <div className='dinner-div'>
                <h1>Dinner Dish</h1>
                {
                    DinnerItem.map(data => <DinnerList data={data} key={data.id} handleDinner={handleDinner}></DinnerList>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dinner;