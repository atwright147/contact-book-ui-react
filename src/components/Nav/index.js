import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
    <nav>
        <Link to="/"><i className="fa fa-fw fa-4x fa-home"></i></Link>
        <Link to="/contacts"><i className="fa fa-fw fa-4x fa-address-book"></i></Link>
        <Link to="/contact/create"><i className="fa fa-fw fa-4x fa-user-plus"></i></Link>
    </nav>
);

export default Nav;
