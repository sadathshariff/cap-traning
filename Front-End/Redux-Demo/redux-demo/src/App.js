import './App.css';

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

import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});


function App() {
  const classes = useStyles();

  return (

        
        
    <Router>
      <div>
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
        </TreeView>
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
          <Route exact path="/user/add">
            <AddUser />
          </Route>
          <Route  path="/user/update/:username" component={UpdateUser}></Route>
         

        </Switch>
      </div>
    </Router>
  );
}

export default App;
