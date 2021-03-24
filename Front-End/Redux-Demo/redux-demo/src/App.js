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


function App() {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
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

            <li className="nav-item mx-3 ">
            <Link className="nav-item" to="/user">View Users</Link>
            </li>
            <li className="nav-item mx-3">
            <Link className="nav-item" to="/user/add">Add User</Link>
            </li>

          </ul>
        </div>
      </nav>


        
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
