import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () =>{
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <div className="navigation">
                <div className="top-nav">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                World class Wedding Vendors 
                            </div>
                            <div className="col-md-6">
                                <nav className="text-right">
                                    <p><Link to="#">I am a vendor</Link></p>
                                </nav> 
                            </div>
                        </div>
                    </div>       
                </div>
            </div>
        )
    }
}
