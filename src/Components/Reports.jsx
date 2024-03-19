import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

// Sample report data
const reports = [
  { id: 1, name: 'Revenues', type: 'Monthly', status: 'Completed', generatedAt: '2022-03-01' },
  { id: 2, name: 'Customers', type: 'Weekly', status: 'InProgress', generatedAt: '2022-03-05' },
  { id: 3, name: 'Merchants', type: 'Yearly', status: 'Failed', generatedAt: '2022-03-10' },
  // Add more reports as needed
];

const Reports = () => {
  const handleDownload = (reportId) => {
    // Implement download functionality here
    console.log(`Download report ${reportId}`);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Reports
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Generated At</TableCell>
              <TableCell>Actions</TableCell> {/* New column for actions */}
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.id}</TableCell>
                <TableCell>{report.name}</TableCell>
                <TableCell>{report.type}</TableCell>
                <TableCell>{report.status}</TableCell>
                <TableCell>{report.generatedAt}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="download"
                    onClick={() => handleDownload(report.id)}
                  >
                    <DownloadIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Reports;
