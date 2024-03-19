import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  { name: 'Jan', customers: 400, revenues: 2400, transfers: 3200, refunds: 1900, newCustomers: 300, merchants: 200 },
  { name: 'Feb', customers: 300, revenues: 1398, transfers: 2800, refunds: 2000, newCustomers: 400, merchants: 100 },
  { name: 'Mar', customers: 200, revenues: 9800, transfers: 2200, refunds: 2100, newCustomers: 500, merchants: 400 },
  { name: 'Apr', customers: 278, revenues: 3908, transfers: 1908, refunds: 1900, newCustomers: 300, merchants: 400 },
  { name: 'May', customers: 189, revenues: 4800, transfers: 2380, refunds: 2500, newCustomers: 200, merchants: 300 },
  { name: 'Jun', customers: 239, revenues: 3800, transfers: 2500, refunds: 2100, newCustomers: 350, merchants: 300 },
  { name: 'Jul', customers: 349, revenues: 4300, transfers: 2100, refunds: 2300, newCustomers: 400, merchants: 200 },
];

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: '#f0f8ff', // Update background color here
}));

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <StyledPaper>
            <Typography variant="h6">Total Customers</Typography>
            <Typography variant="h3">4897</Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledPaper>
            <Typography variant="h6">Total Revenues</Typography>
            <Typography variant="h3">$45,782</Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledPaper>
            <Typography variant="h6">Money Transfers</Typography>
            <Typography variant="h3">3124</Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledPaper>
            <Typography variant="h6">Total Refunds</Typography>
            <Typography variant="h3">$5,723</Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledPaper>
            <Typography variant="h6">New Customers</Typography>
            <Typography variant="h3">932</Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledPaper>
            <Typography variant="h6">Merchants</Typography>
            <Typography variant="h3">625</Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12}>
          <StyledPaper>
            <Typography variant="h6">Monthly Statistics</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="customers" fill="#8884d8" name="Customers" />
                <Bar dataKey="revenues" fill="#82ca9d" name="Revenues" />
                <Bar dataKey="transfers" fill="#ffc658" name="Transfers" />
                <Bar dataKey="refunds" fill="#ff6666" name="Refunds" />
                <Bar dataKey="newCustomers" fill="#888888" name="New Customers" />
                <Bar dataKey="merchants" fill="#8a2be2" name="Merchants" />
              </BarChart>
            </ResponsiveContainer>
          </StyledPaper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
