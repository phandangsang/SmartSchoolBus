'use client'

import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import Link from 'next/link';
import '../styles/auth.css';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: 'parent',
        agreeTerms: false
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

        // Simulate API call
        setTimeout(() => {
            // Lưu tài khoản mới vào localStorage
            const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

            // Kiểm tra email đã tồn tại chưa
            const emailExists = existingUsers.some(user => user.email === formData.email);
            if (emailExists) {
                setError('Email này đã được đăng ký!');
                setLoading(false);
                return;
            }

            // Thêm user mới
            const newUser = {
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                password: formData.password,
                role: formData.role
            };
            existingUsers.push(newUser);
            localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));

            // Redirect to login page
            alert('Đăng ký thành công! Vui lòng đăng nhập.');
            window.location.href = '/login';
            setLoading(false);
        }, 1000);
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
                                        <Form.Label>Họ và tên <span className="text-danger">*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="fullName"
                                            placeholder="Nhập họ và tên"
                                            // autoComplete="off"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    placeholder="Nhập email"
                                                    // autoComplete="off"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Số điện thoại <span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Nhập số điện thoại"
                                                    // autoComplete="off"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Vai trò <span className="text-danger">*</span></Form.Label>
                                        <Form.Select
                                            name="role"
                                            value={formData.role}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="parent">Phụ huynh</option>
                                            <option value="driver">Tài xế</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Mật khẩu <span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    // autoComplete="off"
                                                    placeholder="Nhập mật khẩu"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Xác nhận mật khẩu <span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    name="confirmPassword"
                                                    // autoComplete="off"
                                                    placeholder="Nhập lại mật khẩu"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>


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
