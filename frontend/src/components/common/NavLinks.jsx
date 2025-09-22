// src/components/NavLinks.js

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Button from '../common/Button';


const NavLinks = ({ navItems }) => {
    const [openDropdownId, setOpenDropdownId] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdownId(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleDropdownClick = (index) => {
        setOpenDropdownId(openDropdownId === index ? null : index);
    };

    return (
        <div className="hidden lg:flex items-center space-x-8 flex-shrink-0">
            <nav>
                <div className="flex flex-row items-center space-x-8 text-white font-medium text-lg w-full font-serif">
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative"
                            ref={openDropdownId === index ? dropdownRef : null}
                        >
                            {item.subItems ? (
                                <button
                                    onClick={() => handleDropdownClick(index)}
                                    className="whitespace-nowrap flex items-center border-b-2 border-transparent hover:border-orange-500 transition-colors duration-200"
                                >
                                    {item.name}
                                    <ChevronDownIcon
                                        className={`ml-2 h-4 w-4 transition-transform duration-200 ${openDropdownId === index ? 'rotate-180' : 'rotate-0'}`}
                                    />
                                </button>
                            ) : (
                                <a
                                    href={item.href}
                                    className="whitespace-nowrap flex items-center border-b-2 border-transparent hover:border-orange-500 transition-colors duration-200"
                                >
                                    {item.name}
                                </a>
                            )}
                            {openDropdownId === index && item.subItems && (
                                <div className="hidden lg:block absolute top-full mt-2 w-72 bg-gray-700 rounded-lg shadow-lg py-2 z-10">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <a
                                            key={subIndex}
                                            href={subItem.href}
                                            className="block px-6 py-3 text-base text-white hover:bg-gray-600 transition-colors"
                                            onClick={() => setOpenDropdownId(null)}
                                        >
                                            {subItem.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </nav>
            <Button
                onClick={() => console.log('Hire Developers')}
                transparentOutline
                className="
                    py-1
                    px-2 
                    !text-lg 
                    rounded-full
                    border-1
                    hover:bg-orange-500
                "
            >
                Hire Developers
            </Button>

            <Button
                onClick={() => console.log('Get a Quote')}
                className="
                    py-2 
                    px-2
                    !text-lg 
                    rounded-full
                "
            >
                Get a Quote
            </Button>
        </div>
    );
};

export default NavLinks;