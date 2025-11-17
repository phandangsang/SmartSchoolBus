# 🚌 Smart School Bus Tracking System

Hệ thống theo dõi xe buýt trường học với GPS tracking real-time, quản lý tài xế, phụ huynh và học sinh.

## 🎯 Tính năng chính

- 🔐 **Authentication & Authorization**: JWT-based với 3 roles (Admin, Driver, Parent)
- 📍 **GPS Tracking**: Theo dõi vị trí xe buýt real-time
- 👨‍💼 **Admin Dashboard**: Quản lý users, xe buýt, tuyến đường, thống kê
- 🚗 **Driver Portal**: Cập nhật vị trí, xem tuyến đường, danh sách học sinh
- 👨‍👩‍👧 **Parent Portal**: Theo dõi vị trí xe con em, quản lý thông tin học sinh

## 🏗️ Kiến trúc hệ thống

```
smart-school-bus-tracking-system/
├── frontend/          # Next.js 14 (React)
│   ├── src/app/
│   │   ├── admin/     # Admin dashboard
│   │   ├── driver/    # Driver portal
│   │   ├── parent/    # Parent portal
│   │   ├── login/     # Login page
│   │   └── register/  # Register page
│   └── package.json
│
└── backend/           # Python Flask API
    ├── app/
    │   ├── models/    # Database models
    │   ├── routes/    # API endpoints
    │   └── utils/     # Helper functions
    ├── config/        # Configuration
    ├── app.py         # Main application
    └── requirements.txt
```

## 🚀 Công nghệ sử dụng

### Frontend
- **Framework**: Next.js 14 (React 18)
- **Styling**: CSS Modules
- **HTTP Client**: Fetch API
- **Routing**: Next.js App Router

### Backend
- **Framework**: Flask 3.0
- **Database**: SQLAlchemy (SQLite/MySQL/PostgreSQL)
- **Authentication**: JWT (Flask-JWT-Extended)
- **Password Hashing**: Bcrypt
- **CORS**: Flask-CORS
- **Migration**: Flask-Migrate

## 📦 Cài đặt & Chạy dự án

### 🔧 Yêu cầu hệ thống

- Node.js 18+ 
- Python 3.9+
- pip (Python package manager)
- npm/yarn/pnpm

---

## 🎨 Frontend Setup

### 1. Di chuyển vào thư mục frontend

```bash
cd frontend
```

### 2. Cài đặt dependencies

```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

### 3. Chạy development server

```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

Frontend sẽ chạy tại: **http://localhost:3000**

### 4. Build cho production

```bash
npm run build
npm start
```

---

## 🐍 Backend Setup

### 1. Di chuyển vào thư mục backend

```bash
cd backend
```

### 2. Tạo môi trường ảo (Virtual Environment)

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

### 3. Cài đặt dependencies

```bash
pip install -r requirements.txt
```

### 4. Cấu hình môi trường

Sao chép file `.env.example` thành `.env`:

```bash
# Windows
copy .env.example .env

# Linux/Mac
cp .env.example .env
```

Chỉnh sửa file `.env`:

```env
# Flask Configuration
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=your-secret-key-here
JWT_SECRET_KEY=your-jwt-secret-key-here

# Database Configuration
DATABASE_URL=sqlite:///smartbus.db

# CORS Configuration
CORS_ORIGINS=http://localhost:3000

# Application Settings
DEBUG=True
PORT=5000
HOST=0.0.0.0
```

### 5. Khởi tạo database

```bash
python init_db.py
```

Lệnh này sẽ tạo database và tài khoản admin mặc định:
- **tendangnhap**: `admin`
- **Password**: `123456`

### 6. Chạy backend server

```bash
python app.py
```

Backend API sẽ chạy tại: **http://localhost:5000**

---

## 🌐 Truy cập ứng dụng

| Service | URL | Mô tả |
|---------|-----|-------|
| Frontend | http://localhost:3000 | Giao diện người dùng |
| Backend API | http://localhost:5000 | REST API |
| API Health Check | http://localhost:5000/health | Kiểm tra trạng thái API |

### 🔑 Tài khoản mặc định

**Admin:**
- Email: `admin@smartbus.com`
- Password: `admin123`

---

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Đăng ký tài khoản mới |
| POST | `/api/auth/login` | Đăng nhập |
| GET | `/api/auth/me` | Lấy thông tin user hiện tại |
| POST | `/api/auth/change-password` | Đổi mật khẩu |

### Admin Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/users` | Lấy danh sách users |
| GET | `/api/admin/users/:id` | Lấy chi tiết user |
| PUT | `/api/admin/users/:id` | Cập nhật user |
| DELETE | `/api/admin/users/:id` | Xóa user |
| GET | `/api/admin/buses` | Lấy danh sách xe buýt |
| POST | `/api/admin/buses` | Tạo xe buýt mới |
| PUT | `/api/admin/buses/:id` | Cập nhật xe buýt |
| DELETE | `/api/admin/buses/:id` | Xóa xe buýt |
| GET | `/api/admin/routes` | Lấy danh sách tuyến đường |
| POST | `/api/admin/routes` | Tạo tuyến đường mới |
| GET | `/api/admin/statistics` | Lấy thống kê hệ thống |

### Driver Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/driver/profile` | Lấy thông tin driver |
| GET | `/api/driver/assigned-bus` | Lấy xe được phân công |
| POST | `/api/driver/update-location` | Cập nhật vị trí GPS |
| GET | `/api/driver/students` | Lấy danh sách học sinh |
| GET | `/api/driver/route` | Lấy thông tin tuyến đường |

### Parent Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/parent/profile` | Lấy thông tin phụ huynh |
| GET | `/api/parent/students` | Lấy danh sách con em |
| POST | `/api/parent/students` | Thêm con mới |
| PUT | `/api/parent/students/:id` | Cập nhật thông tin con |
| GET | `/api/parent/bus-location/:bus_id` | Theo dõi vị trí xe |

### 🔐 Authentication

API sử dụng JWT tokens. Sau khi login, gửi token trong header:

```
Authorization: Bearer <your-token>
```

### 📝 Ví dụ API Request

```javascript
// Login
const response = await fetch('http://localhost:5000/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'admin@smartbus.com',
    password: 'admin123'
  })
});

const { data } = await response.json();
const token = data.token;

// Use token for authenticated requests
const users = await fetch('http://localhost:5000/api/admin/users', {
  headers: { 'Authorization': `Bearer ${token}` }
});
```

---

## 📊 Database Schema

### Tables

- **users**: Thông tin người dùng (admin, driver, parent)
- **drivers**: Thông tin tài xế
- **parents**: Thông tin phụ huynh
- **students**: Thông tin học sinh
- **buses**: Thông tin xe buýt
- **routes**: Tuyến đường
- **locations**: Điểm dừng
- **bus_tracking**: Lịch sử GPS tracking

---

## 🔧 Troubleshooting

### Frontend Issues

**Port 3000 đã được sử dụng:**
```bash
# Thay đổi port
PORT=3001 npm run dev
```

**Module not found:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Backend Issues

**Module not found:**
```bash
pip install -r requirements.txt
```

**Database error:**
```bash
python init_db.py
```

**Port 5000 đã được sử dụng:**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5000 | xargs kill -9
```

---

## 📋 Future Improvements

- [ ] WebSocket cho real-time tracking
- [ ] Push notifications
- [ ] Mobile app (React Native)
- [ ] Email notifications
- [ ] SMS alerts
- [ ] Advanced analytics dashboard
- [ ] Attendance tracking
- [ ] Route optimization
- [ ] Multi-language support
- [ ] Dark mode

---

## 👥 Team & Support

**Developer**: Smart School Bus Team  
**Contact**: support@smartbus.com  
**GitHub**: [SmartSchoolBus](https://github.com/phandangsang/SmartSchoolBus)

---

## 📄 License

MIT License - Copyright (c) 2025 Smart School Bus Team
