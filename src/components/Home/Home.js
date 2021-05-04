import React, { useEffect, useState, lazy, Suspense} from 'react';
import './Home.css';
import Header from '../Header/Header';
import Banner from '../Top banner/Banner';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Home = () => {

    const [meal, setMeal] = useState([]);

    useEffect(() => {
            fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => handleMeal(data.categories))
    },[]);

    const handleMeal = meal => {
        const newMeal = meal.map(foods => foods.id === meal.id);
        setMeal(newMeal);
    }

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <nav className='food-link'>
                <Link to="/breakfast">BreakFast</Link>
                <Link to="/lunch">Lunch</Link>
                <Link to="/dinner">Dinner</Link>
            </nav>
            <div>
                <h1>{meal.strCategory}</h1>
            </div>
            <div className='carusal'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/VY3ctGF/blur-close-up-dairy-product-376464.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>TURKEY BURGER</h2>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/PjDyGXc/burrito-chicken-close-up-461198.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>PLAIN SANDWHICH</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/PM6mfjX/lunch4.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2>BEEF & BREAD</h2>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/YdNhyD4/breakfast4.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>EGG & BREAD</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/KGL4GSN/dinner2.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>SALMON FISH WITH VAGETABLE</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/DrjBBjV/basil-blur-close-up-1437267.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>ITALIAN PASTA</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/Rzpn82c/thanos-pal-598887-unsplash.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>CHICKEN AND CHESE BURGER</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/q15hftg/dinner4.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>MEDITERRANEAN GRILLED CHICKEN SALAD</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='card'>
                <h1> <img src="https://i.ibb.co/7S3KhBz/Path-1.png" alt=""/> Why you choose us</h1>
                <div className='card-div'>
                    <Card className="card-body text-white">
                        <Card.ImgOverlay>
                            <Card.Title> <img className='card-1' src="https://i.ibb.co/tcMgtM2/Group-287.png" alt=""/> Varity of delecious food items</Card.Title>
                        </Card.ImgOverlay>
                        <Card.Img className='card-img' src="https://i.ibb.co/YRsn6jf/adult-blur-blurred-background-687824.png" alt="Card image" />
                    </Card>
                    <Card className="card-body text-white">
                        <Card.ImgOverlay>
                            <Card.Title><img className='card-2' src="https://i.ibb.co/Hh0YMc4/Group-1133.png" alt=""/> Response quickly</Card.Title>
                        </Card.ImgOverlay>
                        <Card.Img className='card-img' src="https://i.ibb.co/1Kt9657/chef-cook-food-33614.png" alt="Card image" />
                    </Card>
                    <Card className="card-body text-white">
                        <Card.ImgOverlay>
                            <Card.Title><img className='card-3' src="https://i.ibb.co/R4WH53j/Group-245.png" alt=""/> Fast delevery any where any time</Card.Title>
                        </Card.ImgOverlay>
                        <Card.Img className='card-img' src="https://i.ibb.co/t3zLwKb/architecture-building-city-2047397.png" alt="Card image" />
                    </Card>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};
export default Home;