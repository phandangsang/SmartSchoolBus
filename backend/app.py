import os
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate

from config.config import config
from app import db, bcrypt

def create_app(config_name=None):
    """Application factory pattern."""
    if config_name is None:
        config_name = os.getenv('FLASK_ENV', 'development')
    
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    
    # Initialize extensions
    db.init_app(app)
    bcrypt.init_app(app)
    CORS(app, resources={r"/api/*": {"origins": app.config['CORS_ORIGINS']}})
    JWTManager(app)
    Migrate(app, db)
    
    # Register blueprints
    from app.routes import auth_bp, admin_bp, driver_bp, parent_bp
    app.register_blueprint(auth_bp)
    app.register_blueprint(admin_bp)
    app.register_blueprint(driver_bp)
    app.register_blueprint(parent_bp)
    
    # Health check endpoint
    @app.route('/health')
    def health_check():
        return {'status': 'healthy', 'message': 'Smart School Bus API is running'}, 200
    
    @app.route('/')
    def index():
        return {
            'name': 'Smart School Bus Tracking System API',
            'version': '1.0.0',
            'status': 'active'
        }, 200
    
    # Database đã có sẵn users, không cần tạo admin
    with app.app_context():
        # Không tạo tables vì đã có database SQL Server
        # db.create_all()
        
        print("✓ Using existing SQL Server database: SmartSchoolBusDB")
        print("✓ Available accounts:")
        print("  - admin / 123456 (ADMIN)")
    return app

if __name__ == '__main__':
    app = create_app()
    port = int(os.getenv('PORT', 5000))
    host = os.getenv('HOST', '0.0.0.0')
    debug = os.getenv('DEBUG', 'True').lower() == 'true'
    
    print(f"""
    ╔═══════════════════════════════════════════════════════╗
    ║   Smart School Bus Tracking System - Backend API     ║
    ╠═══════════════════════════════════════════════════════╣
    ║   Server: http://{host}:{port}                     ║
    ║   Health: http://{host}:{port}/health              ║
    ║   Debug Mode: {debug}                                  ║
    ╚═══════════════════════════════════════════════════════╝
    """)
    
    app.run(host=host, port=port, debug=debug)
