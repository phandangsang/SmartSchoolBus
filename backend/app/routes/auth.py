from flask import Blueprint, request
from flask_jwt_extended import create_access_token, get_jwt_identity
from app import db
from app.models import User, Driver, Parent
from app.utils.helpers import success_response, error_response, validate_required_fields
from app.utils.auth import token_required, get_current_user

auth_bp = Blueprint('auth', __name__, url_prefix='/api/auth')

@auth_bp.route('/register', methods=['POST'])
def register():
    """Register a new user."""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['username', 'password', 'full_name', 'phone', 'role']
        is_valid, error_msg = validate_required_fields(data, required_fields)
        if not is_valid:
            return error_response(error_msg)
        
        # Check if username already exists
        if User.query.filter_by(Username=data['username']).first():
            return error_response('Username already exists', status=400)
        
        # Check if phone already exists
        if User.query.filter_by(Phone=data['phone']).first():
            return error_response('Phone number already exists', status=400)
        
        # Validate role
        valid_roles = ['parent', 'driver']
        if data['role'].lower() not in valid_roles:
            return error_response('Invalid role. Must be parent or driver', status=400)
        
        # Create new user
        new_user = User(
            Username=data['username'],
            FullName=data['full_name'],
            Phone=data['phone'],
            Email=data.get('email', ''),
            Role=data['role'].lower(),
            IsActive=True
        )
        new_user.set_password(data['password'])
        
        db.session.add(new_user)
        db.session.commit()
        
        # Create role-specific profile
        if data['role'].lower() == 'driver':
            driver_profile = Driver(
                UserID=new_user.UserID,
                LicenseNumber=data.get('license_number', ''),
                Status='active'
            )
            db.session.add(driver_profile)
        elif data['role'].lower() == 'parent':
            parent_profile = Parent(
                UserID=new_user.UserID
            )
            db.session.add(parent_profile)
        
        db.session.commit()
        
        return success_response(
            data={'user': new_user.to_dict()},
            message='Registration successful'
        )
    
    except Exception as e:
        db.session.rollback()
        return error_response(f'Registration failed: {str(e)}', status=500)

@auth_bp.route('/login', methods=['POST'])
def login():
    """Login user and return JWT token."""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['username', 'password']  # Đổi từ email sang username
        is_valid, error_msg = validate_required_fields(data, required_fields)
        if not is_valid:
            return error_response(error_msg)
        
        # Find user by username
        user = User.query.filter_by(Username=data['username']).first()
        
        if not user or not user.check_password(data['password']):
            return error_response('Invalid username or password', status=401)
        
        if not user.IsActive:
            return error_response('Account is inactive', status=403)
        
        # Create access token - identity must be string
        access_token = create_access_token(identity=str(user.UserID))
        
        return success_response(
            data={
                'access_token': access_token,  # Đổi từ 'token' sang 'access_token'
                'user': user.to_dict()
            },
            message='Login successful'
        )
    
    except Exception as e:
        return error_response(f'Login failed: {str(e)}', status=500)

@auth_bp.route('/me', methods=['GET'])
@token_required
def get_current_user_info():
    """Get current user information."""
    try:
        user = get_current_user()
        if not user:
            return error_response('User not found', status=404)
        
        user_data = user.to_dict()
        
        # Add role-specific data
        if user.role == 'driver' and user.driver_profile:
            user_data['driver_profile'] = user.driver_profile.to_dict()
        elif user.role == 'parent' and user.parent_profile:
            user_data['parent_profile'] = user.parent_profile.to_dict()
        
        return success_response(data=user_data)
    
    except Exception as e:
        return error_response(f'Failed to get user info: {str(e)}', status=500)

@auth_bp.route('/change-password', methods=['POST'])
@token_required
def change_password():
    """Change user password."""
    try:
        user = get_current_user()
        if not user:
            return error_response('User not found', status=404)
        
        data = request.get_json()
        required_fields = ['current_password', 'new_password']
        is_valid, error_msg = validate_required_fields(data, required_fields)
        if not is_valid:
            return error_response(error_msg)
        
        # Verify current password
        if not user.check_password(data['current_password']):
            return error_response('Current password is incorrect')
        
        # Update password
        user.set_password(data['new_password'])
        db.session.commit()
        
        return success_response(message='Password changed successfully')
    
    except Exception as e:
        db.session.rollback()
        return error_response(f'Failed to change password: {str(e)}', status=500)
