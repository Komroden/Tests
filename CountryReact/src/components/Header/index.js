import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import IconButton from '@mui/material/IconButton';
import {Favorite} from '@material-ui/icons';
import {useHistory} from "react-router-dom"


export  function Header() {
  const {push}=useHistory()
  const handlePushOne=() => {
    push('/')
  }
  const handlePushTwo=() => {
    push('/2')
  }
  
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar  style={{background: '#FFFFFF', height:'9vh'}} className="header" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography style={{fontFamily:'Lobster',
fontSize: '36px',
lineHeight: '45px',
color: '#7E2D27'}} className="title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          World’s Population
          </Typography>
          <Tabs
        
        
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="icon tabs example"
      >
            <Tab style={{display:'flex', flexDirection: 'column', justifyContent: 'center',color: 'rgba(0, 0, 0, 0.54)'}} label="1x3" value="1" icon={<Favorite />} aria-label="favorite" onClick={handlePushOne}/> 
            <Tab style={{display:'flex', flexDirection: 'column',color: 'rgba(0, 0, 0, 0.54)'}} label="2x3" value="2" icon={<Favorite />} aria-label="favorite" onClick={handlePushTwo} /> 
            <Tab style={{display:'flex', flexDirection: 'column',color: 'rgba(0, 0, 0, 0.54)'}} label="Smart" value="3" icon={<Favorite />} aria-label="favorite" /> 
            </Tabs>  
        </Toolbar>
      </AppBar>
    </Box>
  );
}