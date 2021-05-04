import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Breakfast.css';
import BreakfstList from './BreakfstList';
import BreakfstItem from '../FakeData/brkfst';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Breakfast = () => {


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleBrkfst = (item) =>{
        const newItem = {...loggedInUser, ...item};
        console.log(newItem);
        fetch('https://blooming-coast-73827.herokuapp.com/foods', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newItem)
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
            <div className='brkfst-div'>
                <h1>Breakfast Bite</h1>
                {
                    BreakfstItem.map(data => <BreakfstList data={data} key={data.id} handleBrkfst={handleBrkfst}></BreakfstList>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Breakfast;