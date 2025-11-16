"""
Test kết nối database SQL Server
"""
from sqlalchemy import create_engine, text
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv('DATABASE_URL')
if not DATABASE_URL:
    DATABASE_URL = "mssql+pyodbc://sa:YourPassword@localhost/SmartSchoolBusDB?driver=ODBC+Driver+17+for+SQL+Server"
    print("⚠️  Sử dụng connection string mặc định")
    print("   Hãy cập nhật file .env với thông tin đúng!")
    print()

print(f"🔌 Đang kết nối tới database...")
print(f"   Connection: {DATABASE_URL.replace(DATABASE_URL.split('@')[0].split('//')[1], '***')}")
print()

try:
    engine = create_engine(DATABASE_URL, echo=False)
    
    with engine.connect() as conn:
        # Test 1: Kiểm tra version SQL Server
        result = conn.execute(text("SELECT @@VERSION"))
        version = result.fetchone()[0]
        print("✅ Kết nối thành công!")
        print(f"   SQL Server: {version.split('\\n')[0]}")
        print()
        
        # Test 2: Kiểm tra database
        result = conn.execute(text("SELECT DB_NAME()"))
        db_name = result.fetchone()[0]
        print(f"✅ Database: {db_name}")
        print()
        
        # Test 3: Kiểm tra tables
        print("📊 Các bảng trong database:")
        result = conn.execute(text("""
            SELECT TABLE_NAME 
            FROM INFORMATION_SCHEMA.TABLES 
            WHERE TABLE_TYPE = 'BASE TABLE'
            ORDER BY TABLE_NAME
        """))
        tables = result.fetchall()
        for table in tables:
            print(f"   - {table[0]}")
        print()
        
        # Test 4: Kiểm tra dữ liệu Users
        result = conn.execute(text("SELECT COUNT(*) FROM Users"))
        user_count = result.fetchone()[0]
        print(f"✅ Có {user_count} users trong database")
        
        # Hiển thị users
        if user_count > 0:
            result = conn.execute(text("""
                SELECT Username, FullName, Role, IsActive 
                FROM Users
            """))
            print("\n👥 Danh sách Users:")
            for row in result:
                status = "✓" if row[3] else "✗"
                print(f"   {status} {row[0]:15} | {row[1]:20} | {row[2]}")
        
        print()
        
        # Test 5: Kiểm tra Buses
        result = conn.execute(text("SELECT COUNT(*) FROM Buses"))
        bus_count = result.fetchone()[0]
        print(f"✅ Có {bus_count} xe buýt trong database")
        
        # Test 6: Kiểm tra Routes
        result = conn.execute(text("SELECT COUNT(*) FROM Routes"))
        route_count = result.fetchone()[0]
        print(f"✅ Có {route_count} tuyến đường trong database")
        
        # Test 7: Kiểm tra Students
        result = conn.execute(text("SELECT COUNT(*) FROM Students"))
        student_count = result.fetchone()[0]
        print(f"✅ Có {student_count} học sinh trong database")
        
        print()
        print("=" * 60)
        print("🎉 Database đã sẵn sàng sử dụng!")
        print("=" * 60)
        print()
        print("📌 Tài khoản đăng nhập:")
        print("   - Admin:     admin / 123456")
        print("   - Phụ huynh: phuhuynh1 / 123456")
        print("   - Tài xế:    taixe1 / 123456")
        print()
        
except Exception as e:
    print("❌ Lỗi kết nối database!")
    print()
    print(f"Chi tiết lỗi: {str(e)}")
    print()
    print("🔧 Cách khắc phục:")
    print("1. Kiểm tra SQL Server đang chạy")
    print("2. Kiểm tra username/password trong file .env")
    print("3. Kiểm tra đã cài ODBC Driver 17 for SQL Server")
    print("4. Chạy file datacnpm.sql để tạo database")
    print()
