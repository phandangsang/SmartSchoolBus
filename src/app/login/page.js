'use client'

import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import Link from 'next/link';
import '../styles/auth.css';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Tài khoản admin mặc định
        const ADMIN_ACCOUNT = {
            email: 'admin@smartbus.com',
            password: 'admin123'
        };

        if (!formData.email || !formData.password) {
            setError('Vui lòng điền đầy đủ thông tin');
            return;
        }

        // Kiểm tra tài khoản admin
        if (formData.email === ADMIN_ACCOUNT.email && formData.password === ADMIN_ACCOUNT.password) {
            // Lưu thông tin đăng nhập
            localStorage.setItem('userRole', 'admin');
            localStorage.setItem('userEmail', formData.email);
            localStorage.setItem('userName', 'Admin');

            // Chuyển hướng đến trang admin
            window.location.href = '/admin';
            return;
        }

        // Kiểm tra tài khoản đăng ký
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const user = registeredUsers.find(u => u.email === formData.email && u.password === formData.password);

        if (user) {
            // Lưu thông tin đăng nhập
            localStorage.setItem('userRole', user.role);
            localStorage.setItem('userEmail', user.email);
            localStorage.setItem('userName', user.fullName);

            // Chuyển hướng tùy theo role
            if (user.role === 'driver') {
                window.location.href = '/'; // Hoặc trang driver nếu có
            } else {
                window.location.href = '/'; // Trang phụ huynh
            }
        } else {
            setError('Email hoặc mật khẩu không chính xác!');
        }
    };

    return (
        <div className="auth-page">
            <Container>
                <Row className="justify-content-center align-items-center min-vh-100">
                    <Col md={6} lg={5}>


                        <Card className="auth-card shadow">
                            <Card.Body className="p-4">
                                <h3 className="text-center mb-4">Đăng nhập</h3>


                                {error && <Alert variant="danger">{error}</Alert>}

                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Nhập email của bạn"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Mật khẩu</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            placeholder="Nhập mật khẩu"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <Form.Check
                                            type="checkbox"
                                            name="rememberMe"
                                            label="Ghi nhớ đăng nhập"
                                            checked={formData.rememberMe}
                                            onChange={handleChange}
                                        />
                                        <Link href="/forgot-password" className="text-decoration-none">
                                            Quên mật khẩu?
                                        </Link>
                                    </div>

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="w-100 mb-3"
                                    >
                                        Đăng nhập
                                    </Button>

                                    <div className="text-center">
                                        <span className="text-muted">Chưa có tài khoản? </span>
                                        <Link href="/register" className="text-decoration-none fw-bold">
                                            Đăng ký ngay
                                        </Link>
                                    </div>
                                </Form>


                            </Card.Body>
                        </Card>

                        <div className="text-center mt-4">
                            <Link href="/" className="text-decoration-none text-muted">
                                ← Quay lại trang chủ
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
