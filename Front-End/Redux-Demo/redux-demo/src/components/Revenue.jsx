import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/action";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
});

class Revenue extends Component {
  constructor() {
    super();
  }

  render() {
    const classes = useStyles;

    return (
      <Grid>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">
            Which Revenue would you like to view?
          </Typography>
        </div>
        <br />
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={3} style={{ marginLeft: "1%" }}>
            <Grid item xs={6} sm={3}>
              <Link to={"/routerev"}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                >
                  Route Revenue
                </Button>
              </Link>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Link to={"/datedrouterev"}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                >
                  Dated Route Revenue
                </Button>
              </Link>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Link to={"/monthlyrouterev"}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                >
                  Monthly Revenue
                </Button>
              </Link>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Link to={"/yearlyrevenue"}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                >
                  Yearly Revenue
                </Button>
              </Link>
            </Grid>
          </Grid>
          <br />
          <br />
          <br />
        </div>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    message: state.message,
    // bookings: state.bookings
  };
};

const mapDispatchToState = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToState)(Revenue);
