import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/certificationWall">Certification Wall</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;