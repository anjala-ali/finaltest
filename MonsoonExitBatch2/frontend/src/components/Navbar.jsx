//Write your missing code here
import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > */}
            {/* <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EmployeeApp
          </Typography>
          <Link to="/">
          <Button variant="contained">HOME</Button>
          </Link>
          <Link to="/add">
          <Button variant="contained">ADD</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  
    </div>
  )
}

export default Navbar




