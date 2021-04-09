import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import AddBooking from './components/AddBooking';
import UpdateBooking from './components/UpdateBooking';
import ViewBooking from './components/ViewBooking';
import DetailViewBooking from './DetailViewBooking'
import AddUser from './components/AddUser';
import ViewUser from './components/ViewUser';
import UpdateUser from './components/UpdateUser';
import ViewFeedback from './components/ViewFeedback';
import AddFeedback from './components/AddFeedback';
import AddBus from './components/AddBus';
import ViewBus from './components/ViewBus';
import Login from './components/Login';
import ViewBookingByUser from './components/ViewBookingByUser';

import { makeStyles,useTheme,withStyles  } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';


import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

var hist = createBrowserHistory();

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 0,
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);


const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },


  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },


}));


const drawerWidth = 240;

const useStyles1 = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
     padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    marginTop:0
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));



function App() {
  const classes = useStyles();
  const classes1 = useStyles1();

  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (

    

    
        
        
    <Router history={hist}>

      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes1.menuButton, open && classes1.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            blueBus
          </Typography>
        </Toolbar>
      </AppBar>
      <h1 id ="headingText">blueBus</h1>
      <Drawer
        className={classes1.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes1.drawerPaper,
        }}
      >
        <div className={classes1.drawerHeader}>
        <h1 style={{textAlign:"center",color:"blue"}}>blueBus</h1>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          
        </div>
        <div className={classes.root}>
          
     
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}> Admin</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li id = "listStyle"><Link id="linkStyle" className="nav-item" to="/viewbookings" onClick={handleDrawerClose}>{<h4>View Bookings</h4>}</Link></li>
            <li id = "listStyle"><Link id="linkStyle" className="nav-item" to="/user" onClick={handleDrawerClose}>{<h4>View Users</h4>}</Link></li>
            <li id = "listStyle"><Link id="linkStyle" className="nav-item" to="/viewfeedback" onClick={handleDrawerClose}>{<h4>View Feedback</h4>}</Link></li>
            <li id = "listStyle"><Link id="linkStyle" className="nav-link " to="/busoperator/addbus" onClick={handleDrawerClose}>{<h4>Add Bus</h4>}</Link></li>
           <li id = "listStyle"><Link Link id="linkStyle" className="nav-link " to="/admin/viewbus" onClick={handleDrawerClose}>{<h4>View Bus</h4>}</Link></li>
          </ul>
         
        </AccordionDetails>
      </Accordion>
     
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>User</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li id = "listStyle"> <Link id ="linkStyle" className="nav-item" to="/login" onClick={handleDrawerClose}>{<h4>Login</h4>}</Link></li>
            <li id = "listStyle"> <Link id ="linkStyle" className="nav-item" to="/" onClick={handleDrawerClose}>{<h4>SignUp / New User</h4>}</Link></li>
            <li id="listStyle"><Link id ="linkStyle" className="nav-item" to="/addbooking" onClick={handleDrawerClose}>{<h4>Add Booking</h4>}</Link></li>
            <li id="listStyle"><Link id ="linkStyle" className="nav-item" to="/feedback" onClick={handleDrawerClose}>{<h4>Add Feedback</h4>}</Link></li>
            
          </ul>
          
        </AccordionDetails>
      </Accordion>
    </div>
      </Drawer>
        <main
        className={clsx(classes1.content, {
          [classes.contentShift]: open,
        })}
      >
         {/* <div className={classes1.drawerHeader} />  */}
        
      </main> 


        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

        <Route exact path="/">
            <AddUser />
          </Route>

        <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/viewbookings">
            <ViewBooking />
          </Route>

          <Route exact path="/viewbookingsbyusername/:username" component ={ViewBookingByUser}>
          </Route>
          <Route exact path="/addbooking">
            <AddBooking />
          </Route>
          <Route exact path="/user">
            <ViewUser />
          </Route>
          <Route  path="/update/:id" component ={UpdateBooking}>
          </Route>
          <Route path="/detailview/:id" component={DetailViewBooking}></Route>

         
          
          <Route exact path="/viewfeedback">
            <ViewFeedback />
          </Route>
          
          <Route path="/busoperator/addbus">
            <AddBus />
          </Route>

          <Route path="/admin/viewbus">
            <ViewBus />
          </Route>

          <Route exact path="/feedback">
            <AddFeedback />
          </Route>
          <Route  path="/user/update/:username" component={UpdateUser}></Route>

          
         

        </Switch>
      </div> 
    </Router>
  );
}

export default App;
