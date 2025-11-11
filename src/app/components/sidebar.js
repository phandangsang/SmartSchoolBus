'use client'

import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import '../styles/sidebar.css';

export default function Sidebar({ activeTab, onTabChange, userRole = 'admin' }) {
    // Menu cho Admin
    const adminMenuItems = [
        { id: 'students', label: 'Quản lý học sinh' },
        { id: 'drivers', label: 'Quản lý tài xế' },
        { id: 'buses', label: 'Quản lý xe buýt' },
        { id: 'routes', label: 'Quản lý tuyến đường' },
        { id: 'assignments', label: 'Phân công' },
        { id: 'schedule', label: 'Lịch trình' },
        { id: 'tracking', label: 'Theo dõi GPS' },
    ];

    // Menu cho Parent (Phụ huynh)
    const parentMenuItems = [
        { id: 'student', label: 'Thông tin' },
        { id: 'tracking', label: 'Theo dõi xe buýt' },
        { id: 'notifications', label: 'Thông báo & Cảnh báo' },
        { id: 'schedule', label: 'Lịch trình tuần' },
        { id: 'history', label: 'Lịch sử di chuyển' },
    ];

    const menuItems = userRole === 'parent' ? parentMenuItems : adminMenuItems;

    return (
        <div className="sidebar">
            {/* <div className="sidebar-header">
                <h4>{userRole === 'parent' ? '👨‍👩‍👧 Phụ huynh' : '⚙️ Quản trị'}</h4>
            </div> */}

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
