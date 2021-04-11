import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createBrowserHistory } from "history";

// All the Components Import

import AddBooking from "./components/AddBooking";
import UpdateBooking from "./components/UpdateBooking";
import ViewBooking from "./components/ViewBooking";
import DetailViewBooking from "./DetailViewBooking";

import AddUser from "./components/AddUser";
import ViewUser from "./components/ViewUser";
import UpdateUser from "./components/UpdateUser";

import ViewFeedback from "./components/ViewFeedback";
import AddFeedback from "./components/AddFeedback";

import AddBus from "./components/AddBus";
import ViewBus from "./components/ViewBus";

import ViewBookingByUser from "./components/ViewBookingByUser";
import AdminScreen from "./components/AdminScreen";

import Login from "./components/Login";
import LoginAdmin from "./components/LoginAdmin";
import LoginBusOp from "./components/LoginBusOp";
import HomeScreen from "./components/HomeScreen";
import GetAllBusOp from "./components/GetAllBusOp";

import Revenue from "./components/Revenue";
import DatedRouteRev from "./components/DatedRouteRev";
import RouteRev from "./components/RouteRev";
import MonthlyRev from "./components/MonthlyRev";
import YearlyRev from "./components/YearlyRev";
import BusOpScreen from "./components/BusOpScreen";

import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import clsx from "clsx";

import CssBaseline from "@material-ui/core/CssBaseline";

var hist = createBrowserHistory();

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
    width: "auto",
  },
}));

const drawerWidth = 240;

const useStyles1 = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    marginTop: 0,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function App() {
  const classes = useStyles();
  const classes1 = useStyles1();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
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
        <h1 id="headingText">blueBus</h1>

        <main
          className={clsx(classes1.content, {
            [classes.contentShift]: open,
          })}
        ></main>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>

          <Route exact path="/admin/login">
            <LoginAdmin />
          </Route>

          <Route exact path="/busoperator/login">
            <LoginBusOp />
          </Route>

          <Route path="/busoperator/addbus">
            <AddBus />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/adminscreen">
            <AdminScreen />
          </Route>

          <Route exact path="/admin/getallbusop">
            <GetAllBusOp />
          </Route>

          <Route path="/admin/viewbus">
            <ViewBus />
          </Route>

          <Route exact path="/user">
            <ViewUser />
          </Route>

          <Route exact path="/user/add">
            <AddUser />
          </Route>

          <Route path="/user/update/:username" component={UpdateUser}></Route>

          <Route exact path="/viewbookings">
            <ViewBooking />
          </Route>

          <Route
            exact
            path="/viewbookingsbyusername/:username"
            component={ViewBookingByUser}
          ></Route>

          <Route path="/update/:id" component={UpdateBooking}></Route>

          <Route path="/detailview/:id" component={DetailViewBooking}></Route>

          <Route exact path="/addbooking">
            <AddBooking />
          </Route>

          <Route exact path="/viewfeedback">
            <ViewFeedback />
          </Route>

          <Route exact path="/feedback">
            <AddFeedback />
          </Route>

          <Route exact path="/busoperatorscreen">
            <BusOpScreen />
          </Route>

          <Route exact path="/revenue">
            <Revenue />
          </Route>
          <Route path="/routerev">
            <RouteRev />
          </Route>
          <Route path="/datedrouterev">
            <DatedRouteRev />
          </Route>
          <Route path="/monthlyrouterev">
            <MonthlyRev />
          </Route>
          <Route path="/yearlyrevenue">
            <YearlyRev />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
