import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaPinterestP,
    FaBehance,
    FaDribbble,
} from 'react-icons/fa';
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

const FooterSection = () => {
    const featureItems = [
        { name: 'Blog', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Hire Developer', href: '#' },
        { name: 'Career', href: '#' },
        { name: 'Who We Are', href: '#' },
    ];

    const serviceItems = [
        { name: 'Web Development', href: '#' },
        { name: 'Mobile App Development', href: '#' },
        { name: 'Game Development', href: '#' },
        { name: 'UI/UX Design', href: '#' },
        { name: 'Graphics Design', href: '#' },
        { name: 'DevOps', href: '#' },
        { name: 'E-Commerce', href: '#' },
        { name: 'Digital Marketing', href: '#' },
        { name: 'Cloud Computing', href: '#' },
    ];
    
    return (
        <footer className="bg-[#0C1226] text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
                    {/* Features Menu */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6 underline decoration-dotted decoration-underline-offset-9">Features menu</h4>
                        <ul className="space-y-4">
                            {featureItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="hover:text-orange-500 transition-colors duration-200">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service Menu */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6 underline decoration-dotted decoration-underline-offset-9">Service Menu</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:space-y-4 lg:gap-0">
                            {serviceItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="hover:text-orange-500 transition-colors duration-200">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Contact Information */}
                    <div className="md:col-span-2">
                        <h4 className="text-xl font-semibold mb-6 underline decoration-dotted decoration-underline-offset-9">Contact Information</h4>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <HiOutlineLocationMarker className="text-orange-500 text-2xl flex-shrink-0 mt-1" />
                                <p className="text-gray-300">
                                    904, Skywalk The Elements, Jagatpur Rd, near BSNL Office, off Sarkhej - Gandhinagar Highway, Jagatpur, Ahmedabad, Gujarat 382470
                                </p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <HiOutlineLocationMarker className="text-orange-500 text-2xl flex-shrink-0 mt-1" />
                                <p className="text-gray-300">
                                    1148 S Railroad Ave, Bronxville, New York 10708, USA.
                                </p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <MdOutlineMail className="text-orange-500 text-2xl flex-shrink-0" />
                                <a href="mailto:sales@tecoreng.com" className="hover:underline">sales@tecoreng.com</a>
                            </div>
                            <div className="flex items-start space-x-4">
                                <MdOutlinePhone className="text-orange-500 text-2xl flex-shrink-0" />
                                <div>
                                    <p>Call Us:</p>
                                    <p>HR - <a href="tel:+916352725452" className="hover:underline">+91 63527 25452</a></p>
                                    <p>Sales - <a href="tel:+918511746476" className="hover:underline">+91 85117 46476</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white border-opacity-20 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                    <div className="flex items-center space-x-4">
                        <img src="/logo.svg" alt="Technical Core Engineers Logo" className="h-25" />
                    </div>

                    <p className="text-gray-400">Copyright © 2025 by Tecoreng</p>

                    <div className="flex space-x-4 text-2xl">
                        <a href="#" aria-label="Facebook" className="hover:text-orange-500 transition-colors duration-200"><FaFacebookF /></a>
                        <a href="#" aria-label="Twitter" className="hover:text-orange-500 transition-colors duration-200"><FaTwitter /></a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-orange-500 transition-colors duration-200"><FaLinkedinIn /></a>
                        <a href="#" aria-label="Pinterest" className="hover:text-orange-500 transition-colors duration-200"><FaPinterestP /></a>
                        <a href="#" aria-label="Behance" className="hover:text-orange-500 transition-colors duration-200"><FaBehance /></a>
                        <a href="#" aria-label="Dribbble" className="hover:text-orange-500 transition-colors duration-200"><FaDribbble /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;