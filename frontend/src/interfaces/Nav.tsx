import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu';
export {};

const Nav = () => {
    const [open, setOpen] = React.useState(false);

    const handleDrawer = () => setOpen(!open);

    return(
        <Box sx={{display: 'flex'}}>
            <AppBar position='static'>
                <Toolbar color="secondary">
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        onClick={handleDrawer}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'left' }}>App</Typography>
                </Toolbar>
                <Drawer open={open} onClose={handleDrawer}>
                    <Menu/>
                </Drawer>
            </AppBar>
        </Box>
    );
};

export default Nav;