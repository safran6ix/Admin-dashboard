// components/RecentOrders.js
import React from 'react';
import { motion } from 'framer-motion';

const orders = [
    { id: '#12345', customer: 'John Doe', amount: '$234.50', status: 'completed', date: '2024-01-15' },
    { id: '#12346', customer: 'Jane Smith', amount: '$567.80', status: 'processing', date: '2024-01-14' },
    { id: '#12347', customer: 'Bob Johnson', amount: '$123.45', status: 'pending', date: '2024-01-14' },
    { id: '#12348', customer: 'Alice Brown', amount: '$890.00', status: 'completed', date: '2024-01-13' },
    { id: '#12349', customer: 'Charlie Wilson', amount: '$456.75', status: 'cancelled', date: '2024-01-13' }
];

function RecentOrders() {
    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return '#10b981';
            case 'processing': return '#f59e0b';
            case 'pending': return '#ef4444';
            case 'cancelled': return '#6b7280';
            default: return '#9ca3af';
        }
    };

    return (
        <div className="orders-table">
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <motion.tr
                            key={order.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ backgroundColor: '#374151' }}
                        >
                            <td>{order.id}</td>
                            <td>{order.customer}</td>
                            <td>{order.amount}</td>
                            <td>
                                <span
                                    className="status-badge"
                                    style={{ backgroundColor: `${getStatusColor(order.status)}20`, color: getStatusColor(order.status) }}
                                >
                                    {order.status}
                                </span>
                            </td>
                            <td>{order.date}</td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RecentOrders;