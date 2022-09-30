import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

function Navbar() {
    return(
        <>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Trainee Portal</Typography>
            <Button color="inherit" href="/trainee">
               TRAINEE
            </Button>
            <Button color="inherit" href="/textfield-demo">
               TEXTFIELD DEMO
            </Button>
            <Button color="inherit" href="/input-demo">
               INPUT DEMO
            </Button>
            <Button color="inherit" href="/children-demo">
               CHILDREN DEMO
            </Button>
            <Button color="inherit" href="/login">
               LOGOUT
            </Button>
          </Toolbar>
        </AppBar>
        </>
    )
}  

export default Navbar;