import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

const initialUsers = [
  { id: 1, username: 'Vincent Kiti', email: 'kitivincent@gmail.com', role: 'Admin', status: 'Active' },
  { id: 2, username: 'Habel Jedi', email: 'habel@gmail.com', role: 'User', status: 'Inactive' },
  { id: 3, username: 'Allan Jedi', email: 'allan@gmail.com', role: 'User', status: 'Inactive' },
  { id: 4, username: 'Milcah Mbodze', email: 'milcah@gmail.com', role: 'User', status: 'Inactive' },
  { id: 5, username: 'Evans Kalu', email: 'evans@gmail.com', role: 'User', status: 'Inactive' },
  { id: 6, username: 'Meali Mwajedi', email: 'meali@gmail.com', role: 'User', status: 'Inactive' }
];

const Accountmanagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Account Management
      </Typography>
      <TextField
        label="Search by Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" size="small">
                    Edit
                  </Button>
                  {/* Add more actions as needed */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Accountmanagement;
