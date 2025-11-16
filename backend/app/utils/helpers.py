from flask import jsonify

def success_response(data=None, message='Success', status=200):
    """Create a success response."""
    response = {
        'success': True,
        'message': message
    }
    if data is not None:
        response['data'] = data
    return jsonify(response), status

def error_response(message='Error', errors=None, status=400):
    """Create an error response."""
    response = {
        'success': False,
        'message': message
    }
    if errors is not None:
        response['errors'] = errors
    return jsonify(response), status

def validate_required_fields(data, required_fields):
    """Validate that all required fields are present."""
    missing_fields = []
    for field in required_fields:
        if field not in data or data[field] is None or data[field] == '':
            missing_fields.append(field)
    
    if missing_fields:
        return False, f"Missing required fields: {', '.join(missing_fields)}"
    return True, None
