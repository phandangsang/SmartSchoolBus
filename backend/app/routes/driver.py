from flask import Blueprint, request
from flask_jwt_extended import get_jwt_identity
from datetime import datetime
from app import db
from app.models import Driver, Bus, BusLocation
from app.utils.helpers import success_response, error_response, validate_required_fields
from app.utils.auth import token_required, role_required, get_current_user

driver_bp = Blueprint('driver', __name__, url_prefix='/api/driver')

@driver_bp.route('/profile', methods=['GET'])
@role_required('driver')
def get_driver_profile():
    """Get driver profile."""
    try:
        user = get_current_user()
        if not user or not user.driver_profile:
            return error_response('Driver profile not found', status=404)
        
        profile_data = user.driver_profile.to_dict()
        return success_response(data=profile_data)
    except Exception as e:
        return error_response(f'Failed to get profile: {str(e)}', status=500)

@driver_bp.route('/assigned-bus', methods=['GET'])
@role_required('driver')
def get_assigned_bus():
    """Get driver's assigned bus."""
    try:
        user = get_current_user()
        if not user or not user.driver_profile:
            return error_response('Driver profile not found', status=404)
        
        driver = user.driver_profile
        if not driver.assigned_bus:
            return error_response('No bus assigned', status=404)
        
        bus_data = driver.assigned_bus.to_dict()
        if driver.assigned_bus.route:
            bus_data['route'] = driver.assigned_bus.route.to_dict()
        
        return success_response(data=bus_data)
    except Exception as e:
        return error_response(f'Failed to get assigned bus: {str(e)}', status=500)

@driver_bp.route('/update-location', methods=['POST'])
@role_required('driver')
def update_bus_location():
    """Update bus location (GPS tracking)."""
    try:
        user = get_current_user()
        if not user or not user.driver_profile:
            return error_response('Driver profile not found', status=404)
        
        driver = user.driver_profile
        if not driver.assigned_bus_id:
            return error_response('No bus assigned', status=404)
        
        data = request.get_json()
        required_fields = ['latitude', 'longitude']
        is_valid, error_msg = validate_required_fields(data, required_fields)
        if not is_valid:
            return error_response(error_msg)
        
        # Create tracking record
        tracking = BusLocation(
            BusID=driver.assigned_bus_id,
            Latitude=data['latitude'],
            Longitude=data['longitude'],
            Speed=data.get('speed'),
            Heading=data.get('heading'),
            RecordedAt=datetime.utcnow()
        )
        
        db.session.add(tracking)
        db.session.commit()
        
        return success_response(
            data=tracking.to_dict(),
            message='Location updated successfully'
        )
    except Exception as e:
        db.session.rollback()
        return error_response(f'Failed to update location: {str(e)}', status=500)

@driver_bp.route('/students', methods=['GET'])
@role_required('driver')
def get_assigned_students():
    """Get students assigned to driver's bus."""
    try:
        user = get_current_user()
        if not user or not user.driver_profile:
            return error_response('Driver profile not found', status=404)
        
        driver = user.driver_profile
        if not driver.assigned_bus:
            return error_response('No bus assigned', status=404)
        
        students = driver.assigned_bus.students
        return success_response(data=[student.to_dict() for student in students])
    except Exception as e:
        return error_response(f'Failed to get students: {str(e)}', status=500)

@driver_bp.route('/route', methods=['GET'])
@role_required('driver')
def get_route():
    """Get driver's route information."""
    try:
        user = get_current_user()
        if not user or not user.driver_profile:
            return error_response('Driver profile not found', status=404)
        
        driver = user.driver_profile
        if not driver.assigned_bus or not driver.assigned_bus.route:
            return error_response('No route assigned', status=404)
        
        route = driver.assigned_bus.route
        route_data = route.to_dict()
        route_data['locations'] = [loc.to_dict() for loc in route.locations]
        
        return success_response(data=route_data)
    except Exception as e:
        return error_response(f'Failed to get route: {str(e)}', status=500)
