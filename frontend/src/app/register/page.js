'use client'

import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import Link from 'next/link';
import { authAPI } from '../utils/api';
import '../styles/auth.css';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: 'parent',
        licenseNumber: ''
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

        // Validation
        if (formData.password !== formData.confirmPassword) {
            setError('Mật khẩu xác nhận không khớp');
            return;
        }

        if (formData.password.length < 6) {
            setError('Mật khẩu phải có ít nhất 6 ký tự');
            return;
        }

        setLoading(true);

        try {
            // Gọi API backend để đăng ký
            const registerData = {
                username: formData.username,
                password: formData.password,
                full_name: formData.fullName,
                phone: formData.phone,
                email: formData.email,
                role: formData.role,
                ...(formData.role === 'driver' && formData.licenseNumber && { license_number: formData.licenseNumber })
            };

            await authAPI.register(registerData);

            // Redirect to login page
            alert('Đăng ký thành công! Vui lòng đăng nhập.');
            window.location.href = '/login';
        } catch (err) {
            setError(err.message || 'Đăng ký thất bại. Vui lòng thử lại.');
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <Container>
                <Row className="justify-content-center align-items-center min-vh-100 py-5">
                    <Col md={7} lg={6}>


                        <Card className="auth-card shadow">
                            <Card.Body className="p-4">
                                <h3 className="text-center mb-4">Tạo tài khoản</h3>

                                {error && <Alert variant="danger">{error}</Alert>}

                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Họ và tên </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="fullName"
                                            placeholder="Nhập họ và tên"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            disabled={loading}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Tên đăng nhập </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="username"
                                            placeholder="Nhập tên đăng nhập"
                                            value={formData.username}
                                            onChange={handleChange}
                                            required
                                            disabled={loading}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Số điện thoại </Form.Label>
                                        <Form.Control
                                            type="tel"
                                            name="phone"
                                            placeholder="Nhập số điện thoại"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            disabled={loading}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Vai trò </Form.Label>
                                        <Form.Select
                                            name="role"
                                            value={formData.role}
                                            onChange={handleChange}
                                            required
                                            disabled={loading}
                                        >
                                            <option value="parent">Phụ huynh</option>
                                            <option value="driver">Tài xế</option>
                                        </Form.Select>
                                    </Form.Group>



                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Mật khẩu </Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    placeholder="Nhập mật khẩu"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    required
                                                    disabled={loading}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Xác nhận mật khẩu </Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="confirmPassword"
                                                    placeholder="Nhập lại mật khẩu"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    required
                                                    disabled={loading}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="w-100 mb-3"
                                        disabled={loading}
                                    >
                                        Đăng ký
                                    </Button>


                                    <div className="text-center">
                                        <span className="text-muted">Đã có tài khoản? </span>
                                        <Link href="/login" className="text-decoration-none fw-bold">
                                            Đăng nhập ngay
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
