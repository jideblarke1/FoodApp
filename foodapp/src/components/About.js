import React from 'react'
import image from './image/yamegg.jpg'
import {Link} from 'react-router-dom';

function About() {
    return (
        <div className='about'>
            <header>
                    <div className="nav">
                       <Link to='/'>Home</Link>
                        <Link to="About">About</Link>
                       <Link to="Contact">Contact</Link>
                    </div>
                        
                   
                </header>
            <img src={image} alt='yam' id= 'doudou'/>
            <div className='aboutUs'>
                <h2 id='abt'>ABOUT US</h2>
                
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </div>
        </div>
    )
}

export default About
