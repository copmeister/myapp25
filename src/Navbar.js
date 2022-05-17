import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>OG App</h1>
            <div className="links">
                <Link to="/">Home</Link>
                {/* <Link to="/create">New Page</Link>
                <Link to="/calculator">Calculator</Link>
                <Link to="/figma">Figma</Link> */}
                <Link to="/barchart">Bar Chart</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;