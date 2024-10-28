import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ onMenuClick }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={onMenuClick}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">My Dashboard</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
