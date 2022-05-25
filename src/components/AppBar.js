import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
 
    return (
    <Box sx={{ flexGrow: 3}}>
      <AppBar position="static" sx={{height:80}}>
        <Toolbar>
      
          <Typography variant="h6"  component="div" sx={{ flexGrow: 1 ,color:"white"}}>
            Library Mangement System
          </Typography>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}