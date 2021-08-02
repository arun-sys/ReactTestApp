import React from 'react'
import {Link} from "react-router-dom";
function Header() {
    return (
        <div >
            <ul className="header-links">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/barchart">Barchart</Link>
                </li>
            </ul>
            <hr />
        </div>
    )
}

export default Header;
