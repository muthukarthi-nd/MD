import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './components/DashboardContent';
import Settings from './pages/DataTable'; 
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Logout from './pages/logout';

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const handleMenuClick = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    };

    const noSidebarNavbarRoutes = ['/', '/logout'];

    const showSidebarAndNavbar = !noSidebarNavbarRoutes.includes(location.pathname);

    return (
        <Box>
            {showSidebarAndNavbar && !sidebarOpen && <Navbar onMenuClick={handleMenuClick} />}
            {showSidebarAndNavbar && <Sidebar open={sidebarOpen} onClose={handleSidebarClose} />}
            <Box
                sx={{
                    transition: 'margin 0.3s',
                    marginLeft: showSidebarAndNavbar && sidebarOpen ? '250px' : '0',
                }}
            >
                <Routes>
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </Box>
        </Box>
    );
};

const WrappedApp = () => (
    <Router>
        <App />
    </Router>
);

export default WrappedApp;
