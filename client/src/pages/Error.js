import React from 'react'
import {Link} from 'react-router-dom'
import Hero from "../components/Hero"
import Banner from "../components/Banner"

const Error = () => {
    return <Hero>
        <Banner title="Error 404" subtitle="Page not Found">
        <Link to="/" className="btn btn-info">Back Home</Link>
        </Banner>
    </Hero>;
}

export default Error