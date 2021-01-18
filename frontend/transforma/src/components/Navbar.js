import React from 'react';
import { Link } from 'react-router-dom';


import logo from '../assets/img/Vector.svg';
import '../assets/css/navbar.css';


const Navbar = () => {
    const location = window.location.href;
    let locationParts = location.split('/');

    return (
        <nav className="row">
            <div className="nav-wrapper white col m12">
                <div className="col l2 m2 s12">
                    <Link to="/" className="brand-logo">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                {
                    locationParts[locationParts.length-1] === '' &&
                <div className="navbar-button">
                    <Link 
                    className="pink darken-1 right s-mt-2 nav-button waves-effect waves-light btn"
                    to="/cadastro"
                    >Inscreva-se grátis</Link>
                </div>
                }

            </div>
        </nav>
    );
}
export default Navbar;