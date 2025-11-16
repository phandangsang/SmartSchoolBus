CREATE DATABASE SmartSchoolBusDB;
GO
USE SmartSchoolBusDB;
GO
-- T?o database (tu? b?n ??t t�n)
CREATE DATABASE SmartSchoolBusDB;
GO

USE SmartSchoolBusDB;
GO

/* ============================
   1. USERS (T�i kho?n h? th?ng)
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
   2. PARENTS (Ph? huynh)
   ============================ */
CREATE TABLE Parents (
    ParentID        INT IDENTITY(1,1) PRIMARY KEY,
    UserID          INT UNIQUE, -- Li�n k?t 1-1 v?i Users (Role = 'PARENT')
    FullName        NVARCHAR(100) NOT NULL,
    Phone           NVARCHAR(20) NOT NULL,
    Email           NVARCHAR(100),
    Address         NVARCHAR(255),
    CONSTRAINT FK_Parents_Users
        FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

/* ============================
   3. STUDENTS (H?c sinh)
   ============================ */
CREATE TABLE Students (
    StudentID       INT IDENTITY(1,1) PRIMARY KEY,
    FullName        NVARCHAR(100) NOT NULL,
    DateOfBirth     DATE,
    ClassName       NVARCHAR(50),   -- L?p: 5A1, 6B2, ...
    SchoolName      NVARCHAR(100) DEFAULT N'Tr??ng DEF',
    ParentID        INT NOT NULL,
    IsActive        BIT NOT NULL DEFAULT 1,
    CONSTRAINT FK_Students_Parents
        FOREIGN KEY (ParentID) REFERENCES Parents(ParentID)
);

/* ============================
   4. DRIVERS (T�i x?)
   ============================ */
CREATE TABLE Drivers (
    DriverID        INT IDENTITY(1,1) PRIMARY KEY,
    UserID          INT UNIQUE, -- Li�n k?t 1-1 v?i Users (Role = 'DRIVER')
    FullName        NVARCHAR(100) NOT NULL,
    Phone           NVARCHAR(20) NOT NULL,
    LicenseNumber   NVARCHAR(50),
    Status          NVARCHAR(20) NOT NULL DEFAULT N'ACTIVE', -- ACTIVE, INACTIVE
    CONSTRAINT FK_Drivers_Users
        FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

/* ============================
   5. BUSES (Xe bu�t)
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
   6. ROUTES (Tuy?n ???ng)
   ============================ */
CREATE TABLE Routes (
    RouteID         INT IDENTITY(1,1) PRIMARY KEY,
    RouteName       NVARCHAR(100) NOT NULL, -- V� d?: Tuy?n Q1 - Q7
    Description     NVARCHAR(255),
    Status          NVARCHAR(20) NOT NULL DEFAULT N'ACTIVE'
);

/* ============================
   7. ROUTE STOPS (?i?m d?ng tr�n tuy?n)
   ============================ */
CREATE TABLE RouteStops (
    StopID          INT IDENTITY(1,1) PRIMARY KEY,
    RouteID         INT NOT NULL,
    StopName        NVARCHAR(100) NOT NULL,
    Latitude        DECIMAL(9,6) NOT NULL,
    Longitude       DECIMAL(9,6) NOT NULL,
    StopOrder       INT NOT NULL,      -- Th? t? ?i?m d?ng tr�n tuy?n
    ExpectedTime    TIME NULL,         -- Gi? d? ki?n xe ?i qua
    CONSTRAINT FK_RouteStops_Routes
        FOREIGN KEY (RouteID) REFERENCES Routes(RouteID)
);

/* ============================
   8. TRIPS (L?ch tr�nh chuy?n xe)
   ============================ */
CREATE TABLE Trips (
    TripID          INT IDENTITY(1,1) PRIMARY KEY,
    RouteID         INT NOT NULL,
    BusID           INT NOT NULL,
    DriverID        INT NOT NULL,
    TripDate        DATE NOT NULL,
    StartTime       TIME NOT NULL,      -- Gi? xu?t ph�t d? ki?n
    EndTime         TIME NULL,          -- Gi? k?t th�c d? ki?n
    Direction       NVARCHAR(20) NOT NULL DEFAULT N'GO', 
        -- GO: ?�n ??n tr??ng, RETURN: tr? v?
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
   9. TRIP STUDENTS (H?c sinh tr�n m?i chuy?n)
   ============================================ */
CREATE TABLE TripStudents (
    TripStudentID   INT IDENTITY(1,1) PRIMARY KEY,
    TripID          INT NOT NULL,
    StudentID       INT NOT NULL,
    PickupStopID    INT NOT NULL,  -- ?i?m ?�n
    DropoffStopID   INT NOT NULL,  -- ?i?m tr?
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
   10. TRIP EVENTS (?� ?�n / ?� tr? h?c sinh)
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
   11. BUS LOCATIONS (V? tr� xe theo th?i gian th?c)
   ============================================ */
CREATE TABLE BusLocations (
    LocationID      BIGINT IDENTITY(1,1) PRIMARY KEY,
    TripID          INT NULL, -- C� th? null n?u ch? tracking xe, kh�ng g?n chuy?n
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
   12. NOTIFICATIONS (Th�ng b�o cho ph? huynh / t�i x?)
   ============================================ */
CREATE TABLE Notifications (
    NotificationID  INT IDENTITY(1,1) PRIMARY KEY,
    UserID          INT NOT NULL, -- Ng??i nh?n
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
   13. MESSAGES (Nh?n tin qu?n l� ? t�i x? ? ph? huynh)
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
   1. USERS (T�i kho?n h? th?ng)
   ============================ */
SET IDENTITY_INSERT Users ON;

INSERT INTO Users (UserID, Username, PasswordHash, FullName, Phone, Email, Role, IsActive, CreatedAt)
VALUES
(1, 'admin',   '123456', N'Qu?n tr? h? th?ng', '0900000001', 'admin@ssb.com',   'ADMIN',  1, SYSDATETIME()),
(2, 'phuhuynh1','123456', N'Nguy?n V?n A',     '0900000002', 'ph1@ssb.com',     'PARENT', 1, SYSDATETIME()),
(3, 'phuhuynh2','123456', N'Tr?n Th? B',       '0900000003', 'ph2@ssb.com',     'PARENT', 1, SYSDATETIME()),
(4, 'taixe1',  '123456', N'L� V?n T�i',        '0900000004', 'driver1@ssb.com', 'DRIVER', 1, SYSDATETIME()),
(5, 'taixe2',  '123456', N'Ph?m V?n L�i',      '0900000005', 'driver2@ssb.com', 'DRIVER', 1, SYSDATETIME());

SET IDENTITY_INSERT Users OFF;


/* ============================
   2. PARENTS (Ph? huynh)
   ============================ */
SET IDENTITY_INSERT Parents ON;

INSERT INTO Parents (ParentID, UserID, FullName, Phone, Email, Address)
VALUES
(1, 2, N'Nguy?n V?n A', '0900000002', 'ph1@ssb.com', N'123 ???ng A, Q1, TP.HCM'),
(2, 3, N'Tr?n Th? B',   '0900000003', 'ph2@ssb.com', N'456 ???ng B, Q7, TP.HCM');

SET IDENTITY_INSERT Parents OFF;


/* ============================
   3. STUDENTS (H?c sinh)
   ============================ */
SET IDENTITY_INSERT Students ON;

INSERT INTO Students (StudentID, FullName, DateOfBirth, ClassName, SchoolName, ParentID, IsActive)
VALUES
(1, N'Nguy?n Ho�ng Nam', '2015-05-10', N'4A1', N'Tr??ng Ti?u h?c ABC', 1, 1),
(2, N'Nguy?n Th? Hoa',   '2014-09-21', N'5B2', N'Tr??ng Ti?u h?c ABC', 1, 1),
(3, N'Tr?n Minh Khang',  '2013-12-02', N'6A3', N'Tr??ng THCS ABC',     2, 1);

SET IDENTITY_INSERT Students OFF;


/* ============================
   4. DRIVERS (T�i x?)
   ============================ */
SET IDENTITY_INSERT Drivers ON;

INSERT INTO Drivers (DriverID, UserID, FullName, Phone, LicenseNumber, Status)
VALUES
(1, 4, N'L� V?n T�i', '0900000004', 'B2-123456', N'ACTIVE'),
(2, 5, N'Ph?m V?n L�i', '0900000005', 'B2-654321', N'ACTIVE');

SET IDENTITY_INSERT Drivers OFF;


/* ============================
   5. BUSES (Xe bu�t)
   ============================ */
SET IDENTITY_INSERT Buses ON;

INSERT INTO Buses (BusID, PlateNumber, Capacity, Model, Status, Note)
VALUES
(1, N'51A-12345', 30, N'Ford Transit', N'ACTIVE', N'Xe tuy?n Q1'),
(2, N'51B-67890', 25, N'Hyundai County', N'ACTIVE', N'Xe tuy?n Q7');

SET IDENTITY_INSERT Buses OFF;


/* ============================
   6. ROUTES (Tuy?n ???ng)
   ============================ */
SET IDENTITY_INSERT Routes ON;

INSERT INTO Routes (RouteID, RouteName, Description, Status)
VALUES
(1, N'Tuy?n Q1 - Tr??ng ABC', N'?�n HS khu v?c Q1 ??n tr??ng ABC', N'ACTIVE'),
(2, N'Tuy?n Q7 - Tr??ng ABC', N'?�n HS khu v?c Q7 ??n tr??ng ABC', N'ACTIVE');

SET IDENTITY_INSERT Routes OFF;


/* ============================
   7. ROUTE STOPS (?i?m d?ng)
   ============================ */
SET IDENTITY_INSERT RouteStops ON;

-- Tuy?n 1 (Q1)
INSERT INTO RouteStops (StopID, RouteID, StopName, Latitude, Longitude, StopOrder, ExpectedTime)
VALUES
(1, 1, N'?i?m ?�n 1 - Q1',      10.776530, 106.700980, 1, '06:30:00'),
(2, 1, N'?i?m ?�n 2 - Q1',      10.778000, 106.705000, 2, '06:40:00'),
(3, 1, N'Tr??ng ABC - C?ng ch�nh', 10.780000, 106.710000, 3, '07:00:00'),

-- Tuy?n 2 (Q7)
(4, 2, N'?i?m ?�n 1 - Q7',      10.732000, 106.721000, 1, '06:20:00'),
(5, 2, N'?i?m ?�n 2 - Q7',      10.735000, 106.725000, 2, '06:35:00'),
(6, 2, N'Tr??ng ABC - C?ng ch�nh', 10.780000, 106.710000, 3, '07:05:00');

SET IDENTITY_INSERT RouteStops OFF;


/* ============================
   8. TRIPS (Chuy?n xe trong ng�y)
   ============================ */
SET IDENTITY_INSERT Trips ON;

-- Gi? s? ng�y h�m nay l� 2025-11-16 (b?n c� th? ??i)
INSERT INTO Trips (TripID, RouteID, BusID, DriverID, TripDate, StartTime, EndTime, Direction, Status, CreatedAt)
VALUES
(1, 1, 1, 1, '2025-11-16', '06:20:00', '07:05:00', N'GO',     N'IN_PROGRESS', SYSDATETIME()),
(2, 1, 1, 1, '2025-11-16', '16:00:00', '16:40:00', N'RETURN', N'SCHEDULED',   SYSDATETIME()),
(3, 2, 2, 2, '2025-11-16', '06:10:00', '07:10:00', N'GO',     N'SCHEDULED',   SYSDATETIME());

SET IDENTITY_INSERT Trips OFF;


/* ============================================
   9. TRIP STUDENTS (HS tr�n m?i chuy?n)
   ============================================ */
SET IDENTITY_INSERT TripStudents ON;

-- Chuy?n 1 (Q1, bu?i s�ng) ch? Nam + Hoa
INSERT INTO TripStudents (TripStudentID, TripID, StudentID, PickupStopID, DropoffStopID, IsActive)
VALUES
(1, 1, 1, 1, 3, 1), -- Nam: ?�n ?i?m 1, tr? t?i tr??ng
(2, 1, 2, 2, 3, 1); -- Hoa: ?�n ?i?m 2, tr? t?i tr??ng

-- Chuy?n 3 (Q7, bu?i s�ng) ch? Khang
INSERT INTO TripStudents (TripStudentID, TripID, StudentID, PickupStopID, DropoffStopID, IsActive)
VALUES
(3, 3, 3, 4, 6, 1);

SET IDENTITY_INSERT TripStudents OFF;


/* ============================================
   10. TRIP EVENTS (?� ?�n / ?� tr? HS)
   ============================================ */
SET IDENTITY_INSERT TripEvents ON;

-- Gi? s? t�i x? ?� ?�n Nam & Hoa, ch?a tr?
INSERT INTO TripEvents (EventID, TripID, StudentID, EventType, EventTime, Status, Note)
VALUES
(1, 1, 1, N'PICKUP', '2025-11-16T06:31:00', N'SUCCESS', N'?� ?�n t?i ?i?m 1'),
(2, 1, 2, N'PICKUP', '2025-11-16T06:41:00', N'SUCCESS', N'?� ?�n t?i ?i?m 2');

SET IDENTITY_INSERT TripEvents OFF;


/* ============================================
   11. BUS LOCATIONS (V? tr� xe)
   ============================================ */
SET IDENTITY_INSERT BusLocations ON;

INSERT INTO BusLocations (LocationID, TripID, BusID, RecordedAt, Latitude, Longitude, Speed, Heading)
VALUES
(1, 1, 1, '2025-11-16T06:32:00', 10.777000, 106.702000, 30.5,  45.0),
(2, 1, 1, '2025-11-16T06:38:00', 10.778500, 106.706000, 28.0,  60.0),
(3, 1, 1, '2025-11-16T06:50:00', 10.779500, 106.708500, 25.0,  70.0);

SET IDENTITY_INSERT BusLocations OFF;


/* ============================================
   12. NOTIFICATIONS (Th�ng b�o)
   ============================================ */
SET IDENTITY_INSERT Notifications ON;

-- G?i cho ph? huynh 1 (UserID = 2)
INSERT INTO Notifications (NotificationID, UserID, Type, Title, Content, CreatedAt, ReadAt, RelatedTripID, RelatedStudentID)
VALUES
(1, 2, N'BUS_NEAR', N'Xe s?p ??n ?i?m ?�n', 
 N'Xe bu�t tuy?n Q1 s?p ??n ?i?m ?�n c?a b� Nam (kho?ng 5 ph�t n?a).',
 '2025-11-16T06:27:00', NULL, 1, 1),

(2, 2, N'PICKUP_DONE', N'?� ?�n b� l�n xe', 
 N'B� Nam ?� l�n xe an to�n tr�n chuy?n s�ng tuy?n Q1.',
 '2025-11-16T06:32:00', NULL, 1, 1);

-- G?i cho ph? huynh 2 (UserID = 3)
INSERT INTO Notifications (NotificationID, UserID, Type, Title, Content, CreatedAt, ReadAt, RelatedTripID, RelatedStudentID)
VALUES
(3, 3, N'BUS_NEAR', N'Xe s?p ??n ?i?m ?�n', 
 N'Xe bu�t tuy?n Q7 s?p ??n ?i?m ?�n c?a b� Khang.',
 '2025-11-16T06:15:00', NULL, 3, 3);

SET IDENTITY_INSERT Notifications OFF;


/* ============================================
   13. MESSAGES (Tin nh?n)
   ============================================ */
SET IDENTITY_INSERT Messages ON;

-- Admin nh?n cho t�i x? 1
INSERT INTO Messages (MessageID, FromUserID, ToUserID, SentAt, Content, MessageType)
VALUES
(1, 1, 4, '2025-11-16T06:10:00', 
 N'Anh T�i ch� � ?�ng gi? ?�n c�c b� ? Q1 nh�.', N'TEXT'),

-- T�i x? tr? l?i admin
(2, 4, 1, '2025-11-16T06:11:00',
 N'D? em ?� xu?t ph�t, d? ki?n ??n ?i?m 1 l�c 6h30.', N'TEXT');

SET IDENTITY_INSERT Messages OFF;


