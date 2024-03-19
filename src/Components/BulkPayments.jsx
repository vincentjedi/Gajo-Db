import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

// Sample bulk payment data
const bulkPayments = [
  { id: 1, date: '2024-03-14', amount: 1000, status: 'Completed' },
  { id: 2, date: '2024-03-15', amount: 750, status: 'Pending' },
  { id: 3, date: '2024-03-14', amount: 1000, status: 'Completed' },
  { id: 4, date: '2024-03-15', amount: 550, status: 'Completed' },
  { id: 5, date: '2024-03-14', amount: 900, status: 'Completed' },
  { id: 6, date: '2024-03-15', amount: 450, status: 'Pending' },
  // Add more bulk payments as needed
];

const BulkPayments = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Bulk Payment Details
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bulkPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.id}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{payment.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BulkPayments;
