import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 250;

const Sidebar = ({ open, onClose }) => {
  const location = useLocation();

  return (
    <Drawer
      variant="persistent"
      open={open}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1a202c',
          color: '#fff',
        },
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" noWrap>
          Menu
        </Typography>
      </Box>

      <Divider />

      <List>
        {[
          { text: 'Dashboard', icon: <DashboardIcon />, path: '/Dashboard' },
          { text: 'Tables', icon: <TableChartIcon />, path: '/settings' },
          { text: 'Sign In', icon: <LoginIcon />, path: '/' },
          { text: 'Sign Out', icon: <LogoutIcon />, path: '/logout' },
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={location.pathname === item.path} 
              sx={{
                '&.Mui-selected': {
                  backgroundColor: '#2c374d', 
                  color: '#fff',
                },
              }}
            >
              <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />
    </Drawer>
  );
};

export default Sidebar;

