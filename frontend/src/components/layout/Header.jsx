// src/components/Header.js

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MobileMenu from '../common/MobileMenu';
import NavLinks from '../common/NavLinks';

const navItems = [
    { name: 'Services', href: '/services' },
    {
        name: 'About Us',
        href: '/about',
        subItems: [
            { name: 'Who We Are', href: '/about/who-we-are' },
            { name: 'Industry We Serve', href: '/about/industry-we-serve' },
        ],
    },
    { name: 'Career', href: '/career' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
];

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-[#010927] text-white">
            <div className="flex items-center justify-between py-6 px-10 border-b border-white border-opacity-20">
                <a href="/">
                    <img src="/logo.svg" alt="Technical Core Engineers Logo" className="h-12" />
                </a>

                {/* Desktop Navigation */}
                <NavLinks navItems={navItems} />

                {/* Mobile/Tablet Menu Button */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="h-8 w-8 text-white" />
                        ) : (
                            <Bars3Icon className="h-8 w-8 text-white" />
                        )}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <MobileMenu
                        onClose={() => setIsMobileMenuOpen(false)}
                        navItems={navItems}
                    />
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;