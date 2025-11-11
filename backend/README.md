# SmartSchoolBus Backend API

Backend API cho hệ thống theo dõi xe bus học đường được xây dựng với Node.js + Express.

## 🚀 Cài đặt

### 1. Di chuyển vào thư mục backend
```bash
cd backend
```

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Tạo file .env
```bash
cp .env.example .env
```

Chỉnh sửa file `.env` với thông tin của bạn:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/smartschoolbus
NODE_ENV=development
JWT_SECRET=your_secret_key
```

### 4. Chạy server

**Development mode (với nodemon):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server sẽ chạy tại: `http://localhost:5000`

## 📚 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/auth/login`     | Đăng nhập |
| POST   | `/api/auth/register`  | Đăng ký (phụ huynh) |
| GET    | `/api/auth/me`       | Lấy thông tin user hiện tại |

**Login Example:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@smartbus.com","password":"admin123"}'
```

### Bus Routes (`/api/buses`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/buses`               | Lấy tất cả xe bus |
| GET    | `/api/buses/:id`           | Lấy thông tin một xe bus |
| GET    | `/api/buses/:id/location`   | Lấy vị trí xe bus |
| POST   | `/api/buses`               | Tạo xe bus mới |
| PUT    | `/api/buses/:id/location`   | Cập nhật vị trí xe bus |

**Get All Buses Example:**
```bash
curl http://localhost:5000/api/buses
```

### Student Routes (`/api/students`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/students`               | Lấy tất cả học sinh |
| GET    | `/api/students?busId=001`     | Lấy học sinh theo xe bus |
| GET    | `/api/students/:id`           | Lấy thông tin một học sinh |
| POST   | `/api/students`               | Thêm học sinh mới |
| PUT    | `/api/students/:id/status`    | Cập nhật trạng thái học sinh |
| DELETE | `/api/students/:id`           | Xóa học sinh |

**Get Students Example:**
```bash
curl http://localhost:5000/api/students?busId=001
```

## 🔐 Mock Accounts

### Admin Account
- Email: `admin@smartbus.com`
- Password: `admin123`

### Driver Account
- Email: `driver@smartbus.com`
- Password: `driver123`

### Parent Account
- Email: `parent@smartbus.com`
- Password: `parent123`

## 📁 Cấu trúc thư mục

```
backend/
├── routes/
│   ├── authRoutes.js       # Routes xác thực
│   ├── busRoutes.js        # Routes quản lý xe bus
│   └── studentRoutes.js    # Routes quản lý học sinh
├── .env.example            # Template file môi trường
├── .gitignore             # Git ignore file
├── package.json           # Dependencies
├── server.js              # Entry point
└── README.md              # Documentation
```

## 🔜 Tính năng sẽ phát triển

- [ ] Kết nối MongoDB database
- [ ] JWT authentication thật
- [ ] Hash password với bcrypt
- [ ] Real-time tracking với WebSocket
- [ ] Upload ảnh học sinh
- [ ] Gửi thông báo cho phụ huynh
- [ ] Lịch sử di chuyển xe bus
- [ ] Báo cáo và thống kê

## 🛠️ Technologies

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - Database (sẽ tích hợp)
- **Mongoose** - ODM cho MongoDB
- **JWT** - Authentication (sẽ tích hợp)
- **CORS** - Cross-Origin Resource Sharing

## 📝 License

ISC