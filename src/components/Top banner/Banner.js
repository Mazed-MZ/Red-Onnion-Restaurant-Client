import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section>
            <div className='banner'>
                <div className='text'>
                    <h1><span style={{ color: 'red' }}>Red</span> <span style={{ color: 'white' }}>Onnion</span> Restaurant</h1>
                    <div className='container'>
                        <div class='row m-5'>
                            <div className="col-md-5">
                                <h1 id='title'>Best food are waiting for your belly</h1>

                                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi aperiam et saepe, ipsam esse provident adipisicing elit. Nisi aperiam et saepe, ipsam esse provident adipisicing elit. Nisi aperiam et saepe, ipsam esse provident.</h5>
                            </div>
                            <div className='col-md-6 side-img'>
                                <img src="https://swall.teahub.io/photos/small/19-190411_wiki-photos-food-hd-pic-wpd006585-data-src.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <ul className='box-area'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>
    );
};

export default Banner;