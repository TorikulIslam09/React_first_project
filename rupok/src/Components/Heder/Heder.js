import React from 'react';
import Logo from '../../images/Logo.svg'
import './Heder.css'

const Heder = () => {
    return (
        <div className='heder-section'>
            <nav>
                <div className="logo-div">
                    <div className="img">
                        <img src={Logo} alt="" />
                    </div>
                </div>
                <div className="manu_bar">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/order">Order</a></li>
                        <li><a href="/Review">Order Review</a></li>
                        <li><a href="/Manage">Manage Inventory</a></li>
                        <li><a href="/Login">Login</a></li>
                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Heder;