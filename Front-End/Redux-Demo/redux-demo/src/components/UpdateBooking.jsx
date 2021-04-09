import React, { Component } from 'react'

import { connect } from 'react-redux';
import * as actions from '../actions/action'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline'
import {Typography} from '@material-ui/core';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';



const useStyles = ((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    button: {
        margin: theme.spacing(1),
    },
  }));

  
class UpdateBooking extends Component {

    constructor(){
        super();
        this.bookingId = React.createRef();
        this.date = React.createRef();
        this.state = {message:''};
    }

    updateBooking(event){
        console.log('method for updating Booking date', this.props.match.params.id);
        console.log('method for updating Booking date', this.date.current.value);
        event.preventDefault();
        this.props.onUpdateBooking(this.props.match.params.id, this.date.current.value)
    }
    render() {

        const classes = useStyles;

        
       

        return (
            <div>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
 <div className={classes.paper} > 
  <Typography component="h1" variant="h5" style ={{display:'flex', justifyContent:'start',color:'blue',fontFamily:'cursive',fontSize:'35px',textAlign:'center' ,margin:'1rem'}}>
   <Avatar className={classes.avatar} style={{backgroundColor:'blue',marginRight:'1rem'}} >
   <EventRoundedIcon />
   </Avatar>
     Update Date
   </Typography>
   
   <form className={classes.form} noValidate>
     <Grid container spacing={2}>
       
       <Grid item xs={12}>
         <TextField
         defaultValue={this.props.match.params.id}
           variant="outlined"
           required
           fullWidth
           disabled
           
           label="Enter Username"
           
           inputRef={this.username}
         />
       </Grid>
       <Grid item xs={12}>
         <TextField
           variant="outlined"
           required="true"
           fullWidth
           name="Date"
           label="New Date"
           type="date"
           id="date"
           InputLabelProps={{shrink: true}}
           inputRef={this.date}
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
       //onClick={this.addUser.bind(this)}
       onClick = {this.updateBooking.bind(this)}>
       Update
     </Button>
     
     
     <TextField  fullWidth disabled id="outlined-required" label={this.props.message} variant="standard"></TextField>        
   
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
        onUpdateBooking: (date) => dispatch(actions.updateBookings(date))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(UpdateBooking);
