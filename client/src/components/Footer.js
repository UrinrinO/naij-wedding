import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 
export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* <!--footer --> */}
                <footer className="footer">
                        <div className="container bottom_border">
                            <div className="row">
                                <div className=" col-md-6 col-sm-6  col-12 col">
                                    <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
                                    {/* <!--headin5_amrc--> */}
                                    <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    <p><i className="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35 </p>
                                    <p><i className="fa fa-phone"></i>  +91-9999878398  </p>
                                    <p><i className="fa fa fa-envelope"></i> info@example.com  </p>
                                </div>
                                <div className=" col-sm-4 col-md  col-6 col">
                                    <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                                    {/* <!--headin5_amrc--> */}
                                    <ul className="footer_ul_amrc">
                                        <li><Link to="#">Remove Background</Link></li>
                                        <li><Link to="#">Shadows &mps; Mirror Reflection</Link></li>
                                        <li><Link to="#">Logo Design</Link></li>
                                        <li><Link to="#">Vectorization</Link></li>
                                    </ul>
                                    {/* <!--footer_ul_amrc ends here--> */}
                                </div>
                                <div className=" col-sm-4 col-md  col-12 col">
                                    <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
                                    {/* <!--headin5_amrc ends here--> */}
                                    <ul className="footer_ul2_amrc">
                                        <li>
                                            <Link to="#"><i className="fab fa-twitter fleft padding-right"></i> </Link>
                                            <p>Lorem Ipsum is simply dummy text of the printing...<Link to="#">https://www.lipsum.com/</Link></p>
                                        </li>
                                        <li>
                                            <Link to="#"><i className="fab fa-twitter fleft padding-right"></i> </Link>
                                            <p>Lorem Ipsum is simply dummy text of the printing...<Link to="#">https://www.lipsum.com/</Link></p>
                                        </li>
                                    </ul>
                                    {/* <!--footer_ul2_amrc ends here--> */}
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <ul className="foote_bottom_ul_amrc">
                                <li><Link to="#">Home</Link></li>
                                <li><Link to="#">About</Link></li>
                                <li><Link to="#">Services</Link></li>
                                <li><Link to="#">Pricing</Link></li>
                                <li><Link to="#">Blog</Link></li>
                                <li><Link to="#">Contact</Link></li>
                            </ul>
                            {/* <!--foote_bottom_ul_amrc ends here--> */}
                            <p className="text-center">Copyright @ 2020 | Designed by <Link to="https://mediaprongr.com" target="_blank">MediaPro Nigeria</Link></p>
                            <ul className="social_footer_ul">
                                <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-linkedin"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                            </ul>
                            {/* <!--social_footer_ul ends here--> */}
                        </div>
                    </footer>
            </div>
        )
    }
}
