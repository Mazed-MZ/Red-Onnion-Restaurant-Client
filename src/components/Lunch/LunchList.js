import React from 'react';
import './Lunch.css';
import { Link } from 'react-router-dom';

const LunchList = (props) => {
    return (
        <section className='lunch'>
            <div className='lunch-item'>
                <div className='lunch-img d-flex align-items-center'>
                    <img src={props.data.image} alt="" srcset="" />
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos unde reiciendis amet eius nobis tenetur perspiciatis molestiae eos, maiores obcaecati ipsa voluptatibus eveniet blanditiis aliquid facere velit tempora dicta adipisci consequuntur cum dolore! Debitis minus voluptatem nobis nesciunt, maiores, ab repudiandae distinctio itaque excepturi nemo eaque ex! Quasi iste aut, dignissimos eaque in accusamus quod fuga numquam ad expedita? Quas iure perspiciatis, error ad nemo aperiam, quibusdam praesentium modi saepe iusto vel asperiores nulla repellat aliquid quidem minima ex? Fugit, voluptatem. Doloribus quos soluta nobis minus incidunt quisquam cupiditate possimus necessitatibus ea, exercitationem pariatur non nostrum amet aspernatur excepturi veniam?</h5>
                </div>
                <h2>{props.data.name}</h2>
                <h3>{props.data.price}</h3>
                <Link to='/location'><button onClick={() => props.handleLunch(props.data)} className='btn btn-danger'>Add cart</button></Link>
            </div>
        </section>
    );
};

export default LunchList;