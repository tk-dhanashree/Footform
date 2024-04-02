import React from 'react';
import profile from '../assets/profile.svg'
import { IoMdSearch } from "react-icons/io";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#shop", label: "Shop" },
    { href: "#cart", label: "Cart" },
    { href: "#contact", label: "Contact" },
];

const MenuOverlay = () => {
    return (
        <div className='mt-10 left-0 right-0 absolute flex flex-col justify-center items-center p-10 gap-10 bg-[#6D6B7B]'>
            <a href='/' className='flex justify-center'>
                <img
                    src={profile}
                    alt='profile'
                    width={46}
                    height={46}
                    className='w-10 h-10 rounded-full'
                />
            </a>
            <div className='flex mt-5 w-64 h-8 border-2 border-solid rounded-xl border-[#B6B5C2]'>
                <input type="text" placeholder=" Search" className="w-56 rounded-xl bg-[#6D6B7B]" />
                <button>
                    <IoMdSearch />
                </button>
            </div>
            <ul className='flex flex-col justify-center gap-16 menu menu--adsila'>
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
        </div>
    );
}

export default MenuOverlay;
