# Import all models here for easy access
from app.models.user import User, Driver, Parent, Student
from app.models.bus import Bus, Route, RouteStop, Trip, BusLocation, Notification

__all__ = [
    'User', 'Driver', 'Parent', 'Student',
    'Bus', 'Route', 'RouteStop', 'Trip', 'BusLocation', 'Notification'
]
