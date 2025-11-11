'use client'

import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Alert, ListGroup, Modal } from 'react-bootstrap';
import Sidebar from '../components/sidebar';
import '../styles/parent.css';

export default function ParentPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [activeTab, setActiveTab] = useState('tracking');
    const [studentName, setStudentName] = useState('');
    const [showNotificationModal, setShowNotificationModal] = useState(false);
    const [selectedNotification, setSelectedNotification] = useState(null);

    // Thông tin học sinh
    const [studentInfo, setStudentInfo] = useState({
        id: 'HS001',
        name: 'Nguyễn Văn An',
        class: '10A1',
        school: 'THPT Lê Quý Đôn',
        dateOfBirth: '15/05/2008',
        address: '123 Nguyễn Văn Linh, Quận 7, TP.HCM',
        phone: '0123456789',
        pickupPoint: 'Ngã tư Bình Phước',
        dropoffPoint: 'Cổng trường THPT Lê Quý Đôn',
        parentName: 'Nguyễn Văn Ba',
        parentPhone: '0987654321',
    });

    // Sample data - xe buýt của con
    const [busInfo, setBusInfo] = useState({
        busNumber: 'Xe 01',
        plateNumber: '29A-12345',
        driverName: 'Hoàng Văn Mạnh',
        driverPhone: '0912345678',
        currentLocation: 'Đang ở gần Ngã tư Bình Phước',
        estimatedArrival: '5 phút nữa',
        status: 'on-route', // on-route, delayed, arrived
        distance: '2.3 km',
        route: 'SGU - HCMUTE',
        scheduledTime: '07:30'
    });

    // Lịch trình tuyến cố định
    const [weeklySchedule, setWeeklySchedule] = useState([
        { day: 'Thứ 2', route: 'SGU - HCMUTE', pickupTime: '06:30', dropoffTime: '07:30' },
        { day: 'Thứ 3', route: 'SGU - HCMUTE', pickupTime: '06:30', dropoffTime: '07:30' },
        { day: 'Thứ 4', route: 'SGU - HCMUTE', pickupTime: '06:30', dropoffTime: '07:30' },
        { day: 'Thứ 5', route: 'SGU - HCMUTE', pickupTime: '06:30', dropoffTime: '07:30' },
        { day: 'Thứ 6', route: 'SGU - HCMUTE', pickupTime: '06:30', dropoffTime: '07:30' },
    ]);

    // Thông báo & cảnh báo
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: 'arrival',
            title: 'Xe sắp đến!',
            message: 'Xe buýt sẽ đến điểm đón trong 5 phút. Con bạn nên chuẩn bị ra điểm đón.',
            time: '2 phút trước',
            read: false,
            severity: 'info'
        },
        {
            id: 2,
            type: 'delay',
            title: 'Cảnh báo: Xe trễ',
            message: 'Xe buýt đang bị chậm 10 phút do tắc đường trên đường Điện Biên Phủ. Dự kiến đến lúc 07:40.',
            time: '15 phút trước',
            read: false,
            severity: 'warning'
        },
        {
            id: 3,
            type: 'info',
            title: 'Xe đã xuất phát',
            message: 'Xe buýt đã rời bến lúc 06:30. Đang trên đường đến điểm đón của con bạn.',
            time: '1 giờ trước',
            read: true,
            severity: 'success'
        },
        {
            id: 4,
            type: 'arrived',
            title: 'Đã đến điểm đón',
            message: 'Xe buýt đã đến điểm đón của con bạn. Con đã lên xe an toàn.',
            time: 'Hôm qua',
            read: true,
            severity: 'success'
        },
    ]);

    // Lịch sử di chuyển
    const [tripHistory, setTripHistory] = useState([
        { id: 1, date: '08/11/2025', route: 'SGU - HCMUTE', pickupTime: '06:35', dropoffTime: '07:28', status: 'completed', onTime: true },
        { id: 2, date: '07/11/2025', route: 'SGU - HCMUTE', pickupTime: '06:32', dropoffTime: '07:45', status: 'completed', onTime: false },
        { id: 3, date: '06/11/2025', route: 'SGU - HCMUTE', pickupTime: '06:30', dropoffTime: '07:30', status: 'completed', onTime: true },
        { id: 4, date: '05/11/2025', route: 'SGU - HCMUTE', pickupTime: '06:28', dropoffTime: '07:25', status: 'completed', onTime: true },
    ]);

    useEffect(() => {
        const userRole = localStorage.getItem('userRole');
        const userName = localStorage.getItem('userName');
        const studentNameStored = localStorage.getItem('studentName');

        if (userRole === 'parent') {
            setIsAuthenticated(true);
            if (studentNameStored) {
                setStudentName(studentNameStored);
                // Cập nhật thông tin học sinh nếu có
                setStudentInfo(prev => ({ ...prev, name: studentNameStored }));
            }
        } else {
            window.location.href = '/login';
        }
    }, []);

    const getStatusBadge = (status) => {
        const statusMap = {
            'on-route': { variant: 'primary' },
            'delayed': { variant: 'warning' },
            'arrived': { variant: 'success' },
            'completed': { variant: 'secondary' },
            'today': { variant: 'info' },
            'upcoming': { variant: 'light' },
        };
        return statusMap[status] || { variant: 'secondary', text: status, icon: '•' };
    };

    const handleNotificationClick = (notification) => {
        setSelectedNotification(notification);
        setShowNotificationModal(true);
        // Đánh dấu đã đọc
        setNotifications(notifications.map(n =>
            n.id === notification.id ? { ...n, read: true } : n
        ));
    };

    const unreadCount = notifications.filter(n => !n.read).length;

    const renderContent = () => {
        switch (activeTab) {
            case 'tracking':
                return (
                    <>
                        <div className="parent-header mb-4">
                            <h1 className="parent-title"> Theo dõi xe buýt</h1>
                            <p className="parent-subtitle">Vị trí thời gian thực của xe đưa đón</p>
                        </div>

                        {/* Trạng thái xe hiện tại */}
                        <Row className="mb-4">
                            <Col lg={10}>
                                <Card className="bus-tracking-card shadow-sm">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-start mb-3">
                                            <div>
                                                <h4 className="mb-2"> {busInfo.busNumber} - {busInfo.plateNumber}</h4>
                                                <p className="text-muted mb-1">Tài xế: {busInfo.driverName} - {busInfo.driverPhone}</p>
                                                <p className="text-muted mb-0">Tuyến: {busInfo.route}</p>
                                            </div>

                                        </div>

                                        {/* Bản đồ giả lập */}
                                        <div className="map-placeholder mb-3">
                                            <div className="map-content">
                                                <span style={{ fontSize: '3rem' }}>🗺️</span>
                                                <p className="mt-2 mb-0"><strong>Vị trí hiện tại:</strong> {busInfo.currentLocation}</p>
                                                <p className="text-muted">Khoảng cách: {busInfo.distance}</p>
                                            </div>
                                        </div>

                                        <Alert variant="info" className="mb-0">
                                            <div className="d-flex align-items-center">
                                                <span style={{ fontSize: '2rem' }} className="me-3"></span>
                                                <div>
                                                    <strong>Dự kiến đến điểm đón: {busInfo.estimatedArrival}</strong>
                                                    <br />
                                                    <small>Giờ lên lịch: {busInfo.scheduledTime}</small>
                                                </div>
                                            </div>
                                        </Alert>
                                    </Card.Body>
                                </Card>
                            </Col>


                        </Row>
                    </>
                );

            case 'notifications':
                return (
                    <>
                        <div className="parent-header mb-4">
                            <h1 className="parent-title"> Thông báo & Cảnh báo</h1>
                            <p className="parent-subtitle">Nhận cập nhật về xe buýt và lịch trình của {studentName}</p>

                        </div>

                        <Row>
                            <Col lg={10}>
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <ListGroup variant="flush">
                                            {notifications.map((notif) => (
                                                <ListGroup.Item
                                                    key={notif.id}
                                                    className={`notification-item ${!notif.read ? 'unread' : ''}`}
                                                    onClick={() => handleNotificationClick(notif)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <div className="d-flex align-items-start">
                                                        <span style={{ fontSize: '2rem' }} className="me-3">{notif.icon}</span>
                                                        <div className="flex-grow-1">
                                                            <div className="d-flex justify-content-between align-items-start">
                                                                <div>
                                                                    <h6 className="mb-1">{notif.title}</h6>
                                                                    <p className="mb-1 text-muted">{notif.message}</p>
                                                                    <small className="text-muted">{notif.time}</small>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>


                        </Row>
                    </>
                );

            case 'schedule':
                return (
                    <>
                        <div className="parent-header mb-4">
                            <h1 className="parent-title"> Lịch trình tuần</h1>
                            <p className="parent-subtitle">Lịch trình tuyến cố định của {studentName}</p>
                        </div>

                        <Row>
                            <Col lg={10}>
                                <Card className="shadow-sm">
                                    <Card.Body>
                                        <h5 className="mb-3">Tuần này (06/11 - 10/11/2025)</h5>
                                        <div className="schedule-list">
                                            {weeklySchedule.map((schedule, idx) => (
                                                <div key={idx} className={`schedule-item ${schedule.status}`}>
                                                    <div className="schedule-header">
                                                        <h6 className="mb-0">
                                                            {schedule.day}
                                                            <Badge bg={getStatusBadge(schedule.status).variant} className="ms-2">
                                                                {getStatusBadge(schedule.status).text}
                                                            </Badge>
                                                        </h6>
                                                    </div>
                                                    <div className="schedule-body mt-2">
                                                        <Row>
                                                            <Col md={6}>
                                                                <p className="mb-1"><strong> Tuyến:</strong> {schedule.route}</p>
                                                            </Col>
                                                            <Col md={3}>
                                                                <p className="mb-1"><strong> Đón:</strong> {schedule.pickupTime}</p>
                                                            </Col>
                                                            <Col md={3}>
                                                                <p className="mb-1"><strong> Trả:</strong> {schedule.dropoffTime}</p>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>


                        </Row>
                    </>
                );

            case 'history':
                return (
                    <>
                        <div className="parent-header mb-4">
                            <h1 className="parent-title"> Lịch sử di chuyển</h1>
                            <p className="parent-subtitle">Các chuyến xe đã hoàn thành của {studentName}</p>
                        </div>

                        <Card className="shadow-sm">
                            <Card.Body>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Ngày</th>
                                                <th>Tuyến</th>
                                                <th>Giờ đón</th>
                                                <th>Giờ trả</th>
                                                <th>Trạng thái</th>
                                                <th>Ghi chú</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tripHistory.map((trip) => (
                                                <tr key={trip.id}>
                                                    <td>{trip.date}</td>
                                                    <td>{trip.route}</td>
                                                    <td>{trip.pickupTime}</td>
                                                    <td>{trip.dropoffTime}</td>
                                                    <td>
                                                        <Badge bg={trip.onTime ? 'success' : 'warning'}>
                                                            {trip.onTime ? ' Đúng giờ' : ' Trễ'}
                                                        </Badge>
                                                    </td>
                                                    <td>
                                                        {!trip.onTime && trip.delay && (
                                                            <small className="text-muted">Trễ {trip.delay}</small>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </>
                );

            case 'student':
                return (
                    <>
                        <div className="parent-header mb-4">
                            <h1 className="parent-title"> Thông tin học sinh</h1>
                            <p className="parent-subtitle">Thông tin chi tiết </p>
                        </div>

                        <Row>
                            <Col lg={10}>
                                <Card className="shadow-sm mb-4">
                                    <Card.Header className="bg-white text-dark">
                                        <h5 className="mb-0"> Thông tin cá nhân</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row className="mb-3">
                                            <Col md={6}>
                                                <p className="mb-2">
                                                    <strong>Mã học sinh:</strong> {studentInfo.id}
                                                </p>
                                                <p className="mb-2">
                                                    <strong>Họ và tên:</strong> {studentInfo.name}
                                                </p>
                                                <p className="mb-2">
                                                    <strong>Ngày sinh:</strong> {studentInfo.dateOfBirth}
                                                </p>
                                                <p className="mb-0">
                                                    <strong>Số điện thoại:</strong> {studentInfo.phone}
                                                </p>
                                            </Col>
                                            <Col md={6}>
                                                <p className="mb-2">
                                                    <strong>Lớp:</strong> {studentInfo.class}
                                                </p>
                                                <p className="mb-2">
                                                    <strong>Trường:</strong> {studentInfo.school}
                                                </p>
                                                <p className="mb-0">
                                                    <strong>Địa chỉ:</strong> {studentInfo.address}
                                                </p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>

                                <Card className="shadow-sm mb-4">
                                    <Card.Header className="bg-white text-dark">
                                        <h5 className="mb-0"> Thông tin đưa đón</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col md={6}>
                                                <p className="mb-2">
                                                    <strong>Điểm đón:</strong> {studentInfo.pickupPoint}
                                                </p>
                                                <p className="mb-0">
                                                    <strong>Tuyến xe:</strong> {busInfo.route}
                                                </p>
                                            </Col>
                                            <Col md={6}>
                                                <p className="mb-2">
                                                    <strong>Điểm trả:</strong> {studentInfo.dropoffPoint}
                                                </p>
                                                <p className="mb-0">
                                                    <strong>Xe buýt:</strong> {busInfo.busNumber} ({busInfo.plateNumber})
                                                </p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>

                                <Card className="shadow-sm">
                                    <Card.Header className="bg-white text-dark">
                                        <h5 className="mb-0"> Thông tin phụ huynh</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col md={6}>
                                                <p className="mb-2">
                                                    <strong>Họ tên phụ huynh:</strong> {studentInfo.parentName}
                                                </p>
                                                <p className="mb-0">
                                                    <strong>Số điện thoại:</strong> {studentInfo.parentPhone}
                                                </p>
                                            </Col>
                                            <Col md={6}>
                                                <p className="mb-0">
                                                    <strong>Địa chỉ:</strong> {studentInfo.address}
                                                </p>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>


                        </Row>
                    </>
                );

            default:
                return null;
        }
    };

    if (!isAuthenticated) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Sidebar activeTab={activeTab} onTabChange={setActiveTab} userRole="parent" />
            <div className="parent-content">
                <Container fluid>
                    {renderContent()}
                </Container>
            </div>


        </>
    );
}
