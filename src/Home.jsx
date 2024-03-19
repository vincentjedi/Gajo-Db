import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GavelIcon from '@mui/icons-material/Gavel';
import { useNavigate } from 'react-router-dom';
import gajologo from './Assets/gajologo.png';
import Dashboard from './Components/Dashboard';
import Revenuesummary from './Components/Revenuesummary';
import TellerAgentManagement from './Components/TellerAgentManagement';
import Accountmanagement from './Components/Accountmanagement';
import MerchantDetails from './Components/MerchantDetails';
import Customer from './Components/Customer';
import Transaction from './Components/Transaction';
import Settings from './Components/Settings';
import System from './Components/System';
import Reports from './Components/Reports';
import Audit from './Components/Audit';
import BulkPayments from './Components/BulkPayments';

const drawerWidth = 280;

const styles = {
  logo: {
    width: '60px',
    alignItems: 'start',
    justifyContent: 'start',
    position: 'relative',
    display: 'flex-start',
    marginRight: '150px'
  },
  icons: {
    marginLeft: '3rem',
  },
  sidebars: {
    padding: '0px',
  }
}

const theme = createTheme();

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const MiniDrawer = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [userFullName, setUserFullName] = useState('Admin'); // Change this to the actual user's full name

  const [currentPage, setCurrentpPage] = useState('Dashboard');

  const handleSidebarItemClicked = (page) => {
    setCurrentpPage(page)
  }

  const renderComponent = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Revenue Summary':
        return <Revenuesummary />;
        case 'Account Management':
        return <Accountmanagement />;
      case 'Teller/Agent Management':
        return <TellerAgentManagement />;
        case 'Merchant Management':
          return <MerchantDetails />;
          case 'Customer Management':
            return <Customer />;
            case 'Transaction Management':
        return <Transaction/>;
        case 'Bulk payment':
        return <BulkPayments />;
        case 'Settings Management':
        return <Settings />;
        case 'System Management':
        return <System />;
        case 'Reports':
        return <Reports />;
        case 'Audit Trail':
        return <Audit />;
      default:
        return null;
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} color='warning'>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Gajo Money
            </Typography>

            <IconButton color="inherit" aria-label="show new notifications">
              <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
              </Badge>
              </IconButton>

            <IconButton color="inherit" aria-label="show new mails">
              <Badge badgeContent={2} color='secondary'>
              <MailIcon />
              </Badge>
              
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircleIcon style={styles.icons}/>
              <Typography variant="subtitle1" noWrap>{userFullName}</Typography>
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <MenuItem onClick={() => {
                handleClose();
                navigate('/');
              }}>Logout</MenuItem>
            </Menu>

          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}  PaperProps={{
    sx: {
      backgroundColor: "orange",
      color: "black",
    }
  }}>
          <DrawerHeader>
            <Typography variant="h6" component="div">
              <img src={gajologo} alt="Gajo Money" style={styles.logo} />
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[
              { text: 'Dashboard', icon: <DashboardIcon />, path:'/dashboard' },
              { text: 'Revenue Summary', icon: <PaymentIcon />, path:'/revenue'},
              { text: 'Account Management', icon: <AssessmentIcon />, path:'/account-management'},
              { text: 'Teller/Agent Management', icon: <PersonIcon />, path:'/teller-agent-management'},
              { text: 'Merchant Management', icon: <StorefrontIcon />, path:'/merchant-management'},
              { text: 'Customer Management', icon: <PeopleAltIcon />, path:'/customer-management'},
              { text: 'Transaction Management', icon: <AccountBoxIcon />, path:'/transaction-management'},
              { text: 'Bulk Payment', icon: <PaymentIcon />, path:'/bulk-payment'},
              { text: 'Settings Management', icon: <SettingsIcon />, path:'/settings-management' },
              { text: 'System Management',  icon: <SystemUpdateAltIcon />, path:'/system-management' },
              { text: 'Reports',  icon: <ListAltIcon />, path:'/reports' },
              { text: 'Audit Trail',  icon: <GavelIcon />, path:'/audit-trail' }
            ].map((item, index) => (
              <ListItem key={item.text || index} disablePadding sx={{ display: 'block', marginTop: '-8px' }}>
                <ListItemButton
                  sx={{
                    minHeight: 45,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}

                  onClick={() => handleSidebarItemClicked(item.text)}
                  
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon ? item.icon : null}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          
          {renderComponent()};
        
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default MiniDrawer;
