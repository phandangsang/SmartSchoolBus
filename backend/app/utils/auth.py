from functools import wraps
from flask import request, jsonify
from flask_jwt_extended import verify_jwt_in_request, get_jwt_identity
from app.models import User

def token_required(f):
    """Decorator to require JWT token."""
    @wraps(f)
    def decorated(*args, **kwargs):
        try:
            verify_jwt_in_request()
            return f(*args, **kwargs)
        except Exception as e:
            return jsonify({'error': 'Invalid or missing token', 'message': str(e)}), 401
    return decorated

def role_required(*roles):
    """Decorator to require specific role(s)."""
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            try:
                verify_jwt_in_request()
                user_id = get_jwt_identity()
                # Convert string to int for database lookup
                user = User.query.get(int(user_id))
                
                if not user:
                    return jsonify({'error': 'User not found'}), 404
                
                if user.Role.lower() not in [r.lower() for r in roles]:
                    return jsonify({'error': 'Insufficient permissions'}), 403
                
                return f(*args, **kwargs)
            except Exception as e:
                return jsonify({'error': 'Authentication error', 'message': str(e)}), 401
        return decorated_function
    return decorator

def get_current_user():
    """Get current authenticated user."""
    try:
        user_id = get_jwt_identity()
        # Convert string to int for database lookup
        return User.query.get(int(user_id))
    except:
        return None
