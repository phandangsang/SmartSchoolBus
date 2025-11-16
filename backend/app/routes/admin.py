from flask import Blueprint, request
from app import db
from app.models import User, Driver, Parent, Student, Bus, Route, RouteStop
from app.utils.helpers import success_response, error_response, validate_required_fields
from app.utils.auth import token_required, role_required

admin_bp = Blueprint('admin', __name__, url_prefix='/api/admin')

# User Management
@admin_bp.route('/users', methods=['GET'])
@role_required('admin')
def get_all_users():
    """Get all users."""
    try:
        role_filter = request.args.get('role')
        query = User.query
        
        if role_filter:
            query = query.filter_by(role=role_filter)
        
        users = query.all()
        return success_response(data=[user.to_dict() for user in users])
    except Exception as e:
        return error_response(f'Failed to get users: {str(e)}', status=500)

@admin_bp.route('/users/<int:user_id>', methods=['GET'])
@role_required('admin')
def get_user(user_id):
    """Get user by ID."""
    try:
        user = User.query.get(user_id)
        if not user:
            return error_response('User not found', status=404)
        return success_response(data=user.to_dict())
    except Exception as e:
        return error_response(f'Failed to get user: {str(e)}', status=500)

@admin_bp.route('/users/<int:user_id>', methods=['PUT'])
@role_required('admin')
def update_user(user_id):
    """Update user information."""
    try:
        user = User.query.get(user_id)
        if not user:
            return error_response('User not found', status=404)
        
        data = request.get_json()
        
        # Update allowed fields
        if 'full_name' in data:
            user.full_name = data['full_name']
        if 'phone' in data:
            user.phone = data['phone']
        if 'is_active' in data:
            user.is_active = data['is_active']
        
        db.session.commit()
        return success_response(data=user.to_dict(), message='User updated successfully')
    except Exception as e:
        db.session.rollback()
        return error_response(f'Failed to update user: {str(e)}', status=500)

@admin_bp.route('/users/<int:user_id>', methods=['DELETE'])
@role_required('admin')
def delete_user(user_id):
    """Delete user."""
    try:
        user = User.query.get(user_id)
        if not user:
            return error_response('User not found', status=404)
        
        db.session.delete(user)
        db.session.commit()
        return success_response(message='User deleted successfully')
    except Exception as e:
        db.session.rollback()
        return error_response(f'Failed to delete user: {str(e)}', status=500)

# Driver Management
@admin_bp.route('/drivers', methods=['GET'])
@role_required('admin')
def get_all_drivers():
    """Get all drivers."""
    try:
        drivers = Driver.query.all()
        return success_response(data=[driver.to_dict() for driver in drivers])
    except Exception as e:
        return error_response(f'Failed to get drivers: {str(e)}', status=500)

@admin_bp.route('/drivers', methods=['POST'])
@role_required('admin')
def create_driver():
    """Create a new driver."""
    try:
        data = request.get_json()
        required_fields = ['full_name', 'phone']
        is_valid, error_msg = validate_required_fields(data, required_fields)
        if not is_valid:
            return error_response(error_msg)
        
        driver = Driver(
            FullName=data['full_name'],
            Phone=data['phone'],
            LicenseNumber=data.get('license_number', ''),
            Status=data.get('status', 'ACTIVE')
        )
        
        db.session.add(driver)
        db.session.commit()
        return success_response(data=driver.to_dict(), message='Driver created successfully', status=201)
    except Exception as e:
        db.session.rollback()
        return error_response(f'Failed to create driver: {str(e)}', status=500)

@admin_bp.route('/drivers/<int:driver_id>', methods=['PUT'])
@role_required('admin')
def update_driver(driver_id):
    """Update driver information."""
    try:
        driver = Driver.query.get(driver_id)
        if not driver:
            return error_response('Driver not found', status=404)
        
        data = request.get_json()
        
        if 'full_name' in data:
            driver.FullName = data['full_name']
        if 'phone' in data:
            driver.Phone = data['phone']
        if 'license_number' in data:
            driver.LicenseNumber = data['license_number']
        if 'status' in data:
            driver.Status = data['status']
        
        db.session.commit()
        return success_response(data=driver.to_dict(), message='Driver updated successfully')
    except Exception as e:
        db.session.rollback()
        return error_response(f'Failed to update driver: {str(e)}', status=500)

@admin_bp.route('/drivers/<int:driver_id>', methods=['DELETE'])
@role_required('admin')
def delete_driver(driver_id):
    """Delete driver."""
    try:
        driver = Driver.query.get(driver_id)
        if not driver:
            return error_response('Driver not found', status=404)
        
        db.session.delete(driver)
        db.session.commit()
        return success_response(message='Driver deleted successfully')
    except Exception as e:
        db.session.rollback()
        return error_response(f'Failed to delete driver: {str(e)}', status=500)

# Bus Management
@admin_bp.route('/buses', methods=['GET'])
@role_required('admin')
def get_all_buses():
    """Get all buses."""
    try:
        buses = Bus.query.all()
        return success_response(data=[bus.to_dict() for bus in buses])
    except Exception as e:
        return error_response(f'Failed to get buses: {str(e)}', status=500)

@admin_bp.route('/buses', methods=['POST'])
@role_required('admin')
def create_bus():
    """Create a new bus."""
    try:
        data = request.get_json()
        required_fields = ['bus_number', 'license_plate', 'capacity']
        is_valid, error_msg = validate_required_fields(data, required_fields)
        if not is_valid:
            return error_response(error_msg)
        
        bus = Bus(
            bus_number=data['bus_number'],
            license_plate=data['license_plate'],
            capacity=data['capacity'],
            model=data.get('model'),
            year=data.get('year'),
            status=data.get('status', 'active'),
            route_id=data.get('route_id')
        )
        
        db.session.add(bus)
        db.session.commit()
        return success_response(data=bus.to_dict(), message='Bus created successfully', status=201)
    except Exception as e:
        db.session.rollback()
        return error_response(f'Failed to create bus: {str(e)}', status=500)

@admin_bp.route('/buses/<int:bus_id>', methods=['PUT'])
@role_required('admin')
def update_bus(bus_id):
    """Update bus information."""
    try:
        bus = Bus.query.get(bus_id)
        if not bus:
            return error_response('Bus not found', status=404)
        
        data = request.get_json()
        
        # Update fields
        if 'bus_number' in data:
            bus.bus_number = data['bus_number']
        if 'license_plate' in data:
            bus.license_plate = data['license_plate']
        if 'capacity' in data:
            bus.capacity = data['capacity']
        if 'model' in data:
            bus.model = data['model']
        if 'year' in data:
            bus.year = data['year']
        if 'status' in data:
            bus.status = data['status']
        if 'route_id' in data:
            bus.route_id = data['route_id']
        
        db.session.commit()
        return success_response(data=bus.to_dict(), message='Bus updated successfully')
    except Exception as e:
        db.session.rollback()
        return error_response(f'Failed to update bus: {str(e)}', status=500)

@admin_bp.route('/buses/<int:bus_id>', methods=['DELETE'])
@role_required('admin')
def delete_bus(bus_id):
    """Delete bus."""
    try:
        bus = Bus.query.get(bus_id)
        if not bus:
            return error_response('Bus not found', status=404)
        
        db.session.delete(bus)
        db.session.commit()
        return success_response(message='Bus deleted successfully')
    except Exception as e:
        db.session.rollback()
        return error_response(f'Failed to delete bus: {str(e)}', status=500)

# Route Management
@admin_bp.route('/routes', methods=['GET'])
@role_required('admin')
def get_all_routes():
    """Get all routes."""
    try:
        routes = Route.query.all()
        return success_response(data=[route.to_dict() for route in routes])
    except Exception as e:
        return error_response(f'Failed to get routes: {str(e)}', status=500)

@admin_bp.route('/routes', methods=['POST'])
@role_required('admin')
def create_route():
    """Create a new route."""
    try:
        data = request.get_json()
        required_fields = ['route_name']
        is_valid, error_msg = validate_required_fields(data, required_fields)
        if not is_valid:
            return error_response(error_msg)
        
        route = Route(
            route_name=data['route_name'],
            description=data.get('description'),
            is_active=data.get('is_active', True)
        )
        
        db.session.add(route)
        db.session.commit()
        return success_response(data=route.to_dict(), message='Route created successfully', status=201)
    except Exception as e:
        db.session.rollback()
        return error_response(f'Failed to create route: {str(e)}', status=500)

# Student Management
@admin_bp.route('/students', methods=['GET'])
@role_required('admin')
def get_all_students():
    """Get all students."""
    try:
        students = Student.query.all()
        return success_response(data=[student.to_dict() for student in students])
    except Exception as e:
        return error_response(f'Failed to get students: {str(e)}', status=500)

@admin_bp.route('/students', methods=['POST'])
@role_required('admin')
def create_student():
    """Create a new student."""
    try:
        data = request.get_json()
        required_fields = ['full_name', 'parent_id']
        is_valid, error_msg = validate_required_fields(data, required_fields)
        if not is_valid:
            return error_response(error_msg)
        
        # Check if parent exists
        parent = Parent.query.get(data['parent_id'])
        if not parent:
            return error_response('Parent not found', status=404)
        
        student = Student(
            FullName=data['full_name'],
            DateOfBirth=data.get('date_of_birth'),
            ClassName=data.get('class_name'),
            SchoolName=data.get('school_name'),
            ParentID=data['parent_id'],
            IsActive=data.get('is_active', True)
        )
        
        db.session.add(student)
        db.session.commit()
        return success_response(data=student.to_dict(), message='Student created successfully', status=201)
    except Exception as e:
        db.session.rollback()
        return error_response(f'Failed to create student: {str(e)}', status=500)

@admin_bp.route('/students/<int:student_id>', methods=['PUT'])
@role_required('admin')
def update_student(student_id):
    """Update student information."""
    try:
        student = Student.query.get(student_id)
        if not student:
            return error_response('Student not found', status=404)
        
        data = request.get_json()
        
        if 'full_name' in data:
            student.FullName = data['full_name']
        if 'date_of_birth' in data:
            student.DateOfBirth = data['date_of_birth']
        if 'class_name' in data:
            student.ClassName = data['class_name']
        if 'school_name' in data:
            student.SchoolName = data['school_name']
        if 'is_active' in data:
            student.IsActive = data['is_active']
        
        db.session.commit()
        return success_response(data=student.to_dict(), message='Student updated successfully')
    except Exception as e:
        db.session.rollback()
        return error_response(f'Failed to update student: {str(e)}', status=500)

@admin_bp.route('/students/<int:student_id>', methods=['DELETE'])
@role_required('admin')
def delete_student(student_id):
    """Delete student."""
    try:
        student = Student.query.get(student_id)
        if not student:
            return error_response('Student not found', status=404)
        
        db.session.delete(student)
        db.session.commit()
        return success_response(message='Student deleted successfully')
    except Exception as e:
        db.session.rollback()
        return error_response(f'Failed to delete student: {str(e)}', status=500)

# Statistics
@admin_bp.route('/statistics', methods=['GET'])
@role_required('admin')
def get_statistics():
    """Get system statistics."""
    try:
        stats = {
            'total_users': User.query.count(),
            'total_drivers': Driver.query.count(),
            'total_parents': Parent.query.count(),
            'total_students': Student.query.count(),
            'total_buses': Bus.query.count(),
            'active_buses': Bus.query.filter_by(status='active').count(),
            'total_routes': Route.query.count()
        }
        return success_response(data=stats)
    except Exception as e:
        return error_response(f'Failed to get statistics: {str(e)}', status=500)
