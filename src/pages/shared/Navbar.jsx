import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
    {
        path: '/',
        name: 'Furniture'
    },
    {
        path: '/shop',
        name: 'Shop'
    },
    {
        path: '/about',
        name: 'AboutUs'
    },
    {
        path: '/contact',
        name: 'Contact'
    },
]

const NavItems = () => {
    return (
    <ul>
        {
            navItems.map((item, index) => {
                return <li key={index}>
                    <Link to={item.path}>{item.name}</Link>
                </li>
            })
        }
    </ul>
    )
}

const Navbar = () => {
    return (
        <header>
            <nav className='max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4'>
                {/* logo section */}
                <div>
                    <Link to={'/'}>
                        <h1>Furneta.</h1>
                    </Link>
                </div>

                {/* desktop menu section  */}
                <div>
                    <NavItems/>
                </div>

                {/* button section */}
                <div>cart</div>
            </nav>
        </header>
    );
};

export default Navbar;