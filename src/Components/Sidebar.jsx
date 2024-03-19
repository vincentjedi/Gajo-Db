// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GavelIcon from '@mui/icons-material/Gavel';


const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    
    <Drawer
      variant="permanent"
      sx={{
        width: 310,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 310,
          boxSizing: 'border-box',
        },
      }}
    >
    
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Revenue Summary" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/revenue-summary/item-1">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Item 1" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/revenue-summary/item-2">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Item 2" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={Link} to="/account-management">
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Account Management" />
        </ListItem>
        <ListItem button component={Link} to="/teller-agent-management">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Teller/Agent Management" />
        </ListItem>
        <ListItem button component={Link} to="/merchant-management">
          <ListItemIcon>
            <StorefrontIcon />
          </ListItemIcon>
          <ListItemText primary="Merchant Management" />
        </ListItem>
        <ListItem button component={Link} to="/customer-management">
          <ListItemIcon>
            <PeopleAltIcon />
          </ListItemIcon>
          <ListItemText primary="Customer Management" />
        </ListItem>
        <ListItem button component={Link} to="/transaction-management">
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Transaction Management" />
        </ListItem>
        <ListItem button component={Link} to="/bulk-payment">
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary="Bulk Payment" />
        </ListItem>
        <ListItem button component={Link} to="/settings-management">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings Management" />
        </ListItem>
        <ListItem button component={Link} to="/system-management">
          <ListItemIcon>
            <SystemUpdateAltIcon />
          </ListItemIcon>
          <ListItemText primary="System Management" />
        </ListItem>
        <ListItem button component={Link} to="/reports">
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button component={Link} to="/audit-trail">
          <ListItemIcon>
            <GavelIcon />
          </ListItemIcon>
          <ListItemText primary="Audit Trail" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
