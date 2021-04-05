import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';


import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

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



// const drawerWidth = "280px";
// const useStyles = makeStyles((theme) => ({
//   root: {
      
//       display: 'flex',
//       width: '100%',
              
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     //flexGrow: 1,
//   },
//   appBar: {
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     //width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-start',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft:0,
//   },
//   contentShift: {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));

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

    

    
        
        
    <Router>
{/* 
      <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  {<h3>Online Bus Booking</h3>}
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
      <div> */}
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
            <li id = "listStyle"><Link id="linkStyle" className="nav-item" to="/" onClick={handleDrawerClose}>{<h4>View Bookings</h4>}</Link></li>
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
            <li id = "listStyle"> <Link id ="linkStyle" className="nav-item" to="/user/add" onClick={handleDrawerClose}>{<h4>Add User</h4>}</Link></li>
            <li id="listStyle"><Link id ="linkStyle" className="nav-item" to="/add" onClick={handleDrawerClose}>{<h4>Add Booking</h4>}</Link></li>
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
        <div className={classes1.drawerHeader} />
        
      </main>
    {/* </div>
      <TreeView 
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}>

          <TreeItem nodeId="1" label={<h3>Online Bus Booking</h3>}>
            <TreeItem nodeId="2" label={<h4>Admin</h4>}>
                 <Link className="nav-item" to="/">View Bookings</Link>
                  <Link className="nav-item" to="/user">View Users</Link>
            </TreeItem>
            <TreeItem nodeId="3" label={<h4>User</h4>}>
                  <Link className="nav-item" to="/user/add">Add User</Link>
                  <Link className="nav-item" to="/add">Add Booking</Link>
            </TreeItem>
          </TreeItem>
        </TreeView> */}
                {/* <TreeItem nodeId="2" label={<h5>Admin</h5>}/>
                  <Link className="nav-item" to="/">View Bookings</Link>
                  <Link className="nav-item" to="/user">View Users</Link>  
                </TreeItem>
                <TreeItem nodeId="3" label={<h5>User</h5>}>
                <Link className="nav-item" to="/user/add">Add User</Link>
                <Link className="nav-item" to="/add">Add Booking</Link>
                </TreeItem> */}
          
          
     
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
            <Link className="nav-item" to="/">View Bookings</Link>
            </li>
            <li className="nav-item mx-3">
            <Link className="nav-item" to="/add">Add Booking</Link>
            </li>
            
            {/* <li className="nav-item">
            <Link className="nav-item" to="/update">Update Booking</Link>
            </li> */}

            {/* <li className="nav-item mx-3 ">
            <Link className="nav-item" to="/user">View Users</Link>
            </li>
            <li className="nav-item mx-3">
            <Link className="nav-item" to="/user/add">Add User</Link>
            </li>

          </ul>
        </div>
      </nav> */} 


        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <ViewBooking />
          </Route>
          <Route exact path="/add">
            <AddBooking />
          </Route>
          <Route  path="/update/:id" component ={UpdateBooking}>
          </Route>
          <Route path="/detailview/:id" component={DetailViewBooking}></Route>

          <Route exact path="/user">
            <ViewUser />
          </Route>
          
          <Route exact path="/viewfeedback">
            <ViewFeedback />
          </Route>
          
          <Route exact path="/user/add">
            <AddUser />
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
