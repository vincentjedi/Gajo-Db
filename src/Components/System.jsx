import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

// Sample system data
const systems = [
  { id: 1, name: 'System A', version: 'v1.0', status: 'Active' },
  { id: 2, name: 'System B', version: 'v2.3', status: 'Inactive' },
  { id: 3, name: 'System C', version: 'v3.5', status: 'Active' },
  // Add more systems as needed
];

const System = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        System Management
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Version</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {systems.map((system) => (
              <TableRow key={system.id}>
                <TableCell>{system.id}</TableCell>
                <TableCell>{system.name}</TableCell>
                <TableCell>{system.version}</TableCell>
                <TableCell>{system.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default System;
