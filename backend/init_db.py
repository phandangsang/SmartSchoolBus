"""Initialize database migrations."""
import os
import sys

# Add parent directory to path
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

from app import create_app, db

app = create_app()

if __name__ == '__main__':
    with app.app_context():
        # Create all tables
        db.create_all()
        print("✓ Database tables created successfully!")
        
        # Create default admin account
        from app.models import User
        admin = User.query.filter_by(email='admin@smartbus.com').first()
        if not admin:
            admin = User(
                email='admin@smartbus.com',
                full_name='System Administrator',
                role='admin',
                is_active=True
            )
            admin.set_password('admin123')
            db.session.add(admin)
            db.session.commit()
            print("✓ Default admin account created!")
            print("  Email: admin@smartbus.com")
            print("  Password: admin123")
        else:
            print("✓ Admin account already exists")
