import React from 'react';
import Nav from '../../Nav';

const MainLayout = ({ children }) => (
    <div>
        <Nav />
        <header>
            Header
        </header>
        <main>
            {children}
        </main>
        <footer>
            Footer
        </footer>
    </div>
);

export default MainLayout;
