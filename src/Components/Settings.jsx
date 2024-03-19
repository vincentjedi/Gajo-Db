import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

// Sample settings data
const settings = [
  { id: 1, name: 'Notification', description: 'Enable push notifications', status: 'Enabled' },
  { id: 2, name: 'Email Notifications', description: 'Send email notifications', status: 'Enabled' },
  { id: 3, name: 'Dark Mode', description: 'Enable dark mode theme', status: 'Disabled' },
  // Add more settings as needed
];

const SettingsManagement = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Settings Management
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {settings.map((setting) => (
              <TableRow key={setting.id}>
                <TableCell>{setting.id}</TableCell>
                <TableCell>{setting.name}</TableCell>
                <TableCell>{setting.description}</TableCell>
                <TableCell>{setting.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SettingsManagement;
