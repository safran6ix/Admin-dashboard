// components/StatsCard.js
import React from 'react';
import { motion } from 'framer-motion';

function StatsCard({ title, value, change, icon: Icon, color, delay }) {
    return (
        <motion.div
            className="stats-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.3 }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
        >
            <div className="card-icon" style={{ backgroundColor: `${color}20` }}>
                <Icon style={{ color }} />
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <div className="card-footer">
                    <span className="value">{value}</span>
                    <motion.span
                        className="change"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: delay + 0.2 }}
                        style={{ color: change.startsWith('+') ? '#10b981' : '#ef4444' }}
                    >
                        {change}
                    </motion.span>
                </div>
            </div>
        </motion.div>
    );
}

export default StatsCard;