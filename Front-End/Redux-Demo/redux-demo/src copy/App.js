import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ViewEmployee from './components/ViewEmployee';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from  './components/UpdateEmployee';
import AddBooking from '../src/components/AddBooking';

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
            <li className="nav-item ">
            <Link className="nav-item" to="/">View Bookings</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-item" to="/add">Add Booking</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-item" to="/update">Update Booking</Link>
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
          <Route exact path="/update">
            <UpdateBooking />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
