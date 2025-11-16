import pyodbc

def get_connection():
    conn_str = (
        "DRIVER={ODBC Driver 18 for SQL Server};"
        "SERVER=localhost,1433;"
        "DATABASE=SmartSchoolBusDB;"
        "UID=sb_user;"
        "PWD=123456;"
        "TrustServerCertificate=yes;"
    )
    return pyodbc.connect(conn_str)
