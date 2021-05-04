import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Lunch.css';
import LunchList from './LunchList';
import LunchItem from '../FakeData/lunch';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Lunch = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleLunch = (food) =>{
        const newfood = {...loggedInUser, ...food};
        console.log(newfood);
        fetch('http://localhost:4000/foods', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newfood)
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
            <div className='lunch-div'>
                <h1>Lunch Platter</h1>
                {
                    LunchItem.map(data => <LunchList data={data} key={data.id} handleLunch={handleLunch}></LunchList>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Lunch;