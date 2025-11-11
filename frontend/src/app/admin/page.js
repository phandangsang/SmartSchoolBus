'use client'

import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table, Badge, Modal, Form } from 'react-bootstrap';
import Sidebar from '../components/sidebar';
import '../styles/admin.css';

export default function AdminPage() {
    // Authentication state
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [activeTab, setActiveTab] = useState('students');

    // Sample data for students
    const [students, setStudents] = useState([
        { id: 'HS001', name: 'Nguyễn Văn An', class: '10A1', address: '123 Nguyễn Văn Linh, Quận 7' },
        { id: 'HS002', name: 'Trần Thị Bình', class: '10A2', address: '456 Lê Văn Việt, Quận 9' },
        { id: 'HS003', name: 'Lê Văn Cường', class: '11B1', address: '789 Võ Văn Ngân, Thủ Đức' },
        { id: 'HS004', name: 'Phạm Thị Dung', class: '12C1', address: '321 Điện Biên Phủ, Quận 3' },
    ]);

    // Sample data for drivers
    const [drivers, setDrivers] = useState([
        { id: 'TX001', name: 'Hoàng Văn Mạnh', phone: '0912345678', license: 'B2', bus: 'Xe 01', status: 'active' },
        { id: 'TX002', name: 'Nguyễn Thị Lan', phone: '0987654321', license: 'B2', bus: 'Xe 02', status: 'active' },
        { id: 'TX003', name: 'Trần Văn Hùng', phone: '0909123456', license: 'B2', bus: 'Xe 05', status: 'off' },
    ]);

    // Sample data for buses
    const [buses, setBuses] = useState([
        { id: 'XE01', plateNumber: '29A-12345', seats: 45, status: 'running' },
        { id: 'XE02', plateNumber: '29B-67890', seats: 50, status: 'running' },
        { id: 'XE05', plateNumber: '29C-11111', seats: 45, status: 'stopped' },
        { id: 'XE12', plateNumber: '29D-22222', seats: 40, status: 'maintenance' },
    ]);

    // Sample data for routes
    const [routes, setRoutes] = useState([
        { id: 'R001', name: 'SGU - HCMUTE', distance: '15 km', assignedBus: '', assignedDriver: '' },
        { id: 'R002', name: 'HCMUTE - Đại học Hutech', distance: '12 km', assignedBus: '', assignedDriver: '' },
        { id: 'R003', name: 'SGU - Đại học Bách Khoa', distance: '18 km', assignedBus: '', assignedDriver: '' },
    ]);

    // Sample data for schedules
    const [schedules, setSchedules] = useState([
        { id: 1, route: 'SGU - HCMUTE', bus: 'Xe 01', departure: '06:30', arrival: '07:30', status: 'completed' },
        { id: 2, route: 'HCMUTE - Đại học Hutech', bus: 'Xe 02', departure: '06:45', arrival: '07:45', status: 'running' },
        { id: 3, route: 'SGU - Đại học Bách Khoa', bus: 'Xe 05', departure: '07:00', arrival: '08:00', status: 'scheduled' },
    ]);

    // Modal states
    const [showStudentModal, setShowStudentModal] = useState(false);
    const [showDriverModal, setShowDriverModal] = useState(false);
    const [showBusModal, setShowBusModal] = useState(false);
    const [showRouteModal, setShowRouteModal] = useState(false);
    const [showScheduleModal, setShowScheduleModal] = useState(false);

    // Form data states
    const [studentForm, setStudentForm] = useState({ id: '', name: '', class: '', address: '' });
    const [driverForm, setDriverForm] = useState({ id: '', name: '', phone: '', license: 'B2', bus: '', status: 'active' });
    const [busForm, setBusForm] = useState({ id: '', plateNumber: '', seats: '', status: 'running' });
    const [routeForm, setRouteForm] = useState({ id: '', name: '', distance: '' });
    const [scheduleForm, setScheduleForm] = useState({ id: '', route: '', bus: '', departure: '', arrival: '', status: 'scheduled' });

    // Edit mode states
    const [editingStudent, setEditingStudent] = useState(null);
    const [editingDriver, setEditingDriver] = useState(null);
    const [editingBus, setEditingBus] = useState(null);
    const [editingRoute, setEditingRoute] = useState(null);
    const [editingSchedule, setEditingSchedule] = useState(null);

    // Kiểm tra đăng nhập
    useEffect(() => {
        const userRole = localStorage.getItem('userRole');
        if (userRole === 'admin') {
            setIsAuthenticated(true);
        } else {
            // Chuyển hướng về trang login nếu chưa đăng nhập
            window.location.href = '/login';
        }
    }, []);


    // Add handlers
    const handleAddStudent = () => {
        if (studentForm.name && studentForm.class && studentForm.address) {
            if (editingStudent) {
                // Update existing student
                setStudents(students.map(s => s.id === editingStudent.id ? { ...studentForm, id: editingStudent.id } : s));
                setEditingStudent(null);
            } else {
                // Add new student
                setStudents([...students, { ...studentForm, id: 'HS' + String(students.length + 1).padStart(3, '0') }]);
            }
            setStudentForm({ id: '', name: '', class: '', address: '' });
            setShowStudentModal(false);
        }
    };

    const handleEditStudent = (student) => {
        setEditingStudent(student);
        setStudentForm(student);
        setShowStudentModal(true);
    };

    const handleDeleteStudent = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa học sinh này?')) {
            setStudents(students.filter(s => s.id !== id));
        }
    };

    const handleAddDriver = () => {
        if (driverForm.name && driverForm.phone) {
            if (editingDriver) {
                // Update existing driver
                setDrivers(drivers.map(d => d.id === editingDriver.id ? { ...driverForm, id: editingDriver.id } : d));
                setEditingDriver(null);
            } else {
                // Add new driver
                setDrivers([...drivers, { ...driverForm, id: 'TX' + String(drivers.length + 1).padStart(3, '0') }]);
            }
            setDriverForm({ id: '', name: '', phone: '', license: 'B2', bus: '', status: 'active' });
            setShowDriverModal(false);
        }
    };

    const handleEditDriver = (driver) => {
        setEditingDriver(driver);
        setDriverForm(driver);
        setShowDriverModal(true);
    };

    const handleDeleteDriver = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa tài xế này?')) {
            setDrivers(drivers.filter(d => d.id !== id));
        }
    };

    const handleAddBus = () => {
        if (busForm.id && busForm.plateNumber && busForm.seats) {
            if (editingBus) {
                // Update existing bus
                setBuses(buses.map(b => b.id === editingBus.id ? busForm : b));
                setEditingBus(null);
            } else {
                // Add new bus
                setBuses([...buses, busForm]);
            }
            setBusForm({ id: '', plateNumber: '', seats: '', status: 'running' });
            setShowBusModal(false);
        }
    };

    const handleEditBus = (bus) => {
        setEditingBus(bus);
        setBusForm(bus);
        setShowBusModal(true);
    };

    const handleDeleteBus = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa xe buýt này?')) {
            setBuses(buses.filter(b => b.id !== id));
        }
    };

    const handleAddRoute = () => {
        if (routeForm.id && routeForm.name && routeForm.distance) {
            if (editingRoute) {
                // Update existing route
                setRoutes(routes.map(r => r.id === editingRoute.id ? routeForm : r));
                setEditingRoute(null);
            } else {
                // Add new route
                setRoutes([...routes, routeForm]);
            }
            setRouteForm({ id: '', name: '', distance: '' });
            setShowRouteModal(false);
        }
    };

    const handleEditRoute = (route) => {
        setEditingRoute(route);
        setRouteForm(route);
        setShowRouteModal(true);
    };

    const handleDeleteRoute = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa tuyến đường này?')) {
            setRoutes(routes.filter(r => r.id !== id));
        }
    };

    const handleAddSchedule = () => {
        if (scheduleForm.route && scheduleForm.bus && scheduleForm.departure) {
            if (editingSchedule) {
                // Update existing schedule
                setSchedules(schedules.map(s => s.id === editingSchedule.id ? { ...scheduleForm, id: editingSchedule.id } : s));
                setEditingSchedule(null);
            } else {
                // Add new schedule
                setSchedules([...schedules, { ...scheduleForm, id: schedules.length + 1 }]);
            }
            setScheduleForm({ id: '', route: '', bus: '', departure: '', arrival: '', status: 'scheduled' });
            setShowScheduleModal(false);
        }
    };

    const handleEditSchedule = (schedule) => {
        setEditingSchedule(schedule);
        setScheduleForm(schedule);
        setShowScheduleModal(true);
    };

    const handleDeleteSchedule = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa lịch trình này?')) {
            setSchedules(schedules.filter(s => s.id !== id));
        }
    };

    // Assignment handlers
    const handleAssignBusToRoute = (routeId, busId) => {
        setRoutes(routes.map(route =>
            route.id === routeId ? { ...route, assignedBus: busId } : route
        ));
    };

    const handleAssignDriverToRoute = (routeId, driverId) => {
        setRoutes(routes.map(route =>
            route.id === routeId ? { ...route, assignedDriver: driverId } : route
        ));
    };

    const getStatusBadge = (status) => {
        const statusMap = {
            active: { variant: 'success', text: 'Hoạt động' },
            inactive: { variant: 'secondary', text: 'Không hoạt động' },
            running: { variant: 'success', text: 'Đang chạy' },
            stopped: { variant: 'warning', text: 'Dừng' },
            maintenance: { variant: 'danger', text: 'Bảo trì' },
            off: { variant: 'secondary', text: 'Nghỉ' },
            completed: { variant: 'success', text: 'Hoàn thành' },
            scheduled: { variant: 'info', text: 'Đã lên lịch' },
        };
        return statusMap[status] || { variant: 'secondary', text: status };
    };

    const renderContent = () => {
        switch (activeTab) {

            case 'students':
                return (
                    <>
                        <div className="admin-header mb-4">
                            <h1 className="admin-title">Quản lý học sinh</h1>
                            <p className="admin-subtitle">Danh sách học sinh trong hệ thống</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0"> Danh sách học sinh</h5>
                            <Button variant="primary" size="sm" onClick={() => setShowStudentModal(true)}>+ Thêm học sinh</Button>
                        </div>
                        <Card>
                            <Card.Body>
                                <Table hover className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Mã HS</th>
                                            <th>Họ tên</th>
                                            <th>Lớp</th>
                                            <th>Địa chỉ</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.map((student) => (
                                            <tr key={student.id}>
                                                <td>{student.id}</td>
                                                <td>{student.name}</td>
                                                <td>{student.class}</td>
                                                <td>{student.address}</td>
                                                <td>
                                                    <Button variant="link" size="sm" className="p-0 me-2 text-primary" onClick={() => handleEditStudent(student)}>
                                                        Sửa
                                                    </Button>
                                                    <Button variant="link" size="sm" className="p-0 text-danger" onClick={() => handleDeleteStudent(student.id)}>
                                                        Xóa
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </>
                );

            case 'drivers':
                return (
                    <>
                        <div className="admin-header mb-4">
                            <h1 className="admin-title">Quản lý tài xế</h1>
                            <p className="admin-subtitle">Danh sách tài xế trong hệ thống</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0"> Danh sách tài xế</h5>
                            <Button variant="primary" size="sm" onClick={() => setShowDriverModal(true)}>+ Thêm tài xế</Button>
                        </div>
                        <Card>
                            <Card.Body>
                                <Table hover className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Mã TX</th>
                                            <th>Họ tên</th>
                                            <th>SĐT</th>
                                            <th>Xe phụ trách</th>
                                            <th>Trạng thái</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {drivers.map((driver) => (
                                            <tr key={driver.id}>
                                                <td>{driver.id}</td>
                                                <td>{driver.name}</td>
                                                <td>{driver.phone}</td>
                                                <td>{driver.bus}</td>
                                                <td>
                                                    <Badge bg={getStatusBadge(driver.status).variant}>
                                                        {getStatusBadge(driver.status).text}
                                                    </Badge>
                                                </td>
                                                <td>
                                                    <Button variant="link" size="sm" className="p-0 me-2 text-primary" onClick={() => handleEditDriver(driver)}>
                                                        Sửa
                                                    </Button>
                                                    <Button variant="link" size="sm" className="p-0 text-danger" onClick={() => handleDeleteDriver(driver.id)}>
                                                        Xóa
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </>
                );

            case 'buses':
                return (
                    <>
                        <div className="admin-header mb-4">
                            <h1 className="admin-title">Quản lý xe buýt</h1>
                            <p className="admin-subtitle">Danh sách xe buýt và trạng thái hoạt động</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0"> Danh sách xe buýt</h5>
                            <Button variant="primary" size="sm" onClick={() => setShowBusModal(true)}>+ Thêm xe mới</Button>
                        </div>
                        <Card>
                            <Card.Body>
                                <Table hover className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Mã xe</th>
                                            <th>Biển số</th>
                                            <th>Số ghế</th>
                                            <th>Trạng thái</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {buses.map((bus) => (
                                            <tr key={bus.id}>
                                                <td>{bus.id}</td>
                                                <td><strong>{bus.plateNumber}</strong></td>
                                                <td>{bus.seats}</td>
                                                <td>
                                                    <Badge bg={getStatusBadge(bus.status).variant}>
                                                        {getStatusBadge(bus.status).text}
                                                    </Badge>
                                                </td>
                                                <td>
                                                    <Button variant="link" size="sm" className="p-0 me-2 text-primary" onClick={() => handleEditBus(bus)}>
                                                        Sửa
                                                    </Button>
                                                    <Button variant="link" size="sm" className="p-0 text-danger" onClick={() => handleDeleteBus(bus.id)}>
                                                        Xóa
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </>
                );

            case 'routes':
                return (
                    <>
                        <div className="admin-header mb-4">
                            <h1 className="admin-title">Quản lý tuyến đường</h1>
                            <p className="admin-subtitle">Danh sách các tuyến đường xe buýt</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0"> Tuyến đường</h5>
                            <Button variant="primary" size="sm" onClick={() => setShowRouteModal(true)}>+ Thêm tuyến</Button>
                        </div>
                        <Card>
                            <Card.Body>
                                <Table hover className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Mã tuyến</th>
                                            <th>Tuyến đường</th>
                                            <th>Khoảng cách</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {routes.map((route) => (
                                            <tr key={route.id}>
                                                <td><strong>{route.id}</strong></td>
                                                <td>{route.name}</td>
                                                <td>{route.distance}</td>
                                                <td>
                                                    <Button variant="link" size="sm" className="p-0 me-2 text-primary" onClick={() => handleEditRoute(route)}>
                                                        Sửa
                                                    </Button>
                                                    <Button variant="link" size="sm" className="p-0 text-danger" onClick={() => handleDeleteRoute(route.id)}>
                                                        Xóa
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </>
                );

            case 'assignments':
                return (
                    <>
                        <div className="admin-header mb-4">
                            <h1 className="admin-title">Phân công tài xế và xe buýt</h1>
                            <p className="admin-subtitle">Phân công xe buýt và tài xế cho từng tuyến đường</p>
                        </div>
                        <Card>
                            <Card.Body>
                                <Table hover className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Mã tuyến</th>
                                            <th>Tuyến đường</th>
                                            <th>Khoảng cách</th>
                                            <th>Xe được phân công</th>
                                            <th>Tài xế được phân công</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {routes.map((route) => {
                                            const assignedBusInfo = buses.find(b => b.id === route.assignedBus);
                                            const assignedDriverInfo = drivers.find(d => d.id === route.assignedDriver);

                                            return (
                                                <tr key={route.id}>
                                                    <td><strong>{route.id}</strong></td>
                                                    <td>{route.name}</td>
                                                    <td>{route.distance}</td>
                                                    <td>
                                                        <Form.Select
                                                            size="sm"
                                                            value={route.assignedBus}
                                                            onChange={(e) => handleAssignBusToRoute(route.id, e.target.value)}
                                                            style={{ minWidth: '200px' }}
                                                        >
                                                            <option value="">-- Chọn xe buýt --</option>
                                                            {buses.filter(b => b.status === 'running').map((bus) => (
                                                                <option key={bus.id} value={bus.id}>
                                                                    {bus.plateNumber} ({bus.seats} chỗ)
                                                                </option>
                                                            ))}
                                                        </Form.Select>
                                                        {assignedBusInfo && (
                                                            <div className="mt-1">
                                                                <Badge bg="success">✓ {assignedBusInfo.plateNumber}</Badge>
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <Form.Select
                                                            size="sm"
                                                            value={route.assignedDriver}
                                                            onChange={(e) => handleAssignDriverToRoute(route.id, e.target.value)}
                                                            style={{ minWidth: '200px' }}
                                                        >
                                                            <option value="">-- Chọn tài xế --</option>
                                                            {drivers.filter(d => d.status === 'active').map((driver) => (
                                                                <option key={driver.id} value={driver.id}>
                                                                    {driver.name} - {driver.phone}
                                                                </option>
                                                            ))}
                                                        </Form.Select>
                                                        {assignedDriverInfo && (
                                                            <div className="mt-1">
                                                                <Badge bg="success">✓ {assignedDriverInfo.name}</Badge>
                                                            </div>
                                                        )}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>

                            </Card.Body>
                        </Card>
                    </>
                );

            case 'schedule':
                return (
                    <>
                        <div className="admin-header mb-4">
                            <h1 className="admin-title">Lịch trình</h1>
                            <p className="admin-subtitle">Quản lý lịch trình xe buýt</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0"> Lịch trình tuần/tháng</h5>
                            <Button variant="primary" size="sm" onClick={() => setShowScheduleModal(true)}>+ Tạo lịch trình mới</Button>
                        </div>
                        <Card>
                            <Card.Body>
                                <Table hover className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Tuyến đường</th>
                                            <th>Xe buýt</th>
                                            <th>Giờ xuất phát</th>
                                            <th>Giờ đến dự kiến</th>
                                            <th>Trạng thái</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {schedules.map((schedule) => (
                                            <tr key={schedule.id}>
                                                <td>#{schedule.id}</td>
                                                <td>{schedule.route}</td>
                                                <td>{schedule.bus}</td>
                                                <td>{schedule.departure}</td>
                                                <td>{schedule.arrival}</td>
                                                <td>
                                                    <Badge bg={getStatusBadge(schedule.status).variant}>
                                                        {getStatusBadge(schedule.status).text}
                                                    </Badge>
                                                </td>
                                                <td>
                                                    <Button variant="link" size="sm" className="p-0 me-2" onClick={() => handleEditSchedule(schedule)}>Sửa</Button>
                                                    <Button variant="link" size="sm" className="p-0 text-danger" onClick={() => handleDeleteSchedule(schedule.id)}>Xóa</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </>
                );

            case 'messages':
                return (
                    <>
                        <div className="admin-header mb-4"></div>
                        <h1 className="admin-title">Tin nhắn </h1>
                        <p className="admin-subtitle">Quản lý và phản hồi tin nhắn </p>
                        <div />
                    </>
                );


            case 'tracking':
                return (
                    <>
                        <div className="admin-header mb-4">
                            <h1 className="admin-title">Theo dõi GPS</h1>
                            <p className="admin-subtitle">Vị trí xe buýt thời gian thực</p>
                        </div>

                    </>
                );

            default:
                return null;
        }
    };

    return (
        <>
            <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="admin-content">
                <Container fluid>
                    {renderContent()}
                </Container>
            </div>

            {/* Modal Thêm Học sinh */}
            <Modal show={showStudentModal} onHide={() => { setShowStudentModal(false); setEditingStudent(null); setStudentForm({ id: '', name: '', class: '', address: '' }); }}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingStudent ? 'Sửa thông tin học sinh' : 'Thêm học sinh mới'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Họ và tên <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={studentForm.name || ''}
                                onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Lớp <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={studentForm.class || ''}
                                onChange={(e) => setStudentForm({ ...studentForm, class: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Địa chỉ <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={studentForm.address || ''}
                                onChange={(e) => setStudentForm({ ...studentForm, address: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowStudentModal(false)}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={handleAddStudent}>
                        Thêm học sinh
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Thêm Tài xế */}
            <Modal show={showDriverModal} onHide={() => { setShowDriverModal(false); setEditingDriver(null); setDriverForm({ id: '', name: '', phone: '', license: 'B2', bus: '', status: 'active' }); }}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingDriver ? 'Sửa thông tin tài xế' : 'Thêm tài xế mới'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Họ và tên <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={driverForm.name}
                                onChange={(e) => setDriverForm({ ...driverForm, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Số điện thoại <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder=""
                                value={driverForm.phone}
                                onChange={(e) => setDriverForm({ ...driverForm, phone: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Bằng lái</Form.Label>
                            <Form.Select
                                value={driverForm.license}
                                onChange={(e) => setDriverForm({ ...driverForm, license: e.target.value })}
                            >
                                <option value="B2">B2</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Xe phụ trách</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={driverForm.bus}
                                onChange={(e) => setDriverForm({ ...driverForm, bus: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Trạng thái</Form.Label>
                            <Form.Select
                                value={driverForm.status}
                                onChange={(e) => setDriverForm({ ...driverForm, status: e.target.value })}
                            >
                                <option value="active">Hoạt động</option>
                                <option value="off">Nghỉ</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDriverModal(false)}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={handleAddDriver}>
                        Thêm tài xế
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Thêm Xe buýt */}
            <Modal show={showBusModal} onHide={() => { setShowBusModal(false); setEditingBus(null); setBusForm({ id: '', plateNumber: '', seats: '', status: 'running' }); }}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingBus ? 'Sửa thông tin xe buýt' : 'Thêm xe buýt mới'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Mã xe <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={busForm.id}
                                onChange={(e) => setBusForm({ ...busForm, id: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Biển số <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={busForm.plateNumber}
                                onChange={(e) => setBusForm({ ...busForm, plateNumber: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Số ghế <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="number"
                                placeholder=""
                                value={busForm.seats}
                                onChange={(e) => setBusForm({ ...busForm, seats: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Trạng thái</Form.Label>
                            <Form.Select
                                value={busForm.status}
                                onChange={(e) => setBusForm({ ...busForm, status: e.target.value })}
                            >
                                <option value="running">Đang chạy</option>
                                <option value="stopped">Dừng</option>
                                <option value="maintenance">Bảo trì</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowBusModal(false)}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={handleAddBus}>
                        Thêm xe buýt
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Thêm Tuyến đường */}
            <Modal show={showRouteModal} onHide={() => { setShowRouteModal(false); setEditingRoute(null); setRouteForm({ id: '', name: '', distance: '' }); }}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingRoute ? 'Sửa thông tin tuyến đường' : 'Thêm tuyến đường mới'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Mã tuyến <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={routeForm.id}
                                onChange={(e) => setRouteForm({ ...routeForm, id: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Tuyến đường <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={routeForm.name}
                                onChange={(e) => setRouteForm({ ...routeForm, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Khoảng cách <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={routeForm.distance}
                                onChange={(e) => setRouteForm({ ...routeForm, distance: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowRouteModal(false)}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={handleAddRoute}>
                        Thêm tuyến đường
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Thêm Lịch trình */}
            <Modal show={showScheduleModal} onHide={() => { setShowScheduleModal(false); setEditingSchedule(null); setScheduleForm({ id: '', route: '', bus: '', departure: '', arrival: '', status: 'scheduled' }); }}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingSchedule ? 'Sửa lịch trình' : 'Tạo lịch trình mới'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Tuyến đường <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={scheduleForm.route}
                                onChange={(e) => setScheduleForm({ ...scheduleForm, route: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Xe buýt <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={scheduleForm.bus}
                                onChange={(e) => setScheduleForm({ ...scheduleForm, bus: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Giờ xuất phát <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="time"
                                value={scheduleForm.departure}
                                onChange={(e) => setScheduleForm({ ...scheduleForm, departure: e.target.value })}
                                step="60"
                                pattern="[0-9]{2}:[0-9]{2}"
                                lang="vi"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Giờ đến dự kiến</Form.Label>
                            <Form.Control
                                type="time"
                                value={scheduleForm.arrival}
                                onChange={(e) => setScheduleForm({ ...scheduleForm, arrival: e.target.value })}
                                step="60"
                                pattern="[0-9]{2}:[0-9]{2}"
                                lang="vi"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Trạng thái</Form.Label>
                            <Form.Select
                                value={scheduleForm.status}
                                onChange={(e) => setScheduleForm({ ...scheduleForm, status: e.target.value })}
                            >
                                <option value="scheduled">Đã lên lịch</option>
                                <option value="running">Đang chạy</option>
                                <option value="completed">Hoàn thành</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowScheduleModal(false)}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={handleAddSchedule}>
                        Tạo lịch trình
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

