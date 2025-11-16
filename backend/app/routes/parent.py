from flask import Blueprint, request
from flask_jwt_extended import get_jwt_identity
from app import db
from app.models import Parent, Student, Bus, BusLocation
from app.utils.helpers import success_response, error_response, validate_required_fields
from app.utils.auth import token_required, role_required, get_current_user

parent_bp = Blueprint('parent', __name__, url_prefix='/api/parent')

@parent_bp.route('/profile', methods=['GET'])
@role_required('parent')
def get_parent_profile():
    """Get parent profile."""
    try:
        user = get_current_user()
        if not user or not user.parent_profile:
            return error_response('Parent profile not found', status=404)
        
        profile_data = user.parent_profile.to_dict()
        return success_response(data=profile_data)
    except Exception as e:
        return error_response(f'Failed to get profile: {str(e)}', status=500)

@parent_bp.route('/students', methods=['GET'])
@role_required('parent')
def get_students():
    """Get parent's students."""
    try:
        user = get_current_user()
        if not user or not user.parent_profile:
            return error_response('Parent profile not found', status=404)
        
        students = user.parent_profile.students
        students_data = []
        
        for student in students:
            student_data = student.to_dict()
            if student.assigned_bus:
                student_data['bus'] = student.assigned_bus.to_dict()
            if student.pickup_location:
                student_data['pickup_location'] = student.pickup_location.to_dict()
            if student.dropoff_location:
                student_data['dropoff_location'] = student.dropoff_location.to_dict()
            students_data.append(student_data)
        
        return success_response(data=students_data)
    except Exception as e:
        return error_response(f'Failed to get students: {str(e)}', status=500)

@parent_bp.route('/students', methods=['POST'])
@role_required('parent')
def add_student():
    """Add a new student."""
    try:
        user = get_current_user()
        if not user or not user.parent_profile:
            return error_response('Parent profile not found', status=404)
        
        data = request.get_json()
        required_fields = ['full_name', 'grade']
        is_valid, error_msg = validate_required_fields(data, required_fields)
        if not is_valid:
            return error_response(error_msg)
        
        student = Student(
            parent_id=user.parent_profile.id,
            full_name=data['full_name'],
            grade=data['grade'],
            school=data.get('school'),
            assigned_bus_id=data.get('assigned_bus_id'),
            pickup_location_id=data.get('pickup_location_id'),
            dropoff_location_id=data.get('dropoff_location_id')
        )
        
        db.session.add(student)
        db.session.commit()
        
        return success_response(
            data=student.to_dict(),
            message='Student added successfully',
            status=201
        )
    except Exception as e:
        db.session.rollback()
        return error_response(f'Failed to add student: {str(e)}', status=500)

@parent_bp.route('/students/<int:student_id>', methods=['PUT'])
@role_required('parent')
def update_student(student_id):
    """Update student information."""
    try:
        user = get_current_user()
        if not user or not user.parent_profile:
            return error_response('Parent profile not found', status=404)
        
        student = Student.query.filter_by(
            id=student_id,
            parent_id=user.parent_profile.id
        ).first()
        
        if not student:
            return error_response('Student not found', status=404)
        
        data = request.get_json()
        
        if 'full_name' in data:
            student.full_name = data['full_name']
        if 'grade' in data:
            student.grade = data['grade']
        if 'school' in data:
            student.school = data['school']
        
        db.session.commit()
        return success_response(data=student.to_dict(), message='Student updated successfully')
    except Exception as e:
        db.session.rollback()
        return error_response(f'Failed to update student: {str(e)}', status=500)

@parent_bp.route('/bus-location/<int:bus_id>', methods=['GET'])
@role_required('parent')
def get_bus_location(bus_id):
    """Get real-time location of a bus."""
    try:
        user = get_current_user()
        if not user or not user.parent_profile:
            return error_response('Parent profile not found', status=404)
        
        # Verify that this bus is assigned to one of parent's students
        student = Student.query.filter_by(
            parent_id=user.parent_profile.id,
            assigned_bus_id=bus_id
        ).first()
        
        if not student:
            return error_response('Unauthorized access to bus location', status=403)
        
        # Get latest tracking record
        tracking = BusLocation.query.filter_by(BusID=bus_id).order_by(
            BusLocation.RecordedAt.desc()
        ).first()
        
        if not tracking:
            return error_response('No tracking data available', status=404)
        
        return success_response(data=tracking.to_dict())
    except Exception as e:
        return error_response(f'Failed to get bus location: {str(e)}', status=500)

@parent_bp.route('/notifications', methods=['GET'])
@role_required('parent')
def get_notifications():
    """Get parent notifications (placeholder for future implementation)."""
    try:
        # This would connect to a notification system
        notifications = []
        return success_response(data=notifications)
    except Exception as e:
        return error_response(f'Failed to get notifications: {str(e)}', status=500)
