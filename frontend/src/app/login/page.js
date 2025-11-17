'use client'

import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import Link from 'next/link';
import { authAPI } from '../utils/api';
import '../styles/auth.css';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        username: '',
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
        setLoading(true);

        if (!formData.username || !formData.password) {
            setError('Vui lòng điền đầy đủ thông tin');
            setLoading(false);
            return;
        }

        try {
            // Gọi API backend để đăng nhập
            const response = await authAPI.login(formData.username, formData.password);

            // Chuyển hướng tùy theo role
            const role = response.user.role.toLowerCase();
            if (role === 'admin') {
                window.location.href = '/admin';
            } else if (role === 'driver') {
                window.location.href = '/driver';
            } else if (role === 'parent') {
                window.location.href = '/parent';
            } else {
                window.location.href = '/';
            }
        } catch (err) {
            setError(err.message || 'Tên đăng nhập hoặc mật khẩu không chính xác!');
            setLoading(false);
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
                                        <Form.Label>Tên đăng nhập</Form.Label>
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
                                        <Form.Label>Mật khẩu</Form.Label>
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
                                        disabled={loading}
                                    >
                                        Đăng nhập
                                    </Button>
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
