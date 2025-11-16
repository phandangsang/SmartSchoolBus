# Import all route blueprints
from app.routes.auth import auth_bp
from app.routes.admin import admin_bp
from app.routes.driver import driver_bp
from app.routes.parent import parent_bp

__all__ = ['auth_bp', 'admin_bp', 'driver_bp', 'parent_bp']
