import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Button from './Button';
import OutlinedButton from './OutlinedButton';

const MobileMenu = ({ onClose, navItems }) => {
    const [openDropdownId, setOpenDropdownId] = useState(null);

    // Define animation variants for the main menu container
    const containerVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
        exit: { opacity: 0, x: "100%", transition: { duration: 0.5 } },
    };

    // Define animation variants for the individual menu items
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    // Effect to handle body scrolling
    useEffect(() => {
        // Prevent scrolling on the body when the component mounts
        document.body.style.overflow = 'hidden';

        // Re-enable scrolling on the body when the component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const toggleDropdown = (id) => {
        setOpenDropdownId(openDropdownId === id ? null : id);
    };

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-full bg-[#0C1226] text-white z-20 flex flex-col items-center justify-center p-8 lg:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
        >
            {/* Close Button (cross icon) */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white z-30 focus:outline-none"
                aria-label="Close menu"
            >
                <XMarkIcon className="h-8 w-8 text-white" />
            </button>

            <motion.div
                className="flex flex-col items-center space-y-6 text-white font-medium text-2xl w-full"
                variants={containerVariants}
            >
                {navItems.map((item, index) => (
                    <motion.div key={index} variants={itemVariants} className="w-full text-center">
                        {item.subItems ? (
                            // Item with sub-menu
                            <div>
                                <button
                                    onClick={() => toggleDropdown(index)}
                                    className="w-full flex justify-center items-center text-white text-2xl font-semibold py-2 transition-colors duration-200"
                                >
                                    {item.name}
                                    <motion.div
                                        animate={{ rotate: openDropdownId === index ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDownIcon className="ml-2 h-6 w-6" />
                                    </motion.div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {openDropdownId === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="flex flex-col space-y-2 mt-2">
                                                {item.subItems.map((subItem, subIndex) => (
                                                    <a
                                                        key={subIndex}
                                                        href={subItem.href}
                                                        className="text-white/80 text-xl py-2 hover:text-orange-500 transition-colors duration-200"
                                                        onClick={onClose}
                                                    >
                                                        {subItem.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            // Regular item without a sub-menu
                            <a
                                href={item.href}
                                onClick={onClose}
                                className="pb-1 transition-all duration-300 ease-in-out hover:border-b-2 hover:border-[#F66F4D]"
                            >
                                {item.name}
                            </a>
                        )}
                    </motion.div>
                ))}
            </motion.div>

            <div className="flex flex-col space-y-4 mt-8 w-full items-center">
                <motion.div variants={itemVariants} className="w-full text-center">
                    <OutlinedButton text="Hire Developers" onClick={onClose} />
                </motion.div>
                <motion.div variants={itemVariants} className="w-full text-center">
                    <Button text="Get a quote" onClick={onClose} />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default MobileMenu;
