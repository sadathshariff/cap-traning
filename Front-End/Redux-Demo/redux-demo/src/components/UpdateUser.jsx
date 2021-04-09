import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline'
import {Typography} from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
 class UpdateUser extends Component {

    constructor(){
        super();
        this.username = React.createRef();
        this.password = React.createRef();
        this.state = {message:''}
    }

    updateUser(event){
        console.log('Method for updating user',this.props.match.params.username)
        console.log('password', this.password.current.value )

        event.preventDefault();
        this.props.onUpdateUser(this.props.match.params.username,this.password.current.value)
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
     <LockOutlinedIcon />
   </Avatar>
     Update Password
   </Typography>
   
   <form className={classes.form} noValidate>
     <Grid container spacing={2}>
       
       <Grid item xs={12}>
         <TextField
           defaultValue={this.props.match.params.username}
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
           name="password"
           label="Password"
           type="password"
           id="password"
           inputRef={this.password}
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
       onClick = {this.updateUser.bind(this)}>
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
        onUpdateUser: (username,password) => dispatch(actions.updateUser(username,password))
    }
}

export default connect(mapStateToProps,mapDispatchToState)(UpdateUser);

