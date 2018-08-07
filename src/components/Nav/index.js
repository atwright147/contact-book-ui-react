import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/contact/create">Create a Contact</Link>
    </nav>
);

export default Nav;
