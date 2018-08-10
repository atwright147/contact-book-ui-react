import React from 'react';

import Nav from '../../Nav';
import Header from '../../Furnature/Header';
import Footer from '../../Furnature/Footer';

const MainLayout = ({ children }) => (
    <div>
        <Nav />
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
);

export default MainLayout;
