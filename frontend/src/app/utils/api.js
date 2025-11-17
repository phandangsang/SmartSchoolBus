// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Helper function để gọi API
const fetchAPI = async (endpoint, options = {}) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    const headers = {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...options.headers,
    };

    const config = {
        ...options,
        headers,
    };

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'API request failed');
        }

        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

// Auth APIs
export const authAPI = {
    register: async (userData) => {
        const data = await fetchAPI('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData),
        });
        return data.data;
    },

    login: async (username, password) => {
        const data = await fetchAPI('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
        });

        if (data.data && data.data.access_token) {
            localStorage.setItem('token', data.data.access_token);
            localStorage.setItem('userRole', data.data.user.role);
            localStorage.setItem('userName', data.data.user.full_name);
            localStorage.setItem('userId', data.data.user.id);
        }

        return data.data;
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userName');
        localStorage.removeItem('userId');
    },

    getCurrentUser: () => {
        if (typeof window === 'undefined') return null;

        const token = localStorage.getItem('token');
        if (!token) return null;

        return {
            userId: localStorage.getItem('userId'),
            role: localStorage.getItem('userRole'),
            name: localStorage.getItem('userName'),
        };
    },
};

// Admin APIs
export const adminAPI = {
    getDashboard: () => fetchAPI('/admin/dashboard'),
    getUsers: () => fetchAPI('/admin/users'),

    // Students
    getStudents: () => fetchAPI('/admin/students'),
    createStudent: (studentData) => fetchAPI('/admin/students', {
        method: 'POST',
        body: JSON.stringify(studentData),
    }),
    updateStudent: (studentId, studentData) => fetchAPI(`/admin/students/${studentId}`, {
        method: 'PUT',
        body: JSON.stringify(studentData),
    }),
    deleteStudent: (studentId) => fetchAPI(`/admin/students/${studentId}`, {
        method: 'DELETE',
    }),

    // Drivers
    getDrivers: () => fetchAPI('/admin/drivers'),
    createDriver: (driverData) => fetchAPI('/admin/drivers', {
        method: 'POST',
        body: JSON.stringify(driverData),
    }),
    updateDriver: (driverId, driverData) => fetchAPI(`/admin/drivers/${driverId}`, {
        method: 'PUT',
        body: JSON.stringify(driverData),
    }),
    deleteDriver: (driverId) => fetchAPI(`/admin/drivers/${driverId}`, {
        method: 'DELETE',
    }),

    // Parents
    getParents: () => fetchAPI('/admin/parents'),
    updateParent: (parentId, parentData) => fetchAPI(`/admin/parents/${parentId}`, {
        method: 'PUT',
        body: JSON.stringify(parentData),
    }),
    deleteParent: (parentId) => fetchAPI(`/admin/parents/${parentId}`, {
        method: 'DELETE',
    }),

    // Buses
    getBuses: () => fetchAPI('/admin/buses'),
    createBus: (busData) => fetchAPI('/admin/buses', {
        method: 'POST',
        body: JSON.stringify(busData),
    }),
    updateBus: (busId, busData) => fetchAPI(`/admin/buses/${busId}`, {
        method: 'PUT',
        body: JSON.stringify(busData),
    }),
    deleteBus: (busId) => fetchAPI(`/admin/buses/${busId}`, {
        method: 'DELETE',
    }),

    // Routes
    getRoutes: () => fetchAPI('/admin/routes'),
    createRoute: (routeData) => fetchAPI('/admin/routes', {
        method: 'POST',
        body: JSON.stringify(routeData),
    }),
    updateRoute: (routeId, routeData) => fetchAPI(`/admin/routes/${routeId}`, {
        method: 'PUT',
        body: JSON.stringify(routeData),
    }),
    deleteRoute: (routeId) => fetchAPI(`/admin/routes/${routeId}`, {
        method: 'DELETE',
    }),
    createUser: (userData) => fetchAPI('/admin/users', {
        method: 'POST',
        body: JSON.stringify(userData),
    }),
    createDriver: (driverData) => fetchAPI('/admin/drivers', {
        method: 'POST',
        body: JSON.stringify(driverData),
    }),
    createBus: (busData) => fetchAPI('/admin/buses', {
        method: 'POST',
        body: JSON.stringify(busData),
    }),
    createRoute: (routeData) => fetchAPI('/admin/routes', {
        method: 'POST',
        body: JSON.stringify(routeData),
    }),
};

// Driver APIs
export const driverAPI = {
    getDashboard: () => fetchAPI('/driver/dashboard'),
    getTrips: () => fetchAPI('/driver/trips'),
    startTrip: (tripId) => fetchAPI(`/driver/trips/${tripId}/start`, {
        method: 'POST',
    }),
    endTrip: (tripId) => fetchAPI(`/driver/trips/${tripId}/end`, {
        method: 'POST',
    }),
    updateLocation: (location) => fetchAPI('/driver/location', {
        method: 'POST',
        body: JSON.stringify(location),
    }),
};

// Parent APIs
export const parentAPI = {
    getDashboard: () => fetchAPI('/parent/dashboard'),
    getStudents: () => fetchAPI('/parent/students'),
    getBusLocation: (busId) => fetchAPI(`/parent/bus/${busId}/location`),
    getNotifications: () => fetchAPI('/parent/notifications'),
};

export default fetchAPI;
