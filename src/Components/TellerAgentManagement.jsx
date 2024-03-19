import React from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import Swal from 'sweetalert2'

const tellerAgentData = [
    { id: 1, username: 'Vincent Kiti', email: 'kitivincent@gmail.com', role: 'Admin', status: 'Active' },
    { id: 2, username: 'Habel Jedi', email: 'habel@gmail.com', role: 'User', status: 'Inactive' },
    { id: 3, username: 'Allan Jedi', email: 'allan@gmail.com', role: 'User', status: 'Inactive' },
    { id: 4, username: 'Milcah Mbodze', email: 'milcah@gmail.com', role: 'User', status: 'Inactive' },
    { id: 5, username: 'Evans Kalu', email: 'evans@gmail.com', role: 'User', status: 'Inactive' },
    { id: 6, username: 'Meali Mwajedi', email: 'meali@gmail.com', role: 'User', status: 'Inactive' }
  // Add more tellers/agents as needed
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

const TellerAgentManagement = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Teller/Agent Management
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tellerAgentData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.status}</TableCell>
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
    </div>
  );
};

export default TellerAgentManagement;
