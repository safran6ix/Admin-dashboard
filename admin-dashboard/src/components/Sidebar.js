// components/Sidebar.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiLogOut } from 'react-icons/fi';

function Sidebar({ menuItems, collapsed, setCollapsed }) {
    return (
        <motion.div
            className={`sidebar ${collapsed ? 'collapsed' : ''}`}
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="sidebar-header">
                <motion.div
                    className="logo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {!collapsed ? <span>Admin<span className="highlight">Pro</span></span> : <span>A<span className="highlight">P</span></span>}
                </motion.div>
                <button
                    className="collapse-btn"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
                </button>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item, index) => (
                    <motion.a
                        key={index}
                        href="#"
                        className={`nav-item ${item.active ? 'active' : ''}`}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <item.icon className="nav-icon" />
                        {!collapsed && <span>{item.title}</span>}
                        {!collapsed && item.badge && (
                            <span className="badge">{item.badge}</span>
                        )}
                    </motion.a>
                ))}
            </nav>

            <motion.div
                className="sidebar-footer"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
            >
                <FiLogOut className="nav-icon" />
                {!collapsed && <span>Logout</span>}
            </motion.div>
        </motion.div>
    );
}

export default Sidebar;