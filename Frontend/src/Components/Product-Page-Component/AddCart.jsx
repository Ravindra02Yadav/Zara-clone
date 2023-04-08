import * as React from 'react';
import { Button, Divider } from '@mui/material';
import { Menu } from '@mui/material';
import { MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DrawerBody from './DrawerBody';
import { useDispatch } from 'react-redux';
import { getCart, postCart } from '../../Redux/App/action';

const drawerWidth = 382;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AddCart({ data }) {
  const dispatch = useDispatch();
  const [val, setVal] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpend(true);
    dispatch(postCart(data)).then(() => {
      dispatch(getCart())
    })
  };

  const handleCloseButton = () => {
    setAnchorEl(null);
    setOpend(true);
  };
  const theme = useTheme();
  const [opend, setOpend] = React.useState(false);

  // const combinefunctin =()=>{
  
  // }

  // const handleDrawerOpen = () => {
  //   setOpend(true);
  // };

  const handleDrawerClose = () => {
    setOpend(false);
  };



  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AddIcon sx={{ fontSize: "15px", color: "gray" }} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseButton}


        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <MenuItem
          onClick={handleClose}
          color="inherit"
          aria-label="open drawer"
          edge="end"
          sx={{ ...(opend && { display: 'none' }), fontSize: "10px", minWidth: "220px" }}
          >XS (UK XS)</MenuItem>

        <MenuItem
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleClose}
          sx={{ ...(opend && { display: 'none' }), fontSize: "10px", minWidth: "220px" }}
          >S (UK S)</MenuItem>

        <MenuItem
          color="inherit"
          aria-label="open drawer"
          onClick={handleClose}
          edge="end"
          sx={{ ...(opend && { display: 'none' }), fontSize: "10px", minWidth: "220px" }}
          >M (UK M)</MenuItem>

        <MenuItem
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleClose}
          sx={{ ...(opend && { display: 'none' }), fontSize: "10px", minWidth: "220px" }}
          >L (UK L)</MenuItem>

        <MenuItem
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleClose}
          sx={{ ...(opend && { display: 'none' }), fontSize: "10px", minWidth: "220px" }}
          >XL (UK XL)</MenuItem>
        <Divider />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <MenuItem
            sx={{ fontSize: "10px" }}
            onClick={handleCloseButton}>FIND YOUR SIZE</MenuItem><div> </div>
          <MenuItem
            sx={{ fontSize: "10px" }}

            onClick={handleCloseButton}>SIZE GUIDE</MenuItem>
        </div>
      </Menu>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="temporary"
        anchor="right"
        open={opend}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <CloseIcon /> : <CloseIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          <DrawerBody key={data.id} />
        </List>

      </Drawer>
    </div>
  );
}
