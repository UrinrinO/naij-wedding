import React, { Component } from 'react'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'
import {FaAlignRight} from 'react-icons/fa'

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () =>{
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            
            <navbar className="site-header sticky-top py-1 nav navigation">
                <div className="container d-flex flex-column flex-md-row justify-content-between">
                    <Link to="/">
                        <img src={logo} alt="Naij Weddings" />
                    </Link>
                    <button 
                    type="button" 
                    className="nav-btn"
                    onClick={this.handleToggle}
                    >
                        <FaAlignRight className="nav-icon" />
                    </button>
                    <nav className="text-center pt-2">
                        <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/vendors">Listing</Link></li>
                            <li><Link to="#">Planning Tools</Link></li>
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="#">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="text-right auth pt-2">
                        <ul>
                            <li><Link to="/login">Login</Link> </li>
                            <li><Link to="/register">Register</Link> </li>
                            <li><Link to="#">FAQs</Link> </li>
                            <li><i className="fas fa-search"></i></li>
                        </ul>
                    </div> 
                </div>
            </navbar>
            
        )
    }
}
