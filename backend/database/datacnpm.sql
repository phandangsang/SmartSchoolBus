CREATE DATABASE SmartSchoolBusDB;
GO
USE SmartSchoolBusDB;
GO
-- Tạo database ()
CREATE DATABASE SmartSchoolBusDB;
GO

USE SmartSchoolBusDB;
GO

/* ============================
   1. USERS (Tài khoản hệ thống)
   ============================ */
CREATE TABLE Users (
    UserID          INT IDENTITY(1,1) PRIMARY KEY,
    Username        NVARCHAR(50) NOT NULL UNIQUE,
    PasswordHash    NVARCHAR(255) NOT NULL,
    FullName        NVARCHAR(100) NOT NULL,
    Phone           NVARCHAR(20),
    Email           NVARCHAR(100),
    Role            NVARCHAR(20) NOT NULL, -- 'ADMIN', 'DRIVER', 'PARENT'
    IsActive        BIT NOT NULL DEFAULT 1,
    CreatedAt       DATETIME2 NOT NULL DEFAULT SYSDATETIME()
);

/* ============================
   2. PARENTS (Phụ huynh)
   ============================ */
CREATE TABLE Parents (
    ParentID        INT IDENTITY(1,1) PRIMARY KEY,
    UserID          INT UNIQUE, -- Liên kết 1-1 với Users (Role = 'PARENT')
    FullName        NVARCHAR(100) NOT NULL,
    Phone           NVARCHAR(20) NOT NULL,
    Email           NVARCHAR(100),
    Address         NVARCHAR(255),
    CONSTRAINT FK_Parents_Users
        FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

/* ============================
   3. STUDENTS (Học sinh)
   ============================ */
CREATE TABLE Students (
    StudentID       INT IDENTITY(1,1) PRIMARY KEY,
    FullName        NVARCHAR(100) NOT NULL,
    DateOfBirth     DATE,
    ClassName       NVARCHAR(50),   -- Lớp: 5A1, 6B2, ...
    SchoolName      NVARCHAR(100) DEFAULT N'Trường DEF',
    ParentID        INT NOT NULL,
    IsActive        BIT NOT NULL DEFAULT 1,
    CONSTRAINT FK_Students_Parents
        FOREIGN KEY (ParentID) REFERENCES Parents(ParentID)
);

/* ============================
   4. DRIVERS (Tài xế)
   ============================ */
CREATE TABLE Drivers (
    DriverID        INT IDENTITY(1,1) PRIMARY KEY,
    UserID          INT UNIQUE, -- Liên kết 1-1 với Users (Role = 'DRIVER')
    FullName        NVARCHAR(100) NOT NULL,
    Phone           NVARCHAR(20) NOT NULL,
    LicenseNumber   NVARCHAR(50),
    Status          NVARCHAR(20) NOT NULL DEFAULT N'ACTIVE', -- ACTIVE, INACTIVE
    CONSTRAINT FK_Drivers_Users
        FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

/* ============================
   5. BUSES (Xe buýt)
   ============================ */
CREATE TABLE Buses (
    BusID           INT IDENTITY(1,1) PRIMARY KEY,
    PlateNumber     NVARCHAR(20) NOT NULL UNIQUE,
    Capacity        INT NOT NULL,
    Model           NVARCHAR(50),
    Status          NVARCHAR(20) NOT NULL DEFAULT N'ACTIVE', -- ACTIVE, MAINTENANCE
    Note            NVARCHAR(255)
);

/* ============================
   6. ROUTES (Tuyến đường)
   ============================ */
CREATE TABLE Routes (
    RouteID         INT IDENTITY(1,1) PRIMARY KEY,
    RouteName       NVARCHAR(100) NOT NULL, -- Ví dụ: Tuyến Q1 - Q7
    Description     NVARCHAR(255),
    Status          NVARCHAR(20) NOT NULL DEFAULT N'ACTIVE'
);

/* ============================
   7. ROUTE STOPS (Điểm dừng trên tuyến)
   ============================ */
CREATE TABLE RouteStops (
    StopID          INT IDENTITY(1,1) PRIMARY KEY,
    RouteID         INT NOT NULL,
    StopName        NVARCHAR(100) NOT NULL,
    Latitude        DECIMAL(9,6) NOT NULL,
    Longitude       DECIMAL(9,6) NOT NULL,
    StopOrder       INT NOT NULL,      -- Thứ tự điểm dừng trên tuyến
    ExpectedTime    TIME NULL,         -- Giờ dự kiến xe đi qua
    CONSTRAINT FK_RouteStops_Routes
        FOREIGN KEY (RouteID) REFERENCES Routes(RouteID)
);

/* ============================
   8. TRIPS (Lịch trình chuyến xe)
   ============================ */
CREATE TABLE Trips (
    TripID          INT IDENTITY(1,1) PRIMARY KEY,
    RouteID         INT NOT NULL,
    BusID           INT NOT NULL,
    DriverID        INT NOT NULL,
    TripDate        DATE NOT NULL,
    StartTime       TIME NOT NULL,      -- Giờ xuất phát dự kiến
    EndTime         TIME NULL,          -- Giờ kết thúc dự kiến
    Direction       NVARCHAR(20) NOT NULL DEFAULT N'GO', 
        -- GO: đến đón trường, RETURN: trở về
    Status          NVARCHAR(20) NOT NULL DEFAULT N'SCHEDULED',
        -- SCHEDULED, IN_PROGRESS, COMPLETED, CANCELLED
    CreatedAt       DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    CONSTRAINT FK_Trips_Routes
        FOREIGN KEY (RouteID) REFERENCES Routes(RouteID),
    CONSTRAINT FK_Trips_Buses
        FOREIGN KEY (BusID) REFERENCES Buses(BusID),
    CONSTRAINT FK_Trips_Drivers
        FOREIGN KEY (DriverID) REFERENCES Drivers(DriverID)
);

/* ============================================
   9. TRIP STUDENTS (Học sinh trên mỗi chuyến)
   ============================================ */
CREATE TABLE TripStudents (
    TripStudentID   INT IDENTITY(1,1) PRIMARY KEY,
    TripID          INT NOT NULL,
    StudentID       INT NOT NULL,
    PickupStopID    INT NOT NULL,  -- Điểm đón
    DropoffStopID   INT NOT NULL,  -- Điểm trả
    IsActive        BIT NOT NULL DEFAULT 1,
    CONSTRAINT FK_TripStudents_Trips
        FOREIGN KEY (TripID) REFERENCES Trips(TripID),
    CONSTRAINT FK_TripStudents_Students
        FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    CONSTRAINT FK_TripStudents_PickupStop
        FOREIGN KEY (PickupStopID) REFERENCES RouteStops(StopID),
    CONSTRAINT FK_TripStudents_DropoffStop
        FOREIGN KEY (DropoffStopID) REFERENCES RouteStops(StopID)
);

/* ============================================
   10. TRIP EVENTS (Sự kiện đón / trả học sinh)
   ============================================ */
CREATE TABLE TripEvents (
    EventID         INT IDENTITY(1,1) PRIMARY KEY,
    TripID          INT NOT NULL,
    StudentID       INT NOT NULL,
    EventType       NVARCHAR(20) NOT NULL, -- PICKUP, DROPOFF
    EventTime       DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    Status          NVARCHAR(20) NOT NULL DEFAULT N'SUCCESS',
        -- SUCCESS, ABSENT, CANCELLED
    Note            NVARCHAR(255),
    CONSTRAINT FK_TripEvents_Trips
        FOREIGN KEY (TripID) REFERENCES Trips(TripID),
    CONSTRAINT FK_TripEvents_Students
        FOREIGN KEY (StudentID) REFERENCES Students(StudentID)
);

/* ============================================
   11. BUS LOCATIONS (Vị trí xe theo thời gian thực)
   ============================================ */
CREATE TABLE BusLocations (
    LocationID      BIGINT IDENTITY(1,1) PRIMARY KEY,
    TripID          INT NULL, -- Có thể null nếu chỉ tracking xe, không gần chuyến
    BusID           INT NOT NULL,
    RecordedAt      DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    Latitude        DECIMAL(9,6) NOT NULL,
    Longitude       DECIMAL(9,6) NOT NULL,
    Speed           DECIMAL(5,2) NULL,  -- km/h
    Heading         DECIMAL(5,2) NULL,  -- H??ng
    CONSTRAINT FK_BusLocations_Trips
        FOREIGN KEY (TripID) REFERENCES Trips(TripID),
    CONSTRAINT FK_BusLocations_Buses
        FOREIGN KEY (BusID) REFERENCES Buses(BusID)
);

/* ============================================
   12. NOTIFICATIONS (Thông báo cho phụ huynh / tài xế)
   ============================================ */
CREATE TABLE Notifications (
    NotificationID  INT IDENTITY(1,1) PRIMARY KEY,
    UserID          INT NOT NULL, -- Người nhận
    Type            NVARCHAR(50) NOT NULL, 
        -- BUS_NEAR, BUS_LATE, INCIDENT, GENERAL
    Title           NVARCHAR(100) NOT NULL,
    Content         NVARCHAR(500) NOT NULL,
    CreatedAt       DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    ReadAt          DATETIME2 NULL,
    RelatedTripID   INT NULL,
    RelatedStudentID INT NULL,
    CONSTRAINT FK_Notifications_Users
        FOREIGN KEY (UserID) REFERENCES Users(UserID),
    CONSTRAINT FK_Notifications_Trips
        FOREIGN KEY (RelatedTripID) REFERENCES Trips(TripID),
    CONSTRAINT FK_Notifications_Students
        FOREIGN KEY (RelatedStudentID) REFERENCES Students(StudentID)
);

/* ============================================
   13. MESSAGES (Nhắn tin quản lý tới tài xế và phụ huynh)
   ============================================ */
CREATE TABLE Messages (
    MessageID       INT IDENTITY(1,1) PRIMARY KEY,
    FromUserID      INT NOT NULL,
    ToUserID        INT NOT NULL,
    SentAt          DATETIME2 NOT NULL DEFAULT SYSDATETIME(),
    Content         NVARCHAR(1000) NOT NULL,
    MessageType     NVARCHAR(20) NOT NULL DEFAULT N'TEXT',
    CONSTRAINT FK_Messages_FromUser
        FOREIGN KEY (FromUserID) REFERENCES Users(UserID),
    CONSTRAINT FK_Messages_ToUser
        FOREIGN KEY (ToUserID) REFERENCES Users(UserID)
);


USE SmartSchoolBusDB;
GO

/* ============================
   1. USERS (Tài khoản hệ thống)
   ============================ */
SET IDENTITY_INSERT Users ON;

INSERT INTO Users (UserID, Username, PasswordHash, FullName, Phone, Email, Role, IsActive, CreatedAt)
VALUES
(1, 'admin',   '123456', N'Quản trị hệ thống', '0900000001', 'admin@ssb.com',   'ADMIN',  1, SYSDATETIME()),
(2, 'phuhuynh1','123456', N'Nguyễn Văn A',     '0900000002', 'ph1@ssb.com',     'PARENT', 1, SYSDATETIME()),
(3, 'phuhuynh2','123456', N'Trần Thị B',       '0900000003', 'ph2@ssb.com',     'PARENT', 1, SYSDATETIME()),
(4, 'taixe1',  '123456', N'Lê Văn Tài',        '0900000004', 'driver1@ssb.com', 'DRIVER', 1, SYSDATETIME()),
(5, 'taixe2',  '123456', N'Phạm Văn Lái',      '0900000005', 'driver2@ssb.com', 'DRIVER', 1, SYSDATETIME());
SET IDENTITY_INSERT Users OFF;


/* ============================
   2. PARENTS (Phụ huynh)
   ============================ */
SET IDENTITY_INSERT Parents ON;

INSERT INTO Parents (ParentID, UserID, FullName, Phone, Email, Address)
VALUES
(1, 2, N'Nguyễn Văn A', '0900000002', 'ph1@ssb.com', N'123 Đường A, Q1, TP.HCM'),
(2, 3, N'Trần Thị B',   '0900000003', 'ph2@ssb.com', N'456 Đường B, Q7, TP.HCM');

SET IDENTITY_INSERT Parents OFF;


/* ============================
   3. STUDENTS (Học sinh)
   ============================ */
SET IDENTITY_INSERT Students ON;

INSERT INTO Students (StudentID, FullName, DateOfBirth, ClassName, SchoolName, ParentID, IsActive)
VALUES
(1, N'Nguyễn Hoàng Nam', '2015-05-10', N'4A1', N'Trường Tiểu học ABC', 1, 1),
(2, N'Nguyễn Thị Hoa',   '2014-09-21', N'5B2', N'Trường Tiểu học ABC', 1, 1),
(3, N'Trần Minh Khang',  '2013-12-02', N'6A3', N'Trường THCS ABC',     2, 1);

SET IDENTITY_INSERT Students OFF;


/* ============================
   4. DRIVERS (Tài xế)
   ============================ */
SET IDENTITY_INSERT Drivers ON;

INSERT INTO Drivers (DriverID, UserID, FullName, Phone, LicenseNumber, Status)
VALUES
(1, 4, N'Lê Văn Tài', '0900000004', 'B2-123456', N'ACTIVE'),
(2, 5, N'Phạm Văn Lái', '0900000005', 'B2-654321', N'ACTIVE');

SET IDENTITY_INSERT Drivers OFF;


/* ============================
   5. BUSES (Xe buýt)
   ============================ */
SET IDENTITY_INSERT Buses ON;

INSERT INTO Buses (BusID, PlateNumber, Capacity, Model, Status, Note)
VALUES
(1, N'51A-12345', 30, N'Ford Transit', N'ACTIVE', N'Xe tuyến Q1'),
(2, N'51B-67890', 25, N'Hyundai County', N'ACTIVE', N'Xe tuyến Q7');

SET IDENTITY_INSERT Buses OFF;


/* ============================
   6. ROUTES (Tuyến đường)
   ============================ */
SET IDENTITY_INSERT Routes ON;

INSERT INTO Routes (RouteID, RouteName, Description, Status)
VALUES
(1, N'Tuyến Q1 - Trường ABC', N'10km', N'ACTIVE'),
(2, N'Tuyến Q7 - Trường ABC', N'10km', N'ACTIVE'),
(3, N'sgu to hcmute', N'10km', N'ACTIVE');

SET IDENTITY_INSERT Routes OFF;


/* ============================
   7. ROUTE STOPS (Điểm dừng)
   ============================ */
SET IDENTITY_INSERT RouteStops ON;

-- Tuyến 1 (Q1)
INSERT INTO RouteStops (StopID, RouteID, StopName, Latitude, Longitude, StopOrder, ExpectedTime)
VALUES
(1, 1, N'Điểm đón 1 - Q1',      10.776530, 106.700980, 1, '06:30:00'),
(2, 1, N'Điểm đón 2 - Q1',      10.778000, 106.705000, 2, '06:40:00'),
(3, 1, N'Trường ABC - Cổng chính', 10.780000, 106.710000, 3, '07:00:00'),

-- Tuyến 2 (Q7)
(4, 2, N'Điểm đón 1 - Q7',      10.732000, 106.721000, 1, '06:20:00'),
(5, 2, N'Điểm đón 2 - Q7',      10.735000, 106.725000, 2, '06:35:00'),
(6, 2, N'Trường ABC - Cổng chính', 10.780000, 106.710000, 3, '07:05:00');

SET IDENTITY_INSERT RouteStops OFF;


/* ============================
   8. TRIPS (Chuyến xe trong ngày)
   ============================ */
SET IDENTITY_INSERT Trips ON;

-- Giả sử ngày hôm nay là 2025-11-16 (bạn có thể đổi)
INSERT INTO Trips (TripID, RouteID, BusID, DriverID, TripDate, StartTime, EndTime, Direction, Status, CreatedAt)
VALUES
(1, 1, 1, 1, '2025-11-16', '06:20:00', '07:05:00', N'GO',     N'IN_PROGRESS', SYSDATETIME()),
(2, 1, 1, 1, '2025-11-16', '16:00:00', '16:40:00', N'RETURN', N'SCHEDULED',   SYSDATETIME()),
(3, 2, 2, 2, '2025-11-16', '06:10:00', '07:10:00', N'GO',     N'SCHEDULED',   SYSDATETIME());

SET IDENTITY_INSERT Trips OFF;


/* ============================================
   9. TRIP STUDENTS (HS trên mỗi chuyến)
   ============================================ */
SET IDENTITY_INSERT TripStudents ON;

-- Chuyến 1 (Q1, buổi sáng) chỉ Nam + Hoa
INSERT INTO TripStudents (TripStudentID, TripID, StudentID, PickupStopID, DropoffStopID, IsActive)
VALUES
(1, 1, 1, 1, 3, 1), -- Nam: đón điểm 1, trở tới trường
(2, 1, 2, 2, 3, 1); -- Hoa: đón điểm 2, trở tới trường
-- Chuyến 3 (Q7, buổi sáng) chỉ Khang
INSERT INTO TripStudents (TripStudentID, TripID, StudentID, PickupStopID, DropoffStopID, IsActive)
VALUES
(3, 3, 3, 4, 6, 1);

SET IDENTITY_INSERT TripStudents OFF;


/* ============================================
   10. TRIP EVENTS (Sự kiện đón / trả HS)
   ============================================ */
SET IDENTITY_INSERT TripEvents ON;

-- Giả sử tài xế đã đón Nam & Hoa, chưa trả
INSERT INTO TripEvents (EventID, TripID, StudentID, EventType, EventTime, Status, Note)
VALUES
(1, 1, 1, N'PICKUP', '2025-11-16T06:31:00', N'SUCCESS', N'Đã đón tới điểm 1'),
(2, 1, 2, N'PICKUP', '2025-11-16T06:41:00', N'SUCCESS', N'Đã đón tới điểm 2');
SET IDENTITY_INSERT TripEvents OFF;


/* ============================================
   11. BUS LOCATIONS (Vị trí xe)
   ============================================ */
SET IDENTITY_INSERT BusLocations ON;

INSERT INTO BusLocations (LocationID, TripID, BusID, RecordedAt, Latitude, Longitude, Speed, Heading)
VALUES
(1, 1, 1, '2025-11-16T06:32:00', 10.777000, 106.702000, 30.5,  45.0),
(2, 1, 1, '2025-11-16T06:38:00', 10.778500, 106.706000, 28.0,  60.0),
(3, 1, 1, '2025-11-16T06:50:00', 10.779500, 106.708500, 25.0,  70.0);

SET IDENTITY_INSERT BusLocations OFF;


/* ============================================
   12. NOTIFICATIONS (Thông báo)
   ============================================ */
-- SET IDENTITY_INSERT Notifications ON;

-- -- Gửi cho phụ huynh 1 (UserID = 2)
-- INSERT INTO Notifications (NotificationID, UserID, Type, Title, Content, CreatedAt, ReadAt, RelatedTripID, RelatedStudentID)
-- VALUES
-- (1, 2, N'BUS_NEAR', N'Xe sắp đến điểm đón', 
--  N'Xe buýt tuyến Q1 sắp đến điểm đón của bé Nam (khoảng 5 phút nữa).',
--  '2025-11-16T06:27:00', NULL, 1, 1),

-- (2, 2, N'PICKUP_DONE', N'Bé Nam lên xe', 
--  N'Bé Nam đã lên xe an toàn trên chuyến sáng tuyến Q1.',
--  '2025-11-16T06:32:00', NULL, 1, 1);

-- -- Gửi cho phụ huynh 2 (UserID = 3)
-- INSERT INTO Notifications (NotificationID, UserID, Type, Title, Content, CreatedAt, ReadAt, RelatedTripID, RelatedStudentID)
-- VALUES
-- (3, 3, N'BUS_NEAR', N'Xe sắp đến điểm đón', 
--  N'Xe buýt tuyến Q7 sắp đến điểm đón của bé Khang.',
--  '2025-11-16T06:15:00', NULL, 3, 3);

-- SET IDENTITY_INSERT Notifications OFF;


/* ============================================
   13. MESSAGES (Tin nhắn)
   ============================================ */
-- SET IDENTITY_INSERT Messages ON;

-- -- Admin nhắn cho tài xế 1
-- INSERT INTO Messages (MessageID, FromUserID, ToUserID, SentAt, Content, MessageType)
-- VALUES
-- (1, 1, 4, '2025-11-16T06:10:00', 
--  N'Anh Tài chú ý đúng giờ đón các bé ở Q1 nhé.', N'TEXT'),
-- -- Tài xế trả lời admin
-- (2, 4, 1, '2025-11-16T06:11:00',
--  N'Dạ em đã xuất phát, dự kiến đến điểm 1 lúc 6h30.', N'TEXT');

-- SET IDENTITY_INSERT Messages OFF;


