import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            {/* <h1>Header</h1> */}
            <h1 className="logo text-gradient"><Link to="/">Aicareer</Link></h1>
            <Link to="/searchjobs" className="header-search text-gradient">Job Search</Link>
        </header>
    )
}

export default Header;