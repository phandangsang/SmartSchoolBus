'use client'

import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from '../components/sidebar';
import '../styles/driver.css';

export default function DriverPage() {
    const [activeTab, setActiveTab] = useState('routes');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const userRole = localStorage.getItem('userRole');

        if (userRole === 'driver') {
            setIsAuthenticated(true);
        } else {
            window.location.href = '/login';
        }
    }, []);

    if (!isAuthenticated) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Sidebar activeTab={activeTab} onTabChange={setActiveTab} userRole="driver" />
            <div className="driver-content">
                <Container fluid>
                    <h1>Driver Page</h1>
                </Container>
            </div>
        </>
    );
}
