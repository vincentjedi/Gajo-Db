import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 6000 },
  { name: 'May', revenue: 8000 },
  { name: 'Jun', revenue: 7000 },
  { name: 'Jul', revenue: 9000 },
];

const Revenuesummary = () => {
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Revenue Summary
      </Typography>
      <Paper elevation={3} sx={{ p: 2, mb: 3, backgroundColor: '#f5f5f5' }}> {/* Update background color here */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1">Total Revenue</Typography>
            <Typography variant="h6">$50,000</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1">Transaction Volume</Typography>
            <Typography variant="h6">5000</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1">Average Transaction Value</Typography>
            <Typography variant="h6">$10</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1">Profit Margin</Typography>
            <Typography variant="h6">20%</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={3} sx={{ p: 2, backgroundColor: '#f5f5f5' }}> {/* Update background color here */}
        <Typography variant="subtitle1" gutterBottom>
          Revenue Trend
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default Revenuesummary;
