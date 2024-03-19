import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Swal from 'sweetalert2'

// Sample data of customers
const customers = [
  { id: 1, name: 'habel', email: 'habel@example.com', status: 'Active', registrationDate: '2022-03-01' },
  { id: 2, name: 'Vincent', email: 'vince@example.com', status: 'Inactive', registrationDate: '2022-03-05' },
  // Add more customers as needed
];

const Customer = () => {
  const handleEdit = (customerId) => {
    // Add logic to handle edit action
    console.log(`Edit customer with ID ${customerId}`);
  };

  const handleDelete = (customerId) => {
    // Add logic to handle delete action
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Customer Deleted.",
          icon: "success"
        });
      }
    });
    console.log(`Delete customer with ID ${customerId}`);
  };

  const handleStatusChange = (customerId, newStatus) => {
    // Add logic to update customer status
    console.log(`Change status of customer with ID ${customerId} to ${newStatus}`);
  };

  const handleBlock = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, block customer!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Blocked!",
          text: "Customer blocked!",
          icon: "success"
        });
      }
    });

  }


  return (
    <div>
      <h2>Customer Management</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Customer details table">
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
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.status === 'Active' ? <CheckCircleIcon color="success" /> : <BlockIcon color="error" />}</TableCell>
                <TableCell>{customer.registrationDate}</TableCell>
                <TableCell>
                  <IconButton aria-label="edit" onClick={() => handleEdit(customer.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" onClick={() => handleDelete(customer.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <Button
                    variant="contained"
                    onClick={() => {
                      handleStatusChange(customer.id, customer.status === 'Active' ? 'Inactive' : 'Active')
                      handleBlock();
                      
                    }}
                  >
                    {customer.status === 'Active' ? 'Block' : 'Activate'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Customer;
