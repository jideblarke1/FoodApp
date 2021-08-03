import React from 'react'
import {Link} from 'react-router-dom';

function Order() {
    return (
        <div>
            <header>
                    <div className="nav">
                       <Link to='/' id="nav" >Home</Link>
                        <Link to="About" id="nav">About</Link>
                       <Link to="Contact" id="nav">Contact</Link>
                    </div>
                        
                   
                </header>
            <div className="ord">
                <h1 id="hContOr">ORDER NOW</h1>
            <form id="orderForm">
                        <div className="bar"></div>
                        <p>Address</p>
                        <input  type="text" placeholder="Enter your address" id="address" />
                        <p>City</p>
    <select id="select">
            <option disabled selected >--Select State--</option>
            <option value="Abia">Abia</option>
            <option value="Adamawa">Adamawa</option>
            <option value="Akwa Ibom">Akwa Ibom</option>
            <option value="Anambra">Anambra</option>
            <option value="Bauchi">Bauchi</option>
            <option value="Bayelsa">Bayelsa</option>
            <option value="Benue">Benue</option>
            <option value="Borno">Borno</option>
            <option value="Cross Rive">Cross River</option>
            <option value="Delta">Delta</option>
            <option value="Ebonyi">Ebonyi</option>
            <option value="Edo">Edo</option>
            <option value="Ekiti">Ekiti</option>
            <option value="Enugu">Enugu</option>
            <option value="FCT">Federal Capital Territory</option>
            <option value="Gombe">Gombe</option>
            <option value="Imo">Imo</option>
            <option value="Jigawa">Jigawa</option>
            <option value="Kaduna">Kaduna</option>
            <option value="Kano">Kano</option>
            <option value="Katsina">Katsina</option>
            <option value="Kebbi">Kebbi</option>
            <option value="Kogi">Kogi</option>
            <option value="Kwara">Kwara</option>
            <option value="Lagos">Lagos</option>
            <option value="Nasarawa">Nasarawa</option>
            <option value="Niger">Niger</option>
            <option value="Ogun">Ogun</option>
            <option value="Ondo">Ondo</option>
            <option value="Osun">Osun</option>
            <option value="Oyo">Oyo</option>
            <option value="Plateau">Plateau</option>
            <option value="Rivers">Rivers</option>
            <option value="Sokoto">Sokoto</option>
            <option value="Taraba">Taraba</option>
            <option value="Yobe">Yobe</option>
            <option value="Zamfara">Zamfara</option>
</select>
                        <p>Email</p>
                        <input  type="text" placeholder="Enter email" id="emailOr" />
                        <p>Phone</p>
                        <input  type="text" placeholder="Enter your phone number" id="phoneOr" />

                        <br/><button type="submit" id="submitOr">Submit</button>
                    </form>
            </div>
        </div>
    )
}

export default Order
