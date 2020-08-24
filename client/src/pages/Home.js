import React from 'react'
import {Link} from 'react-router-dom'
import Planning from '../components/Planning'

const Home = () => {
    return (
        <div>
            {/* <!-- Slider Section --> */}
            <div className="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center pb-3 text-white">
                            <h2>Connect with Excellent Vendors.</h2>
                            <p>we have the finest vendors in the industry</p>
                        </div>
                    </div>
                        
                    <div className="row px-5 pt-4 pb-3 form-home">
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-control input-lg" id="inputlg category">
                                    <option>Select Vendor Category</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-control" id="city">
                                    <option>Select City</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                </div>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-block">
                                <Link to="/">FIND VENDORS</Link>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
            

            {/* <!-- Get started section --> */}
            <div className="section getStarted my-5">
                <div className="container">
                    <div className="row">
                            
                        <div className="col-md-10 offset-md-1">
                            <h3 className="text-center mb-3">Start your wedding project here</h3>
                            
                            <p className="text-center lead">Aliquam tincidunt auctor metus, non semper magna auctor at. Fusce dapibus lobortis turpis, vel rutrum libero tincidunt at. Donec non nisl arcu. Integer et auctor lorem. Proin massa tellus, pulvinar nec sagittis in, sagittis eget eros. Nunc quam odio, vehicula quis ligula nec, euismod bibendum quam.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Planning --> */}
            <Planning/>

            {/* <!-- Collage --> */}
            <div className="collage container-fluid">
                <div className="row">
                    <div className="col-md-6 parent">
                        <div className="first child"></div>
                    </div>
                    <div className="col-md-3 text-center second">
                        <h4>Over 120 <br/>amazing vendors</h4>
                    </div>
                    <div className="col-md-3 parent">
                        <div className="third child">
                        </div>
                    </div>
                    <div className="col-md-3 fourth text-center">
                        <h4>superior <br/> service delivery</h4>
                    </div>
                    <div className="col-md-5 parent">
                        <div className="fifth child">
                        </div>
                    </div>
                    <div className="col-md-4 sixth text-center">
                        <h4>best wedding <br/> budgeting tools.</h4>
                    </div>
                </div>
            </div>

            {/* <!-- Featured vendors --> */}
            <div className="featured">
                <div className="container">

                    <div className="row text-center">
                        <div className="col-12">
                            <h3>More than 1,200 vendors available</h3>
                            <p className="bottom">Donec sagittis blandit ex consequat pulvin ondimentum tortor eitae suscipit augupibus</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img src="front/images/dress.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Aakaypee Styles</h5>
                                    <p><small><i className="fas fa-map-marker-alt"></i> Street Address, Name of Town, 1234</small></p>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <div className="card-footer text-muted">
                                    <p>₦ 45, 000 - ₦ 120, 000</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img src="front/images/dress.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Aakaypee Styles</h5>
                                    <p><small><i className="fas fa-map-marker-alt"></i> Street Address, Name of Town, 1234</small></p>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <div className="card-footer text-muted">
                                    <p>₦ 45, 000 - ₦ 120, 000</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img src="front/images/dress.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Aakaypee Styles</h5>
                                    <p><small><i className="fas fa-map-marker-alt"></i> Street Address, Name of Town, 1234</small></p>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <div className="card-footer text-muted">
                                    <p>₦ 45, 000 - ₦ 120, 000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col"></div>
                        <div className="col-md-3">
                            <Link to="/vendors" className="btn btn-block">ALL VENDORS</Link>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>

            {/* <!-- Cities --> */}
            <div className="cities py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 parent">
                            <div className="child lagos">
                            </div>
                        </div>
                        <div className="col-md-4 parent">
                            <div className="child abuja">
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 parent">
                            <div className="child port">
                            </div>
                        </div>
                        <div className="col-md-8 parent">
                            <div className="child delta">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Subscribe --> */}
            <div className="subscribe">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-8 offset-md-2">
                            <h3>Subscribe to Our Newsletter</h3>
                            <p className="pb-4">Get the latest news on your inbox</p>
                            <form action="">
                                <div className="row">
                                    <div className="col-md-9 col-xs-12">
                                        <div className="form-group">
                                            <input type="email" className="form-control " id="email" placeholder="Enter your email..."/>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-xs-12">
                                        <button className="btn btn-block">SUBSCRIBE</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Home