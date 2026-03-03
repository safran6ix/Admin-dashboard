// components/Header.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiBell, FiUser, FiSettings } from 'react-icons/fi';

function Header() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    return (
        <motion.header
            className="header"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className="search-bar">
                <FiSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                />
            </div>

            <div className="header-actions">
                <motion.div
                    className="notification-icon"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowNotifications(!showNotifications)}
                >
                    <FiBell />
                    <span className="notification-badge">3</span>

                    <AnimatePresence>
                        {showNotifications && (
                            <motion.div
                                className="notification-dropdown"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <div className="notification-item">
                                    <p>New order received</p>
                                    <span>2 min ago</span>
                                </div>
                                <div className="notification-item">
                                    <p>User registered</p>
                                    <span>15 min ago</span>
                                </div>
                                <div className="notification-item">
                                    <p>System update</p>
                                    <span>1 hour ago</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    className="profile-icon"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowProfile(!showProfile)}
                >
                    <FiUser />

                    <AnimatePresence>
                        {showProfile && (
                            <motion.div
                                className="profile-dropdown"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <a href="#">Profile</a>
                                <a href="#">Settings</a>
                                <a href="#">Logout</a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    className="settings-icon"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.3 }}
                >
                    <FiSettings />
                </motion.div>
            </div>
        </motion.header>
    );
}

export default Header;