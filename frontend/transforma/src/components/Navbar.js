import React from 'react';
import { Link } from 'react-router-dom';


import logo from '../assets/img/Vector.svg';
import '../assets/css/navbar.css';


const Navbar = () => {
    return (
        <nav className="row">
            <div className="nav-wrapper white col m12">
                <div className="col l2 m2 s12">
                    <Link to="/" className="brand-logo">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                <ul id="nav-mobile" className="hide-on-med-and-down col l1 offset-l7 m1 offset-m7">
                    <li><Link to="" className="pink-text text-darken-1">Teste</Link></li>
                </ul>
                <div className="navbar-button">
                    <Link className="pink darken-1 right s-mt-2 nav-button waves-effect waves-light btn">Inscreva-se grátis</Link>
                </div>

            </div>
        </nav>
    );
}
export default Navbar;