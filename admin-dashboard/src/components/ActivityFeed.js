// components/ActivityFeed.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiUserPlus, FiShoppingBag, FiDollarSign, FiStar } from 'react-icons/fi';

const activities = [
    { icon: FiUserPlus, text: 'New user registered', time: '2 min ago', color: '#4f46e5' },
    { icon: FiShoppingBag, text: 'New order placed', time: '15 min ago', color: '#10b981' },
    { icon: FiDollarSign, text: 'Payment received', time: '1 hour ago', color: '#f59e0b' },
    { icon: FiStar, text: 'New review posted', time: '3 hours ago', color: '#ef4444' }
];

function ActivityFeed() {
    return (
        <div className="activity-list">
            {activities.map((activity, index) => (
                <motion.div
                    key={index}
                    className="activity-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                >
                    <div className="activity-icon" style={{ backgroundColor: `${activity.color}20` }}>
                        <activity.icon style={{ color: activity.color }} />
                    </div>
                    <div className="activity-details">
                        <p>{activity.text}</p>
                        <span>{activity.time}</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default ActivityFeed;