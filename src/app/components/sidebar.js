'use client'

import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import '../styles/sidebar.css';

export default function Sidebar({ activeTab, onTabChange }) {
    const menuItems = [
        { id: 'students', icon: '👨‍🎓', label: 'Quản lý học sinh' },
        { id: 'drivers', icon: '🚗', label: 'Quản lý tài xế' },
        { id: 'buses', icon: '🚌', label: 'Quản lý xe buýt' },
        { id: 'routes', icon: '🛣️', label: 'Quản lý tuyến đường' },
        { id: 'assignments', icon: '📋', label: 'Phân công' },
        { id: 'schedule', icon: '📅', label: 'Lịch trình' },
        { id: 'tracking', icon: '🧭', label: 'Theo dõi GPS' },
    ];

    return (
        <div className="sidebar">

            <Nav className="sidebar-nav flex-column">
                {menuItems.map((item) => (
                    <Nav.Link
                        key={item.id}
                        className={`sidebar-nav-item ${activeTab === item.id ? 'active' : ''}`}
                        onClick={() => onTabChange(item.id)}
                    >
                        <span className="sidebar-nav-icon">{item.icon}</span>
                        <span className="sidebar-nav-label">{item.label}</span>
                    </Nav.Link>
                ))}
            </Nav>
        </div>
    );
}
