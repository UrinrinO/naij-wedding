import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Title from './Title'

export default class Planning extends Component {
    render() {
        return (
            <div>
                <div className="tools">
                    <div className="py-5 container">
                        <div className="row">
                            <div className="col-12">
                                <Title title="planning tools"/>
                            </div>
                            <div className="container">
                                <div className="">
                                    <div className="row text-center">
                                        
                                        <div className="col-md-4">
                                            <h5 className="mb-4">Find Vendors</h5>
                                            <i className="fas fa-tasks"></i>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h5 className="mb-4">Plan a budget</h5>
                                            <i className="fas fa-chart-pie"></i>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                        <div className="col-md-4">
                                            <h5 className="mb-4">Start Planning</h5>
                                            <i className="fas fa-calendar-alt"></i>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-5">
                                    <div className="col"></div>
                                    <div className="col-md-3">
                                        <Link href="/" className="blueBtn btn btn-block pt-2">START PLANNING</Link>
                                    </div>
                                    <div className="col"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }
}
