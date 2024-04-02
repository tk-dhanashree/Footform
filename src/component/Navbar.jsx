import React, { useState } from 'react';
import headerLogo from '../assets/header-logo.png'
import profile from '../assets/profile.svg'
import { IoMdSearch } from "react-icons/io";
import '../styles/Navbar.css';
import { HiBars3 } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import MenuOverlay from './MenuOverlay';

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#shop", label: "Shop" },
    { href: "#cart", label: "Cart" },
    { href: "#contact", label: "Contact" },
];

const Nav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <header className='mx-auto top-0 left-0 right-0'>
            <nav className='container flex justify-between mx-auto px-4'>
                <a href='/'>
                    <img
                        src={headerLogo}
                        alt='logo'
                        width={127}
                        height={127}
                        className='m-0 w-24 h-24 sm:w-32 sm:h-32'
                    />
                </a>
                <div className='mobile-menu block md:hidden'>
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-black text-black hover:text-secondary-600 hover:border-secondary-600'>
                                <HiBars3 className='h-5 w-5' />
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-black text-black hover:text-secondary-600 hover:border-secondary-600'>
                                <FaXmark className='h-5 w-5' />
                            </button>
                        )
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <div className='flex gap-40'>
                        <div className='flex mt-5 w-64 h-8 border-2 border-solid rounded-xl border-[#B6B5C2]'>
                            <input type="text" placeholder=" Search" className="w-56 rounded-xl" />
                            <button>
                                <IoMdSearch />
                            </button>
                        </div>
                        <div className='flex gap-16 mt-5'>
                            <ul className='flex justify-center gap-16 menu menu--adsila'>
                                {navLinks.map((item) => (
                                    <li key={item.label} className='menu__item'>
                                        <a
                                            href={item.href}
                                            className='menu__item-name font-sans hover:text-[#C7CFF5]'
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <a href='/' className='flex justify-start'>
                                <img
                                    src={profile}
                                    alt='profile'
                                    width={46}
                                    height={46}
                                    className='w-10 h-10 rounded-full'
                                />
                            </a>
                        </div>
                    </div>
                </div>
                {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
            </nav>
        </header>
    );
};

export default Nav;