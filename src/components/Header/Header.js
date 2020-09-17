import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { usercontext } from '../../App';
const Header = () => {
    const [loggedInUser,setLoggedInUser]=useContext(usercontext);
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order review</Link>
                <Link to="/inventory">Manage inventory</Link>
                {
                    loggedInUser.email && <button onClick={()=>setLoggedInUser({})}>sign Out</button>
                }
            </nav>
        </div>
    );
};

export default Header;