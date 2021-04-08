import React, { Component } from 'react'
import  {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/action'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';

import EventRoundedIcon from '@material-ui/icons/EventRounded';

import Grid from '@material-ui/core/Grid';

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

// const useStyles = ((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '25ch',
//       },
//     },
//     button: {
//         margin: theme.spacing(1),
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: '25ch',
//       },
//       formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//       },
//   }));

class AddBooking extends Component {

    constructor(){
        super();
        this.bookingId = React.createRef();
        this.username = React.createRef();
        this.busNumber = React.createRef();
        this.source = React.createRef();
        this.destination = React.createRef();
        this.numberOfSeats = React.createRef();
        this.amountPaid = React.createRef();
        this.date = React.createRef();
        this.journeyStartTime = React.createRef();
        this.journeyEndTime = React.createRef();
        this.state = {message: ''}
    }


    addBooking(event){
        console.log('BookingId',this.bookingId.current.value);
        console.log('username',this.username.current.value);
        console.log('busNumber',this.busNumber.current.value);
        console.log('source',this.source.current.value);
        console.log('destination',this.destination.current.value);
        console.log('numberOfSeats',this.numberOfSeats.current.value);
        console.log('amountPaid',this.amountPaid.current.value);
        console.log('date',this.date.current.value);
        console.log('start time',this.journeyStartTime.current.value);
        console.log('End Time',this.journeyEndTime.current.value);
        event.preventDefault();

        
        this.props.onAddBooking({id: 0, bookingId: this.bookingId.current.value, username: this.username.current.value, busNumber: this.busNumber.current.value,
            source: this.source.current.value, destination: this.destination.current.value, numberOfSeats: this.numberOfSeats.current.value,
        amountPaid: this.amountPaid.current.value, date: this.date.current.value, journeyStartTime: this.journeyStartTime.current.value,
    journeyEndTime: this.journeyEndTime.current.value});
    }
    render() {
        const classes = useStyles;
        return (

            <div>
                 <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper} >
                         <Typography component="h1" variant="h5" style ={{color:'blue',fontFamily:'cursive',fontSize:'35px',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem',}}>
                    <Avatar className={classes.avatar} style={{backgroundColor:'blue', display:'flex',alignItems:'center'}} >
                        <EventRoundedIcon />
                     </Avatar>   
                    New Booking
                    </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                    
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        
                        label="Booking Id"
                        
                        inputRef={this.bookingId}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        
                        label="Enter Username"
                        
                        inputRef={this.username}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        
                        label="Enter Bus Number"
                        
                        inputRef={this.busNumber}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        
                        label="Source"
                        
                        inputRef={this.source}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        
                        label="Destination"
                        
                        inputRef={this.destination}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        type='number'
                        label="Number of Seats"
                        
                        inputRef={this.numberOfSeats}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        type='amount'
                        label="Amount "
                        
                        inputRef={this.amountPaid}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        type='date'
                        label="Enter Date "
                        InputLabelProps={{shrink: true}} 
                        
                        inputRef={this.date}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        type='time'
                        label="Start Time"
                        InputLabelProps={{shrink: true}} 
                        
                        inputRef={this.journeyStartTime}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        type='time'
                        label="End Time"
                        InputLabelProps={{shrink: true}} 
                        
                        inputRef={this.journeyEndTime}
                        />
                    </Grid>
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        //className={classes.submit}
                        //onClick={this.addUser.bind(this)}
                        onClick = {this.addBooking.bind(this)}>
                        Add Booking
                        </Button>
                    </Grid>
                </form>
            </div>
            </Container>
            </div>
    


            
        )
    }
}


const mapStateToProps = (state) => {
    return {
        message: state.message,
        // bookings: state.bookings
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onAddBooking: (payload) => dispatch(actions.addBooking(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(AddBooking);