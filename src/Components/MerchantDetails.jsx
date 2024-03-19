import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, TablePagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Swal from 'sweetalert2';

// Sample data of merchants
const merchants = [
  { id: 1, name: 'Milcah', email: 'milcah@example.com', status: 'Active', registrationDate: '2022-03-01' },
  { id: 2, name: 'Evans', email: 'evans@example.com', status: 'Inactive', registrationDate: '2022-03-05' },
  { id: 3, name: 'Milcah', email: 'milcah@example.com', status: 'Active', registrationDate: '2022-03-01' },
  { id: 4, name: 'Evans', email: 'evans@example.com', status: 'Inactive', registrationDate: '2022-03-05' },
  { id: 5, name: 'Milcah', email: 'milcah@example.com', status: 'Active', registrationDate: '2022-03-01' },
  { id: 6, name: 'Evans', email: 'evans@example.com', status: 'Inactive', registrationDate: '2022-03-05' },
  { id: 7, name: 'Milcah', email: 'milcah@example.com', status: 'Active', registrationDate: '2022-03-01' },
  { id: 8, name: 'Evans', email: 'evans@example.com', status: 'Inactive', registrationDate: '2022-03-05' },
  { id: 9, name: 'Milcah', email: 'milcah@example.com', status: 'Active', registrationDate: '2022-03-01' },
  { id: 10, name: 'Evans', email: 'evans@example.com', status: 'Inactive', registrationDate: '2022-03-05' }
  // Add more merchants as needed
];

const handleDelete = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
}

const MerchantDetails = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedMerchants = merchants.slice(startIndex, endIndex);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Merchant Details
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Merchant details table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Registration Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedMerchants.map((merchant) => (
              <TableRow key={merchant.id}>
                <TableCell>{merchant.name}</TableCell>
                <TableCell>{merchant.email}</TableCell>
                <TableCell>{merchant.status === 'Active' ? <CheckCircleIcon color="success" /> : <BlockIcon color="error" />}</TableCell>
                <TableCell>{merchant.registrationDate}</TableCell>
                <TableCell>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={merchants.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default MerchantDetails;
