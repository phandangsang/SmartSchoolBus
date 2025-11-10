'use client'

import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import Footer from './components/footer';
import './styles/home.css';

export default function Home() {
  const stats = [
    { title: 'Xe buýt hoạt động', value: '24', icon: '🚌', color: 'primary' },
    { title: 'Học sinh theo dõi', value: '1,247', icon: '👨‍🎓', color: 'success' },
    { title: 'Tuyến đường', value: '12', icon: '🗺️', color: 'info' },
    { title: 'Cảnh báo hôm nay', value: '3', icon: '⚠️', color: 'warning' }
  ];

  const features = [
    {
      title: 'Theo dõi thời gian thực',
      description: 'Xem vị trí xe buýt trực tiếp trên bản đồ với độ chính xác cao',
      icon: '📍'
    },
    {
      title: 'Thông báo tự động',
      description: 'Nhận cảnh báo khi xe đến điểm đón hoặc có sự cố xảy ra',
      icon: '🔔'
    },
    {
      title: 'Báo cáo chi tiết',
      description: 'Xem lịch sử hành trình, thời gian và phân tích hiệu suất',
      icon: '📊'
    },
    {
      title: 'Quản lý an toàn',
      description: 'Giám sát tốc độ, hành trình và tuân thủ quy định giao thông',
      icon: '🛡️'
    }
  ];

  const recentActivities = [
    { bus: 'Xe 01', status: 'Đang di chuyển', route: 'Tuyến A', time: '2 phút trước', variant: 'success' },
    { bus: 'Xe 05', status: 'Dừng đón học sinh', route: 'Tuyến C', time: '5 phút trước', variant: 'warning' },
    { bus: 'Xe 12', status: 'Hoàn thành', route: 'Tuyến B', time: '15 phút trước', variant: 'secondary' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="hero-title">
                Hệ thống quản lý xe buýt thông minh
              </h1>
              <p className="hero-subtitle">
                Theo dõi vị trí xe buýt trường học theo thời gian thực, đảm bảo an toàn
                và thuận tiện cho học sinh, phụ huynh và nhà trường
              </p>

            </Col>
            <Col lg={6}>

            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <Container>
          <Row className="g-4">
            {stats.map((stat, index) => (
              <Col key={index} xs={6} md={3}>
                <Card className="stat-card text-center h-100">
                  <Card.Body>
                    <div className="stat-icon mb-3">{stat.icon}</div>
                    <h3 className={`stat-value text-${stat.color}`}>{stat.value}</h3>
                    <p className="stat-title mb-0">{stat.title}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title">Tính năng nổi bật</h2>
            <p className="section-subtitle">
              Giải pháp toàn diện cho việc quản lý và theo dõi xe buýt trường học
            </p>
          </div>
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col key={index} md={6} lg={3}>
                <Card className="feature-card h-100">
                  <Card.Body className="text-center">
                    <div className="feature-icon mb-3">{feature.icon}</div>
                    <Card.Title className="feature-title">{feature.title}</Card.Title>
                    <Card.Text className="feature-description">
                      {feature.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>



      {/* Footer */}
      <Footer />
    </div>
  );
}
