import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const websiteViewsData = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [
    {
      label: 'Views',
      data: [60, 10, 30, 20, 50, 25, 40],
      backgroundColor: 'rgba(33, 150, 243, 0.6)', 
    },
  ],
};

const lineChartData = {
  labels: ['Apr', 'Jun', 'Aug', 'Oct', 'Dec'],
  datasets: [
    {
      label: 'Sales / Tasks',
      data: [100, 200, 300, 250, 400],
      borderColor: '#fff',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      tension: 0.4, 
    },
  ],
};

const Dashboard = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#2196f3', color: '#fff' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Website Views
              </Typography>
              <Bar data={websiteViewsData} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#4caf50', color: '#fff' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Daily Sales
              </Typography>
              <Line data={lineChartData} />
            </CardContent>
          </Card>
        </Grid>

        {/* Completed Tasks */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ backgroundColor: '#424242', color: '#fff' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Completed Tasks
              </Typography>
              <Line data={lineChartData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
