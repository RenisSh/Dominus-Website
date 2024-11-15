import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 

const Layout = () => {
    return (
        <div>
            <div className='color: bg-[var(--Remi)]'> 
            <Navbar/>
            </div>

            {/* Main content will dynamically change based on routes */}
            <main className="min-h-[calc(100vh-80px)]">
                <Outlet /> {/* Renders child route content */}
            </main>

            {/* Footer as a footer for all pages */}
            <Footer />
        </div>
    );
};

export default Layout;