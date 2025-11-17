'use client'

import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table, Badge, Modal, Form } from 'react-bootstrap';
import Sidebar from '../components/sidebar';
import { adminAPI } from '../utils/api';
import '../styles/admin.css';

export default function AdminPage() {
    // Authentication state
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [activeTab, setActiveTab] = useState('students');
    const [loading, setLoading] = useState(false);

    // Data states - will be loaded from backend
    const [students, setStudents] = useState([]);
    const [parents, setParents] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [buses, setBuses] = useState([]);
    const [routes, setRoutes] = useState([]);

    // Sample data for schedules
    const [schedules, setSchedules] = useState([
        { id: 1, route: 'SGU - HCMUTE', bus: 'Xe 01', departure: '06:30', arrival: '07:30', status: 'completed' },
        { id: 2, route: 'HCMUTE - Đại học Hutech', bus: 'Xe 02', departure: '06:45', arrival: '07:45', status: 'running' },
        { id: 3, route: 'SGU - Đại học Bách Khoa', bus: 'Xe 05', departure: '07:00', arrival: '08:00', status: 'scheduled' },
    ]);

    // Modal states
    const [showStudentModal, setShowStudentModal] = useState(false);
    const [showParentModal, setShowParentModal] = useState(false);
    const [showDriverModal, setShowDriverModal] = useState(false);
    const [showBusModal, setShowBusModal] = useState(false);
    const [showRouteModal, setShowRouteModal] = useState(false);
    const [showScheduleModal, setShowScheduleModal] = useState(false);

    // Form data states
    const [studentForm, setStudentForm] = useState({ id: '', name: '', class: '', address: '', parent_id: '' });
    const [parentForm, setParentForm] = useState({ id: '', name: '', phone: '', email: '', address: '', username: '', password: '' });
    const [driverForm, setDriverForm] = useState({ id: '', name: '', phone: '', license: 'B2', bus: '', status: 'active', username: '', password: '' });
    const [busForm, setBusForm] = useState({ id: '', plateNumber: '', seats: '', status: 'running' });
    const [routeForm, setRouteForm] = useState({ id: '', name: '', distance: '' });
    const [scheduleForm, setScheduleForm] = useState({ id: '', route: '', bus: '', departure: '', arrival: '', status: 'scheduled' });

    // Edit mode states
    const [editingStudent, setEditingStudent] = useState(null);
    const [editingParent, setEditingParent] = useState(null);
    const [editingDriver, setEditingDriver] = useState(null);
    const [editingBus, setEditingBus] = useState(null);
    const [editingRoute, setEditingRoute] = useState(null);
    const [editingSchedule, setEditingSchedule] = useState(null);

    // Kiểm tra đăng nhập và load data
    useEffect(() => {
        const userRole = localStorage.getItem('userRole');
        if (userRole === 'admin') {
            setIsAuthenticated(true);
            loadStudents();
            loadParents();
            loadDrivers();
            loadBuses();
            loadRoutes();
        } else {
            window.location.href = '/login';
        }
    }, []);

    // Load students from backend
    const loadStudents = async () => {
        try {
            setLoading(true);
            const response = await adminAPI.getStudents();
            if (response.success) {
                // Transform data from backend to match frontend format
                const transformedStudents = response.data.map(s => ({
                    id: s.id,
                    name: s.full_name,
                    class: s.class_name || '',
                    address: s.school_name || '',
                    parent_id: s.parent_id
                }));
                setStudents(transformedStudents);
            }
        } catch (error) {
            console.error('Failed to load students:', error);
        } finally {
            setLoading(false);
        }
    };

    // Load drivers from backend
    const loadDrivers = async () => {
        try {
            const response = await adminAPI.getDrivers();
            if (response.success) {
                const transformedDrivers = response.data.map(d => ({
                    id: d.id,
                    name: d.full_name,
                    phone: d.phone,
                    license: d.license_number || '',
                    status: d.status?.toLowerCase() || 'active',
                    user: d.user // Lưu thông tin user để dùng khi edit
                }));
                setDrivers(transformedDrivers);
            }
        } catch (error) {
            console.error('Failed to load drivers:', error);
        }
    };

    // Load parents from backend
    const loadParents = async () => {
        try {
            const response = await adminAPI.getParents();
            if (response.success) {
                const transformedParents = response.data.map(p => ({
                    id: p.id,
                    name: p.full_name,
                    phone: p.phone,
                    email: p.email || '',
                    address: p.address || '',
                    user: p.user
                }));
                setParents(transformedParents);
            }
        } catch (error) {
            console.error('Failed to load parents:', error);
        }
    };

    // Load buses from backend
    const loadBuses = async () => {
        try {
            const response = await adminAPI.getBuses();
            if (response.success) {
                const transformedBuses = response.data.map(b => ({
                    id: b.id,
                    plateNumber: b.plate_number,
                    seats: b.capacity,
                    status: b.status?.toLowerCase() || 'active'
                }));
                setBuses(transformedBuses);
            }
        } catch (error) {
            console.error('Failed to load buses:', error);
        }
    };

    // Load routes from backend
    const loadRoutes = async () => {
        try {
            const response = await adminAPI.getRoutes();
            if (response.success) {
                const transformedRoutes = response.data.map(r => ({
                    id: r.id,
                    name: r.route_name,
                    distance: r.description || ''
                }));
                setRoutes(transformedRoutes);
            }
        } catch (error) {
            console.error('Failed to load routes:', error);
        }
    };


    // Add handlers
    const handleAddStudent = async () => {
        if (studentForm.name && studentForm.class) {
            try {
                setLoading(true);
                if (!studentForm.parent_id) {
                    alert('Vui lòng chọn phụ huynh cho học sinh');
                    setLoading(false);
                    return;
                }
                if (editingStudent) {
                    // Update existing student
                    const updateData = {
                        full_name: studentForm.name,
                        class_name: studentForm.class,
                        school_name: studentForm.address,
                        parent_id: parseInt(studentForm.parent_id)
                    };
                    await adminAPI.updateStudent(editingStudent.id, updateData);
                    setEditingStudent(null);
                } else {
                    // Add new student
                    const newStudentData = {
                        full_name: studentForm.name,
                        class_name: studentForm.class,
                        school_name: studentForm.address,
                        parent_id: parseInt(studentForm.parent_id)
                    };
                    await adminAPI.createStudent(newStudentData);
                }
                await loadStudents(); // Reload students from backend
                setStudentForm({ id: '', name: '', class: '', address: '', parent_id: '' });
                setShowStudentModal(false);
            } catch (error) {
                console.error('Failed to save student:', error);
                const errorMessage = error.response?.data?.message || error.message || 'Không thể lưu học sinh';
                alert('Lỗi: ' + errorMessage);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleEditStudent = (student) => {
        setEditingStudent(student);
        setStudentForm({ ...student, parent_id: student.parent_id });
        setShowStudentModal(true);
    };

    const handleDeleteStudent = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa học sinh này?')) {
            try {
                setLoading(true);
                await adminAPI.deleteStudent(id);
                await loadStudents(); // Reload students from backend
            } catch (error) {
                console.error('Failed to delete student:', error);
                alert('Lỗi: ' + (error.message || 'Không thể xóa học sinh'));
            } finally {
                setLoading(false);
            }
        }
    };

    const handleAddDriver = async () => {
        if (driverForm.name && driverForm.phone) {
            try {
                setLoading(true);
                if (editingDriver) {
                    const updateData = {
                        full_name: driverForm.name,
                        phone: driverForm.phone,
                        license_number: driverForm.license,
                        status: driverForm.status?.toUpperCase() || 'ACTIVE'
                    };
                    // Nếu có password mới, thêm vào data để cập nhật
                    if (driverForm.password) {
                        updateData.password = driverForm.password;
                    }
                    await adminAPI.updateDriver(editingDriver.id, updateData);
                    setEditingDriver(null);
                } else {
                    // Tạo mới driver với tài khoản
                    if (!driverForm.username || !driverForm.password) {
                        alert('Vui lòng nhập tên đăng nhập và mật khẩu');
                        setLoading(false);
                        return;
                    }
                    const newDriverData = {
                        username: driverForm.username,
                        password: driverForm.password,
                        full_name: driverForm.name,
                        phone: driverForm.phone,
                        license_number: driverForm.license,
                        role: 'DRIVER'
                    };
                    await adminAPI.createUser(newDriverData);
                }
                await loadDrivers();
                setDriverForm({ id: '', name: '', phone: '', license: 'B2', bus: '', status: 'active', username: '', password: '' });
                setShowDriverModal(false);
            } catch (error) {
                console.error('Failed to save driver:', error);
                const errorMessage = error.response?.data?.message || error.message || 'Không thể lưu tài xế';
                alert('Lỗi: ' + errorMessage);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleEditDriver = (driver) => {
        setEditingDriver(driver);
        setDriverForm({
            ...driver,
            username: driver.user?.username || '',
            password: '' // Reset password field khi edit
        });
        setShowDriverModal(true);
    };

    const handleDeleteDriver = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa tài xế này?')) {
            try {
                setLoading(true);
                await adminAPI.deleteDriver(id);
                await loadDrivers();
            } catch (error) {
                console.error('Failed to delete driver:', error);
                alert('Lỗi: ' + (error.message || 'Không thể xóa tài xế'));
            } finally {
                setLoading(false);
            }
        }
    };

    // Parent handlers
    const handleAddParent = async () => {
        if (parentForm.name && parentForm.phone) {
            try {
                setLoading(true);
                if (editingParent) {
                    const updateData = {
                        full_name: parentForm.name,
                        phone: parentForm.phone,
                        email: parentForm.email,
                        address: parentForm.address
                    };
                    // Nếu có password mới, thêm vào data để cập nhật
                    if (parentForm.password) {
                        updateData.password = parentForm.password;
                    }
                    await adminAPI.updateParent(editingParent.id, updateData);
                    setEditingParent(null);
                } else {
                    // Tạo mới parent với tài khoản
                    if (!parentForm.username || !parentForm.password) {
                        alert('Vui lòng nhập tên đăng nhập và mật khẩu');
                        setLoading(false);
                        return;
                    }
                    const newParentData = {
                        username: parentForm.username,
                        password: parentForm.password,
                        full_name: parentForm.name,
                        phone: parentForm.phone,
                        email: parentForm.email,
                        address: parentForm.address,
                        role: 'PARENT'
                    };
                    await adminAPI.createUser(newParentData);
                }
                await loadParents();
                setParentForm({ id: '', name: '', phone: '', email: '', address: '', username: '', password: '' });
                setShowParentModal(false);
            } catch (error) {
                console.error('Failed to save parent:', error);
                const errorMessage = error.response?.data?.message || error.message || 'Không thể lưu phụ huynh';
                alert('Lỗi: ' + errorMessage);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleEditParent = (parent) => {
        setEditingParent(parent);
        setParentForm({
            ...parent,
            username: parent.user?.username || '',
            password: '' // Reset password field khi edit
        });
        setShowParentModal(true);
    };

    const handleDeleteParent = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa phụ huynh này?')) {
            try {
                setLoading(true);
                await adminAPI.deleteParent(id);
                await loadParents();
            } catch (error) {
                console.error('Failed to delete parent:', error);
                alert('Lỗi: ' + (error.message || 'Không thể xóa phụ huynh'));
            } finally {
                setLoading(false);
            }
        }
    };

    const handleAddBus = async () => {
        if (busForm.plateNumber && busForm.seats) {
            try {
                setLoading(true);
                if (editingBus) {
                    const updateData = {
                        plate_number: busForm.plateNumber,
                        capacity: parseInt(busForm.seats),
                        status: busForm.status
                    };
                    await adminAPI.updateBus(editingBus.id, updateData);
                    setEditingBus(null);
                } else {
                    const newBusData = {
                        plate_number: busForm.plateNumber,
                        capacity: parseInt(busForm.seats),
                        status: busForm.status
                    };
                    await adminAPI.createBus(newBusData);
                }
                await loadBuses();
                setBusForm({ id: '', plateNumber: '', seats: '', status: 'running' });
                setShowBusModal(false);
            } catch (error) {
                console.error('Failed to save bus:', error);
                alert('Lỗi: ' + (error.message || 'Không thể lưu xe buýt'));
            } finally {
                setLoading(false);
            }
        }
    };

    const handleEditBus = (bus) => {
        setEditingBus(bus);
        setBusForm(bus);
        setShowBusModal(true);
    };

    const handleDeleteBus = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa xe buýt này?')) {
            try {
                setLoading(true);
                await adminAPI.deleteBus(id);
                await loadBuses();
            } catch (error) {
                console.error('Failed to delete bus:', error);
                alert('Lỗi: ' + (error.message || 'Không thể xóa xe buýt'));
            } finally {
                setLoading(false);
            }
        }
    };

    const handleAddRoute = async () => {
        if (routeForm.name) {
            try {
                setLoading(true);
                if (editingRoute) {
                    const updateData = {
                        route_name: routeForm.name,
                        description: routeForm.distance
                    };
                    await adminAPI.updateRoute(editingRoute.id, updateData);
                    setEditingRoute(null);
                } else {
                    const newRouteData = {
                        route_name: routeForm.name,
                        description: routeForm.distance
                    };
                    await adminAPI.createRoute(newRouteData);
                }
                await loadRoutes();
                setRouteForm({ id: '', name: '', distance: '' });
                setShowRouteModal(false);
            } catch (error) {
                console.error('Failed to save route:', error);
                alert('Lỗi: ' + (error.message || 'Không thể lưu tuyến đường'));
            } finally {
                setLoading(false);
            }
        }
    };

    const handleEditRoute = (route) => {
        setEditingRoute(route);
        setRouteForm(route);
        setShowRouteModal(true);
    };

    const handleDeleteRoute = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa tuyến đường này?')) {
            try {
                setLoading(true);
                await adminAPI.deleteRoute(id);
                await loadRoutes();
            } catch (error) {
                console.error('Failed to delete route:', error);
                alert('Lỗi: ' + (error.message || 'Không thể xóa tuyến đường'));
            } finally {
                setLoading(false);
            }
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

            case 'parents':
                return (
                    <>
                        <div className="admin-header mb-4">
                            <h1 className="admin-title">Quản lý phụ huynh</h1>
                            <p className="admin-subtitle">Danh sách phụ huynh trong hệ thống</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0">Danh sách phụ huynh</h5>
                            <Button variant="primary" size="sm" onClick={() => setShowParentModal(true)}>+ Thêm phụ huynh</Button>
                        </div>
                        <Card>
                            <Card.Body>
                                <Table hover className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Mã PH</th>
                                            <th>Họ tên</th>
                                            <th>SĐT</th>
                                            <th>Email</th>
                                            <th>Địa chỉ</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {parents.map((parent) => (
                                            <tr key={parent.id}>
                                                <td>{parent.id}</td>
                                                <td>{parent.name}</td>
                                                <td>{parent.phone}</td>
                                                <td>{parent.email}</td>
                                                <td>{parent.address}</td>
                                                <td>
                                                    <Button variant="link" size="sm" className="p-0 me-2 text-primary" onClick={() => handleEditParent(parent)}>
                                                        Sửa
                                                    </Button>
                                                    <Button variant="link" size="sm" className="p-0 text-danger" onClick={() => handleDeleteParent(parent.id)}>
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
            <Modal show={showStudentModal} onHide={() => { setShowStudentModal(false); setEditingStudent(null); setStudentForm({ id: '', name: '', class: '', address: '', parent_id: '' }); }}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingStudent ? 'Sửa thông tin học sinh' : 'Thêm học sinh mới'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Họ và tên </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập họ tên học sinh"
                                value={studentForm.name || ''}
                                onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Lớp </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={studentForm.class || ''}
                                onChange={(e) => setStudentForm({ ...studentForm, class: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Trường</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={studentForm.address || ''}
                                onChange={(e) => setStudentForm({ ...studentForm, address: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phụ huynh </Form.Label>
                            <Form.Select
                                value={studentForm.parent_id || ''}
                                onChange={(e) => setStudentForm({ ...studentForm, parent_id: e.target.value })}
                            >
                                <option value="">Chọn phụ huynh</option>
                                {parents.map((parent) => (
                                    <option key={parent.id} value={parent.id}>
                                        {parent.name} - {parent.phone}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowStudentModal(false)}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={handleAddStudent}>
                        {editingStudent ? 'Cập nhật' : 'Thêm học sinh'}
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Thêm Tài xế */}
            <Modal show={showDriverModal} onHide={() => { setShowDriverModal(false); setEditingDriver(null); setDriverForm({ id: '', name: '', phone: '', license: 'B2', bus: '', status: 'active', username: '', password: '' }); }}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingDriver ? 'Sửa thông tin tài xế' : 'Thêm tài xế mới'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Tên đăng nhập </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập tên đăng nhập"
                                value={driverForm.username}
                                onChange={(e) => setDriverForm({ ...driverForm, username: e.target.value })}
                                disabled={editingDriver}
                            />
                            {editingDriver && <Form.Text className="text-muted"></Form.Text>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mật khẩu </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder={editingDriver ? "" : ""}
                                value={driverForm.password}
                                onChange={(e) => setDriverForm({ ...driverForm, password: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Họ và tên
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={driverForm.name}
                                onChange={(e) => setDriverForm({ ...driverForm, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Số điện thoại </Form.Label>
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
                        {editingDriver ? 'Cập nhật' : 'Thêm tài xế'}
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Thêm Phụ huynh */}
            <Modal show={showParentModal} onHide={() => { setShowParentModal(false); setEditingParent(null); setParentForm({ id: '', name: '', phone: '', email: '', address: '', username: '', password: '' }); }}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingParent ? 'Sửa thông tin phụ huynh' : 'Thêm phụ huynh mới'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Tên đăng nhập
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập tên đăng nhập"
                                value={parentForm.username}
                                onChange={(e) => setParentForm({ ...parentForm, username: e.target.value })}
                                disabled={editingParent}
                            />
                            {editingParent && <Form.Text className="text-muted"></Form.Text>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mật khẩu {!editingParent}</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder={editingParent ? "" : ""}
                                value={parentForm.password}
                                onChange={(e) => setParentForm({ ...parentForm, password: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Họ và tên </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={parentForm.name}
                                onChange={(e) => setParentForm({ ...parentForm, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Số điện thoại </Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder=""
                                value={parentForm.phone}
                                onChange={(e) => setParentForm({ ...parentForm, phone: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder=""
                                value={parentForm.email}
                                onChange={(e) => setParentForm({ ...parentForm, email: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={parentForm.address}
                                onChange={(e) => setParentForm({ ...parentForm, address: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowParentModal(false)}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={handleAddParent}>
                        {editingParent ? 'Cập nhật' : 'Thêm phụ huynh'}
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
                            <Form.Label>Mã xe </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={busForm.id}
                                onChange={(e) => setBusForm({ ...busForm, id: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Biển số </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={busForm.plateNumber}
                                onChange={(e) => setBusForm({ ...busForm, plateNumber: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Số ghế </Form.Label>
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
                            <Form.Label>Mã tuyến </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={routeForm.id}
                                onChange={(e) => setRouteForm({ ...routeForm, id: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Tuyến đường </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={routeForm.name}
                                onChange={(e) => setRouteForm({ ...routeForm, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Khoảng cách </Form.Label>
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
                            <Form.Label>Tuyến đường </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={scheduleForm.route}
                                onChange={(e) => setScheduleForm({ ...scheduleForm, route: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Xe buýt </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={scheduleForm.bus}
                                onChange={(e) => setScheduleForm({ ...scheduleForm, bus: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Giờ xuất phát </Form.Label>
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

