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
        
        # Create default admin account (username/password)
        from app.models import User
        admin = User.query.filter_by(Username='admin').first()
        if not admin:
            admin = User(
                Username='admin',
                FullName='System Administrator',
                Role='admin',
                IsActive=True
            )
            # set default password
            admin.set_password('123456')
            db.session.add(admin)
            db.session.commit()
            print("✓ Default admin account created!")
            print("  Username: admin")
            print("  Password: 123456")
        else:
            print("✓ Admin account already exists")
