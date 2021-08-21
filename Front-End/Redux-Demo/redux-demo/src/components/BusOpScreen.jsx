import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";

import Paper from "@material-ui/core/Paper";
import { Typography, Button } from "@material-ui/core";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

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

export default function BusOperatorScreen() {
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
            <CollectionsBookmarkIcon fontSize="large" />
          </div>

          <br />
          <Typography
            variant="h5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <b>Bookings</b>
          </Typography>
          <Typography
            variant="h7"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            View all bookings made by users
          </Typography>
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
            Add a new Bus
          </Typography>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <Link to="/busoperator/addbus">
              <Button variant="contained" color="primary">
                Add
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
            <MonetizationOnIcon fontSize="large" />
          </div>

          <br />
          <Typography
            variant="h5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <b>Revenue</b>
          </Typography>
          <Typography
            variant="h7"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            View revenue generated
          </Typography>
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <Link to="/revenue">
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
    </div>
  );
}
