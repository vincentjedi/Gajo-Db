// Login.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, CssBaseline, Paper, Checkbox, FormControlLabel, AppBar, Toolbar, Box, MenuItem, Select } from '@mui/material';
import { useNavigate} from 'react-router-dom';
import gajologo from './Assets/gajologo.png';
import Divider from '@mui/material/Divider';
import Swal from 'sweetalert2'

const Login = () => {
  const styles = {
    root: {
      backgroundImage: 'linear-gradient(to bottom right, #4CAF50, #2196F3)', // Gradient background color for the page
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '16px',
      backgroundColor: '#ffffff', // Background color for the login form
      borderRadius: '8px',
      marginTop: '64px',
    },
    form: {
      width: '100%',
      marginTop: '8px',
    },
    submit: {
      margin: '24px 0 16px',
    },
    navbar: {
      backgroundImage: 'linear-gradient(to right, #4CAF50, #2196F3)', // Gradient background color for the navbar
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)', // Adding box shadow
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: 1,
    },
    bottomNavbar: {
      backgroundColor: '#212121', // Background color for the bottom navbar
      color: '#ffffff',
      padding: '8px',
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
    },
    logo: {
      width: '80px',
    },
    languageSelect: {
      marginLeft: 'auto',
      color: '#fff'
    },
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [language, setLanguage] = useState('en');
  

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    const Toast = Swal.mixin({
      toast: true,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Signed in successfully"
    });
    navigate('/home');
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    // You can implement language change logic here
  };

  const navigate = useNavigate();

  return (
    <div style={styles.root}>
      <CssBaseline />
      <AppBar position="static" sx={styles.navbar}>
        <Toolbar>
          <Typography variant="h6" component="div">
            <img src={gajologo} alt="Gajo Money" style={styles.logo} />
          </Typography>
          <Select
            value={language}
            onChange={handleLanguageChange}
            variant="outlined"
            sx={styles.languageSelect}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="fr">French</MenuItem>
            <MenuItem value="es">Spanish</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>

      <div style={{ marginTop: '64px' }}>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={styles.paper}>
          <Typography component="h1" variant="h5">
            Gajo Money
          </Typography> <Divider />
          <Typography component="h1" variant="h5">
            Admin
          </Typography>
          <form sx={styles.form} onSubmit={handleLogin}>
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={styles.submit}

            >
              Sign In
            </Button>
          </form>
        </Paper>
      </Container>
      </div>
      <Box sx={styles.bottomNavbar}>
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} Gajo Money. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};


export default Login;
