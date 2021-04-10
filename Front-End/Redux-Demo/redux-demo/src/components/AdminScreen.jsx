import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AdminScreen() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} >
      
      <Paper square style={{display:"flex",justifyContent:"center",marginTop:'-2rem'}}>
        
        <Tabs
        
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
        
                <Tab label="Add Bus" to="/busoperator/addbus" component={Link} />
                <Tab label="View User" to="/user" component={Link}/>
                <Tab label="View Bus" to="/admin/viewbus" component={Link}/>
                <Tab label="View Booking" to="/viewbookings" component={Link}/>
                <Tab label="View Feedback" to="/viewfeedback" component={Link}/>
                <Tab label="Bus Operator" to="/viewfeedback" component={Link}/>
                
                <Tab label="Logout" to="/" component={Link}/>
          
        </Tabs>
      </Paper>

      
    </div>
  );
} 