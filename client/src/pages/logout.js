import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/img/bg.jpeg'; 

const Logout = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      <Box sx={{ textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          You have been logged out
        </Typography>
        <Typography variant="body1" gutterBottom>
          Thank you for using our application!
        </Typography>
        <Button variant="contained" color="primary" onClick={handleLoginRedirect}>
          Go to Login
        </Button>
      </Box>
    </Box>
  );
};

export default Logout;
