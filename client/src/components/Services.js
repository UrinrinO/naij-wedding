import React, { Component } from 'react'
import { FaHotel, FaCameraRetro, FaVideo } from "react-icons/fa"
import { GiLargeDress, GiCupcake } from "react-icons/gi";
import { MdQueueMusic } from "react-icons/md";
import { IoMdWine } from "react-icons/io";

export default class Services extends Component {
    state={
        services:[
            {
               img: <img src="https://picsum.photos/100/100/?random" width="100%" height="250px" alt="service"/>,
               title: "Reception Venues",
               icon:<FaHotel/>
            },
            {
                img: <img src="https://picsum.photos/200/200/?random" width="100%" height="250px" alt="service"/>,
                title: "Photographers",
                icon:<FaCameraRetro/>
             },
             {
                img: <img src="https://picsum.photos/300/300/?random" width="100%" height="250px" alt="service"/>,
                title: "Videographers",
                icon:<FaVideo/>
             },
             {
                img: <img src="https://picsum.photos/400/400/?random" width="100%" height="250px" alt="service"/>,
                title: "Food &amp; Drinks",
                icon:<GiCupcake/>
             },
             {
                img: <img src="https://picsum.photos/500/500/?random" width="100%" height="250px" alt="service"/>,
                title: "Bridal Saloons",
                icon:<GiLargeDress/>
             },
             {
                img: <img src="https://picsum.photos/600/600/?random" width="100%" height="250px" alt="service"/>,
                title: "DJs",
                icon:<MdQueueMusic/>
             },
             {
                img: <img src="https://picsum.photos/700/700/?random" width="100%" height="250px" alt="service"/>,
                title: "Wines",
                icon:<IoMdWine/>
             }             
        ]
    }
    render() {
        return (
            <div>
               <div className="container py-5">
                   <div className="row">
                        <div className="col-12">
                            {/* <Title title="services"/> */}
                            <div className="row">
                                <div>
                                    <h3>Top Vendors Categories</h3>
                                </div>
                                <div className="ml-auto">
                                    <button className="btn btn-outline-vendors px-5">View All Vendors</button>
                                </div>
                            </div>
                        </div>
                        <div className="row services">
                            {this.state.services.map((item,index) => {
                                return (
                                    <div key={index} className="col-md-3 my-3">
                                        {item.img}
                                        <div className="bottom-left">{item.icon} {item.title}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
               </div>
                
            </div>
        )
    }
}
