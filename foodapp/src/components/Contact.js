import React from 'react'
import image from './image/download.png'
import {Link} from 'react-router-dom';

function Contact() {
    return (
        <div className="contact">
            
                    <div className="gitnav">
                    <Link to='/' id="nav" >Home</Link>
                        <Link to="About" id="nav">About</Link>
                       <Link to="Contact" id="nav">Contact</Link>
                    </div>    
                   
               
            <h1 id="hCont">
                CONTACT US
            </h1>
            <div className="contain">
            
                <div className="form">
                    <form id="formLeft">
                        <p>Reach out to us</p>
                        <p>Name</p>
                        <input  type="text" placeholder="Enter your name" id="name" />
                        <p>Email</p>
                        <input  type="text" placeholder="Enter email" id="email" />
                        <p>Phone</p>
                        <input  type="text" placeholder="Enter your phone number" id="phone" />
                        <p>Enquiry</p>
                        <input  type="text" placeholder="Please drop a short message" id="enquiry" />

                        <br/><button type="submit" id="submit">Submit</button>
                    </form>


                </div>
                <div className="support">
                    <h3>Contact Customer Support</h3>
                    <p>If you're looking for more help or have a question to ask please call 0909074xxxxx or send an email to support@chopnownow.com</p>
                    <img src={image} alt='app-store' id='play'/>
                </div>
            </div>
        </div>
        
    )
}

export default Contact ;
