import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from '../../service/ApiService';

function AdminPage() {
    const [adminName, setAdminName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAdminName = async () => {
            try {
                const response = await ApiService.getUserProfile();
                // Make sure response has the expected structure
                if (response && response.user && response.user.name) {
                    setAdminName(response.user.name);
                } else {
                    console.warn('Unexpected response structure:', response);
                }
            } catch (error) {
                console.error('Error fetching admin details:', error.message);
            }
        };

        fetchAdminName();
    }, []);

    return (
        <div className="admin-page">
            <h1 className="welcome-message">
                {adminName ? `Welcome, ${adminName}` : 'Welcome, Admin'}
            </h1>
            <div className="admin-actions">
                <button
                    className="admin-button"
                    onClick={() => navigate('/admin/manage-rooms')}
                >
                    Manage Rooms
                </button>
                <button
                    className="admin-button"
                    onClick={() => navigate('/admin/manage-bookings')}
                >
                    Manage Bookings
                </button>
            </div>
        </div>
    );
}

export default AdminPage;
