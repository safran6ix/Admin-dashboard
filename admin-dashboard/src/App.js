// App.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiHome, FiTrendingUp, FiUsers, FiShoppingBag,
  FiSettings, FiMail, FiCalendar, FiBarChart2
} from 'react-icons/fi';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import Chart from './components/Chart';
import RecentOrders from './components/RecentOrders';
import ActivityFeed from './components/ActivityFeed';
import './styles/dashboard.css';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const statsData = [
    { title: 'Total Revenue', value: '$54,239', change: '+12.5%', icon: FiTrendingUp, color: '#4f46e5' },
    { title: 'Total Users', value: '8,549', change: '+23.1%', icon: FiUsers, color: '#10b981' },
    { title: 'New Orders', value: '3,129', change: '+18.7%', icon: FiShoppingBag, color: '#f59e0b' },
    { title: 'Conversion Rate', value: '3.24%', change: '+4.3%', icon: FiBarChart2, color: '#ef4444' }
  ];

  const menuItems = [
    { title: 'Dashboard', icon: FiHome, active: true },
    { title: 'Analytics', icon: FiTrendingUp },
    { title: 'Users', icon: FiUsers },
    { title: 'Orders', icon: FiShoppingBag },
    { title: 'Messages', icon: FiMail, badge: 3 },
    { title: 'Calendar', icon: FiCalendar },
    { title: 'Settings', icon: FiSettings }
  ];

  return (
    <div className="dashboard">
      <Sidebar
        menuItems={menuItems}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      <div className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>
        <Header />

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {statsData.map((stat, index) => (
            <StatsCard key={index} {...stat} delay={index * 0.1} />
          ))}
        </motion.div>

        <div className="charts-section">
          <motion.div
            className="chart-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2>Revenue Overview</h2>
            <Chart />
          </motion.div>

          <motion.div
            className="activity-feed"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2>Recent Activity</h2>
            <ActivityFeed />
          </motion.div>
        </div>

        <motion.div
          className="recent-orders"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2>Recent Orders</h2>
          <RecentOrders />
        </motion.div>
      </div>
    </div>
  );
}

export default App;