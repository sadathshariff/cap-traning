import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'


import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';


import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        {/* <Link color="inherit" href="https://material-ui.com/"> */}
          Your Website
        {/* </Link>*/}{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));

class AddBus extends Component {

    constructor(){
        super();
        this.busNumber = React.createRef();
        this.totalSeats = React.createRef();
        this.fare = React.createRef();

        this.state = {message:''}
    }

    addBus(event){
        this.setState = {message:''}
        this.props.onAddBus({
            busNumber:this.busNumber.current.value,
            totalSeats:this.totalSeats.current.value,
            fare:this.fare.current.value
        })
    }

    render() {

        const classes = useStyles;
        return (
            <div>

                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                        Adding a new Bus
                        </Typography>
                        <br/>
                        <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            
                            <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                
                                label="Enter BusNumber"
                                
                                inputRef={this.busNumber}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Enter total seats"
                                inputRef={this.totalSeats}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Enter fare"
                                inputRef={this.fare}
                            />
                            </Grid>
                        </Grid>
                        <br/>
                        <Button
                            // type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            //className={classes.submit}
                            onClick={ this.addBus.bind(this) }
                            //onClick = {handleClick}
                        >
                            
                            Add Bus
                        </Button>

                        
                        <TextField  fullWidth disabled id="outlined-required" label={this.props.message} variant="standard"></TextField>        
                        
                        </form>
                    </div>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                    </Container>  
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        message:state.message
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onAddBus: (payload) => dispatch(actions.addBus(payload))
    }

}

export default connect(mapStateToProps,mapDispatchToState)(AddBus);


