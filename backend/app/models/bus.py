from datetime import datetime
from app import db

class Bus(db.Model):
    __tablename__ = 'Buses'
    
    BusID = db.Column('BusID', db.Integer, primary_key=True)
    PlateNumber = db.Column('PlateNumber', db.String(20), unique=True, nullable=False)
    Capacity = db.Column('Capacity', db.Integer, nullable=False)
    Model = db.Column('Model', db.String(50))
    Status = db.Column('Status', db.String(20), default='ACTIVE')
    Note = db.Column('Note', db.String(255))
    
    def to_dict(self):
        """Convert bus object to dictionary."""
        return {
            'id': self.BusID,
            'plate_number': self.PlateNumber,
            'capacity': self.Capacity,
            'model': self.Model,
            'status': self.Status,
            'note': self.Note
        }

class Route(db.Model):
    __tablename__ = 'Routes'
    
    RouteID = db.Column('RouteID', db.Integer, primary_key=True)
    RouteName = db.Column('RouteName', db.String(100), nullable=False)
    Description = db.Column('Description', db.String(255))
    Status = db.Column('Status', db.String(20), default='ACTIVE')
    
    stops = db.relationship('RouteStop', backref='route', cascade='all, delete-orphan')
    
    def to_dict(self):
        """Convert route object to dictionary."""
        return {
            'id': self.RouteID,
            'route_name': self.RouteName,
            'description': self.Description,
            'status': self.Status
        }

class RouteStop(db.Model):
    __tablename__ = 'RouteStops'
    
    StopID = db.Column('StopID', db.Integer, primary_key=True)
    RouteID = db.Column('RouteID', db.Integer, db.ForeignKey('Routes.RouteID'))
    StopName = db.Column('StopName', db.String(100), nullable=False)
    Latitude = db.Column('Latitude', db.Numeric(9, 6), nullable=False)
    Longitude = db.Column('Longitude', db.Numeric(9, 6), nullable=False)
    StopOrder = db.Column('StopOrder', db.Integer, nullable=False)
    ExpectedTime = db.Column('ExpectedTime', db.Time)
    
    def to_dict(self):
        """Convert route stop object to dictionary."""
        return {
            'id': self.StopID,
            'route_id': self.RouteID,
            'stop_name': self.StopName,
            'latitude': float(self.Latitude) if self.Latitude else None,
            'longitude': float(self.Longitude) if self.Longitude else None,
            'stop_order': self.StopOrder,
            'expected_time': self.ExpectedTime.isoformat() if self.ExpectedTime else None
        }

class Trip(db.Model):
    __tablename__ = 'Trips'
    
    TripID = db.Column('TripID', db.Integer, primary_key=True)
    RouteID = db.Column('RouteID', db.Integer, db.ForeignKey('Routes.RouteID'), nullable=False)
    BusID = db.Column('BusID', db.Integer, db.ForeignKey('Buses.BusID'), nullable=False)
    DriverID = db.Column('DriverID', db.Integer, db.ForeignKey('Drivers.DriverID'), nullable=False)
    TripDate = db.Column('TripDate', db.Date, nullable=False)
    StartTime = db.Column('StartTime', db.Time, nullable=False)
    EndTime = db.Column('EndTime', db.Time)
    Direction = db.Column('Direction', db.String(20), default='GO')  # GO, RETURN
    Status = db.Column('Status', db.String(20), default='SCHEDULED')
    CreatedAt = db.Column('CreatedAt', db.DateTime, default=datetime.utcnow)
    
    route = db.relationship('Route', backref='trips')
    bus = db.relationship('Bus', backref='trips')
    
    def to_dict(self):
        """Convert trip object to dictionary."""
        return {
            'id': self.TripID,
            'route_id': self.RouteID,
            'bus_id': self.BusID,
            'driver_id': self.DriverID,
            'trip_date': self.TripDate.isoformat() if self.TripDate else None,
            'start_time': self.StartTime.isoformat() if self.StartTime else None,
            'end_time': self.EndTime.isoformat() if self.EndTime else None,
            'direction': self.Direction,
            'status': self.Status,
            'created_at': self.CreatedAt.isoformat() if self.CreatedAt else None
        }

class BusLocation(db.Model):
    __tablename__ = 'BusLocations'
    
    LocationID = db.Column('LocationID', db.BigInteger, primary_key=True)
    TripID = db.Column('TripID', db.Integer, db.ForeignKey('Trips.TripID'))
    BusID = db.Column('BusID', db.Integer, db.ForeignKey('Buses.BusID'), nullable=False)
    RecordedAt = db.Column('RecordedAt', db.DateTime, default=datetime.utcnow)
    Latitude = db.Column('Latitude', db.Numeric(9, 6), nullable=False)
    Longitude = db.Column('Longitude', db.Numeric(9, 6), nullable=False)
    Speed = db.Column('Speed', db.Numeric(5, 2))
    Heading = db.Column('Heading', db.Numeric(5, 2))
    
    bus = db.relationship('Bus', backref='locations')
    trip = db.relationship('Trip', backref='locations')
    
    def to_dict(self):
        """Convert location object to dictionary."""
        return {
            'id': self.LocationID,
            'trip_id': self.TripID,
            'bus_id': self.BusID,
            'latitude': float(self.Latitude) if self.Latitude else None,
            'longitude': float(self.Longitude) if self.Longitude else None,
            'speed': float(self.Speed) if self.Speed else None,
            'heading': float(self.Heading) if self.Heading else None,
            'recorded_at': self.RecordedAt.isoformat() if self.RecordedAt else None
        }

class Notification(db.Model):
    __tablename__ = 'Notifications'
    
    NotificationID = db.Column('NotificationID', db.Integer, primary_key=True)
    UserID = db.Column('UserID', db.Integer, db.ForeignKey('Users.UserID'), nullable=False)
    Type = db.Column('Type', db.String(50), nullable=False)
    Title = db.Column('Title', db.String(100), nullable=False)
    Content = db.Column('Content', db.String(500), nullable=False)
    CreatedAt = db.Column('CreatedAt', db.DateTime, default=datetime.utcnow)
    ReadAt = db.Column('ReadAt', db.DateTime)
    RelatedTripID = db.Column('RelatedTripID', db.Integer, db.ForeignKey('Trips.TripID'))
    RelatedStudentID = db.Column('RelatedStudentID', db.Integer, db.ForeignKey('Students.StudentID'))
    
    def to_dict(self):
        """Convert notification object to dictionary."""
        return {
            'id': self.NotificationID,
            'user_id': self.UserID,
            'type': self.Type,
            'title': self.Title,
            'content': self.Content,
            'created_at': self.CreatedAt.isoformat() if self.CreatedAt else None,
            'read_at': self.ReadAt.isoformat() if self.ReadAt else None,
            'related_trip_id': self.RelatedTripID,
            'related_student_id': self.RelatedStudentID
        }
