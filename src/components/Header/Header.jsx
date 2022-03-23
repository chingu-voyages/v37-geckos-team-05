import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1><Link to="/"
            className="logo text-gradient">Aicareer</Link></h1>
            <ul>
                <li>
                    <Link to="/searchjobs" className="text-gradient">Job Search</Link>
                </li>
                <li>
                    <Link to="/signin" className="text-gradient">Sign in</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;