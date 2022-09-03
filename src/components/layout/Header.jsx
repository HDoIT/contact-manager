import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    render() {
        const {branding} = this.props;
        return (
            <div style={{marginBottom:"3rem"}}>
                <nav className="navbar navbar-expand-sm navbar-dark bg-danger py-0" style={{height:"60px"}}>
                    <div className="container">
                        <a href='/contact-manager' className='navbar-brand'>{branding}</a>
                        <div>
                            <ul className='navbar-nav mr-auto' >
                                <li className='nav-item'>
                                    <Link className="nav-link" to="/contact-manager" href="#"><i class="fas fa-home"></i> Home</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className="nav-link" to="/contact-manager/addcontact" href="#"><i class="fas fa-file-signature"></i> Add Contact</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className="nav-link" to="/contact-manager/album" href="#"><i class="fas fa-images"></i> Album</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className="nav-link" to="/contact-manager/about" href="#"><i class="fas fa-info-circle"></i> About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;