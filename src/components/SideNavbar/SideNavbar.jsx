import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Divider } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { FaHamburger } from 'react-icons/fa';
import { TbChevronLeft } from 'react-icons/tb';
import { IoHome } from 'react-icons/io5';
import { MdBorderColor } from 'react-icons/md';
import { BiSolidShoppingBagAlt } from 'react-icons/bi';
import { SlSupport } from 'react-icons/sl';
import {RiLogoutBoxLine} from 'react-icons/ri'; 
import DotRing from '../DotRing/DotRing';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import './styles.scss';

const drawerWidth = 240;

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
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  paddingTop: '2rem',
  gap: '2rem',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  backgroundColor: '#1d1d23',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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
}));

function SideNavbar() {
  const [open, setOpen] = React.useState(false);
  console.log(open, 'open');

  const handleDrawerOpen = () => setOpen(true);

  const handleDrawerClose = () => setOpen(false);

  

  const sideNavOpt = React.useMemo(
    () => [
      {
        optId: 1,
        icon: <IoHome />,
        title: 'Home',
      },
      {
        optId: 2,
        icon: <MdBorderColor />,
        title: 'Orders',
      },
      {
        optId: 3,
        icon: <BiSolidShoppingBagAlt />,
        title: 'Products',
      },
      {
        optId: 4,
        icon: <SlSupport />,
        title: 'Support',
      },
      {
        optId: 5,
        icon: <RiLogoutBoxLine />,
        title: 'logout',
      },
    ],
    []
  );

  return (
    <Box className="sideNavMainWrapperStyles">
      <Drawer variant="permanent" open={open} className="sideNavDrawerStyles">
        <DotRing />
        <DrawerHeader>
          {open ? (
            <TbChevronLeft
              onClick={handleDrawerClose}
              className="burgerBtnClose"
            />
          ) : (
            <span className="burgerBtnContainer">
              <FaHamburger onClick={handleDrawerOpen} className="burgerBtn" />
            </span>
          )}
        </DrawerHeader>

        <Divider className="sideNavOptDivider" />

        <List className={`${!open && 'closeSideNavStyles'}`}>
          {sideNavOpt.map((item) => (
            <ListItem
              key={item.optId}
              disablePadding
              className="sideNavOptMainStyles"
            >
              <ListItemButton
                sx={{
                  justifyContent: open ? 'initial' : 'center',
                }}
                className="sideNavOptStyles"
              >
                {open ? (
                  <div className="sideNavOptionBtn">
                    {item.icon}
                    {item.title}
                  </div>
                ) : (
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}
        <h2 style={{ display: 'flex' }}>Dashboard</h2>
      </Box>
    </Box>
  );
}

export default SideNavbar;
