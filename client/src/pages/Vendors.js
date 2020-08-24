import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Planning from '../components/Planning'

const Vendors = () => {
    return (
        <div>
            <Hero hero="vendorsHero">
                <Banner title="Vendor Listings" subtitle="Get the best from our list of registered vendors">
                <Link to="/" className="btn btn-info">Add A Vendor</Link>
                </Banner>
            </Hero>
            <Services/>
            <Planning/>
            <section>
                <div className="container itemsREJ">
                    <div className="row">
                        <div className="col-md-4 col-sm-">
                            <div className="ratings">
                                <h4>Best Vendor<br/>of the Year</h4>
                                <p>Maecenas vel nibh et felis egestas malesuada. Sed rutrum consequat iaculis.</p>
                                <Link href="/" className="brownBtn btn px-3 pt-2">View Vendor</Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="events">
                                <h4>Top events<br/>around Nigeria</h4>
                                <p>Maecenas vel nibh et felis egestas malesuada. Sed rutrum consequat iaculis.</p>
                                <Link href="/" className="brownBtn btn px-3 pt-2">See Events</Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="join">
                                <h4>Join Community<br/>of planners</h4>
                                <p>Maecenas vel nibh et felis egestas malesuada. Sed rutrum consequat iaculis.</p>
                                <Link href="/" className="brownBtn btn px-3 pt-2">Join Us</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
    
}

export default Vendors