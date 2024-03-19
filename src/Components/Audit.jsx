import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

// Sample audit trail data
const auditTrail = [
  { id: 1, action: 'Login', user: 'Admin', timestamp: '2022-03-01T08:00:00' },
  { id: 2, action: 'Update Settings', user: 'Vincent Kiti', timestamp: '2022-03-02T10:30:00' },
  { id: 3, action: 'View Reports', user: 'Habel Jedi', timestamp: '2022-03-03T14:45:00' },
  // Add more audit trail entries as needed
];

const Audit = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Audit Trail
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {auditTrail.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>{entry.id}</TableCell>
                <TableCell>{entry.action}</TableCell>
                <TableCell>{entry.user}</TableCell>
                <TableCell>{new Date(entry.timestamp).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Audit;
