import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { Typography, Button } from "@material-ui/core";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FeedbackIcon from "@material-ui/icons/Feedback";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import HomeIcon from "@material-ui/icons/Home";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function AdminScreen() {
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div className={classes.root}>
      <div
        className={classes.root}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Paper
          elevation={3}
          style={{
            height: "200px",
            width: "200px",
            backgroundImage: " linear-gradient(#ECF4FF, white)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "lightBlue",
            }}
          >
            <DirectionsBusIcon fontSize="large" />
          </div>

          <br />
          <Typography
            variant="h5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <b>New Bus</b>
          </Typography>
          <Typography
            variant="h7"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Add a new Bus
          </Typography>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <Link to={"/busoperator/addbus"}>
              <Button variant="contained" color="primary">
                Add
              </Button>
            </Link>
          </div>
        </Paper>

        {/* <Paper
          elevation={3}
          style={{
            height: "200px",
            width: "200px",
            backgroundImage: " linear-gradient(#ECF4FF, white)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "lightBlue",
            }}
          >
            <GroupAddIcon fontSize="large" />
          </div>

          <br />
          <Typography
            variant="h5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <b>New BusOperator</b>
          </Typography>
          <Typography
            variant="h7"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Add a new Bus Operator
          </Typography>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <Link to="/busoperator/add">
              <Button variant="contained" color="primary">
                Add
              </Button>
            </Link>
          </div>
        </Paper> */}

        <Paper
          elevation={3}
          style={{
            height: "200px",
            width: "200px",
            backgroundImage: " linear-gradient(#ECF4FF, white)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "lightBlue",
            }}
          >
            <AccountCircleIcon fontSize="large" />
          </div>

          <br />
          <Typography
            variant="h5"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <b>Users</b>
          </Typography>
          <Typography
            variant="h7"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            View all Users
          </Typography>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <Link to="/user">
              <Button variant="contained" color="primary">
                View
              </Button>
            </Link>
          </div>
        </Paper>
        <Paper
          elevation={3}
          style={{
            height: "200px",
            width: "200px",
            backgroundImage: " linear-gradient(#ECF4FF, white)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "lightBlue",
            }}
          >
            <SupervisedUserCircleIcon fontSize="large" />
          </div>

          <br />
          <Typography
            variant="h5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <b>BusOperator</b>
          </Typography>
          <Typography
            variant="h7"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            View all Bus Operators
          </Typography>

          <div style={{ textAlign: "center" }}>
            <br />
            <br />
            <Link to="/admin/getallbusop">
              <Button variant="contained" color="primary">
                View
              </Button>
            </Link>
          </div>
        </Paper>
        <Paper
          elevation={3}
          style={{
            height: "200px",
            width: "200px",
            backgroundImage: " linear-gradient(#ECF4FF, white)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "lightBlue",
            }}
          >
            <DirectionsBusIcon fontSize="large" />
          </div>

          <br />
          <Typography
            variant="h5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <b>Bus</b>
          </Typography>
          <Typography
            variant="h7"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            View all bus
          </Typography>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <Link to="/admin/viewbus">
              <Button variant="contained" color="primary">
                View
              </Button>
            </Link>
          </div>
        </Paper>

        <Paper
          elevation={3}
          style={{
            height: "200px",
            width: "200px",
            backgroundImage: " linear-gradient(#ECF4FF, white)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "lightBlue",
            }}
          >
            <MenuBookIcon fontSize="large" />
          </div>

          <br />
          <Typography
            variant="h5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <b>Booking</b>
          </Typography>
          <Typography
            variant="h7"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            View all Bookings made
          </Typography>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <Link to="/viewbookings">
              <Button variant="contained" color="primary">
                View
              </Button>
            </Link>
          </div>
        </Paper>

        <Paper
          elevation={3}
          style={{
            height: "200px",
            width: "200px",
            backgroundImage: " linear-gradient(#ECF4FF, white)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "lightBlue",
            }}
          >
            <FeedbackIcon fontSize="large" />
          </div>

          <br />
          <Typography
            variant="h5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <b>Feedback</b>
          </Typography>
          <Typography
            variant="h7"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            View all feedbacks given by users
          </Typography>
          <br />
          <div style={{ textAlign: "center" }}>
            <Link to="/viewfeedback">
              <Button variant="contained" color="primary">
                View
              </Button>
            </Link>
          </div>
        </Paper>

        <Paper
          elevation={3}
          style={{
            height: "200px",
            width: "200px",
            backgroundImage: " linear-gradient(#ECF4FF, white)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "lightBlue",
            }}
          >
            <HomeIcon fontSize="large" />
          </div>

          <br />
          <Typography
            variant="h5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <b>Home</b>
          </Typography>
          <Typography
            variant="h7"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Go to homepage
          </Typography>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <Link to={"/"}>
              <Button variant="contained" color="primary">
                Go
              </Button>
            </Link>
          </div>
        </Paper>
      </div>
      {/* <Paper square style={{display:"flex",justifyContent:"center",marginTop:'-2rem'}}>
        
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
                <Tab label="Bus Operator" to="/admin/getallbusop" component={Link}/>
                
                <Tab label="Logout" to="/" component={Link}/>
          
        </Tabs>
      </Paper> */}
    </div>
  );
}
