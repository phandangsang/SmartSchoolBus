from datetime import datetime
from app import db, bcrypt

class User(db.Model):
    __tablename__ = 'Users'  # SQL Server table name
    
    UserID = db.Column('UserID', db.Integer, primary_key=True)
    Username = db.Column('Username', db.String(50), unique=True, nullable=False)
    PasswordHash = db.Column('PasswordHash', db.String(255), nullable=False)
    FullName = db.Column('FullName', db.String(100), nullable=False)
    Phone = db.Column('Phone', db.String(20))
    Email = db.Column('Email', db.String(100))
    Role = db.Column('Role', db.String(20), nullable=False)  # 'ADMIN', 'DRIVER', 'PARENT'
    IsActive = db.Column('IsActive', db.Boolean, default=True)
    CreatedAt = db.Column('CreatedAt', db.DateTime, default=datetime.utcnow)
    
    # Relationships
    driver_profile = db.relationship('Driver', backref='user', uselist=False, cascade='all, delete-orphan')
    parent_profile = db.relationship('Parent', backref='user', uselist=False, cascade='all, delete-orphan')
    
    def set_password(self, password):
        """Hash and set user password - or store plain for compatibility."""
        # SQL Server database có plain password, nhưng nên hash
        self.PasswordHash = bcrypt.generate_password_hash(password).decode('utf-8')
    
    def check_password(self, password):
        """Check if provided password matches."""
        # Kiểm tra cả hash và plain password (cho data có sẵn)
        try:
            return bcrypt.check_password_hash(self.PasswordHash, password)
        except:
            # Fallback cho plain password trong database hiện tại
            return self.PasswordHash == password
    
    def to_dict(self):
        """Convert user object to dictionary."""
        return {
            'id': self.UserID,
            'username': self.Username,
            'email': self.Email,
            'full_name': self.FullName,
            'phone': self.Phone,
            'role': self.Role.lower() if self.Role else None,
            'is_active': self.IsActive,
            'created_at': self.CreatedAt.isoformat() if self.CreatedAt else None
        }

class Driver(db.Model):
    __tablename__ = 'Drivers'
    
    DriverID = db.Column('DriverID', db.Integer, primary_key=True)
    UserID = db.Column('UserID', db.Integer, db.ForeignKey('Users.UserID'), unique=True)
    FullName = db.Column('FullName', db.String(100), nullable=False)
    Phone = db.Column('Phone', db.String(20), nullable=False)
    LicenseNumber = db.Column('LicenseNumber', db.String(50))
    Status = db.Column('Status', db.String(20), default='ACTIVE')
    
    def to_dict(self):
        """Convert driver object to dictionary."""
        return {
            'id': self.DriverID,
            'user_id': self.UserID,
            'full_name': self.FullName,
            'phone': self.Phone,
            'license_number': self.LicenseNumber,
            'status': self.Status,
            'user': self.user.to_dict() if self.user else None
        }

class Parent(db.Model):
    __tablename__ = 'Parents'
    
    ParentID = db.Column('ParentID', db.Integer, primary_key=True)
    UserID = db.Column('UserID', db.Integer, db.ForeignKey('Users.UserID'), unique=True)
    FullName = db.Column('FullName', db.String(100), nullable=False)
    Phone = db.Column('Phone', db.String(20), nullable=False)
    Email = db.Column('Email', db.String(100))
    Address = db.Column('Address', db.String(255))
    
    students = db.relationship('Student', backref='parent', cascade='all, delete-orphan')
    
    def to_dict(self):
        """Convert parent object to dictionary."""
        return {
            'id': self.ParentID,
            'user_id': self.UserID,
            'full_name': self.FullName,
            'phone': self.Phone,
            'email': self.Email,
            'address': self.Address,
            'user': self.user.to_dict() if self.user else None
        }

class Student(db.Model):
    __tablename__ = 'Students'
    
    StudentID = db.Column('StudentID', db.Integer, primary_key=True)
    FullName = db.Column('FullName', db.String(100), nullable=False)
    DateOfBirth = db.Column('DateOfBirth', db.Date)
    ClassName = db.Column('ClassName', db.String(50))
    SchoolName = db.Column('SchoolName', db.String(100))
    ParentID = db.Column('ParentID', db.Integer, db.ForeignKey('Parents.ParentID'), nullable=False)
    IsActive = db.Column('IsActive', db.Boolean, default=True)
    
    def to_dict(self):
        """Convert student object to dictionary."""
        return {
            'id': self.StudentID,
            'parent_id': self.ParentID,
            'full_name': self.FullName,
            'date_of_birth': self.DateOfBirth.isoformat() if self.DateOfBirth else None,
            'class_name': self.ClassName,
            'school_name': self.SchoolName,
            'is_active': self.IsActive
        }
