// Tài khoản admin mặc định
export const ADMIN_ACCOUNTS = [
    {
        email: 'admin@smartbus.com',
        password: 'admin123',
        name: 'Admin',
        role: 'admin'
    }
];

// Kiểm tra xác thực
export const checkAuth = () => {
    if (typeof window === 'undefined') return false;
    const userRole = localStorage.getItem('userRole');
    return userRole === 'admin';
};

// Lấy thông tin user
export const getUserInfo = () => {
    if (typeof window === 'undefined') return null;
    return {
        email: localStorage.getItem('userEmail'),
        role: localStorage.getItem('userRole')
    };
};

// Đăng xuất
export const logout = () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
};
