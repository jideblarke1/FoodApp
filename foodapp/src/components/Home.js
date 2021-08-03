import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

// components
import Menu from './Menu';

function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://api.spoonacular.com/recipes/random?apiKey=4574e3fbe2894e36abcb8e12675d2962&number=10')
           .then(res => res.json())
           .then(json =>  {
                setUsers(json);
                console.log('spoon api', json);
        });
    }, []);

   const renderMenu = () => {
        fetch('https://api.spoonacular.com/recipes/random?apiKey=4574e3fbe2894e36abcb8e12675d2962&number=10')
           .then(res => res.json())
           .then(json =>  {
                setUsers(json);
                console.log('json response', json);
        });
    }
    
    return (
        <>
        <div>
            <section className="landing">
                <header>
                    <div className="nav">
                    <Link to='/' id="nav" >Home</Link>
                        <Link to="About" id="nav">About</Link>
                       <Link to="Contact" id="nav">Contact</Link>
                    </div>
                        
                   
                </header>
                <div className="logo">
                    <h1 className="Foodie">FOODIEE</h1>
                    <h4>Join us at Foodiee, and exprience the best and tasty food</h4>
                    <img></img>
                    <button className="menu" onClick={renderMenu}>Menu</button>
                    <button className="order">Order Now</button>
                </div>
            </section>
            <section>

            </section>
            <footer/>
        </div>
            <Menu users={users} />
        </>
    )
    }




export default Home ;
