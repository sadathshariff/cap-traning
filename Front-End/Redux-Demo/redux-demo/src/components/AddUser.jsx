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


import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

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
    
class AddUser extends Component {
    constructor(){
        super();
        this.username = React.createRef();
        this.password = React.createRef();
        this.state = {message:''}
    }

    addUser(event){
        console.log('Method for adding User:',this.username.current.value)
        console.log('Method for adding User:', this.password.current.value)

        event.preventDefault();

        this.props.onAddUser({username:this.username.current.value,password:this.password.current.value})
    }
    render() {

        const classes = useStyles;
        const handleClick = this.addUser.bind(this)

        return (

            

            <div>
                 
            <Container component="main" maxWidth="xs">
            <CssBaseline />
 <div className={classes.paper} > 
  <Typography component="h1" variant="h5" style ={{display:'flex', justifyContent:'start',color:'blue',fontFamily:'cursive',fontSize:'35px',textAlign:'center' ,margin:'1rem'}}>
   <Avatar className={classes.avatar} style={{backgroundColor:'blue',marginRight:'1rem'}} >
     
   </Avatar>
     Sign up
   </Typography>
   
   <form className={classes.form} noValidate>
     <Grid container spacing={2}>
       
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
           name="password"
           label="Password"
           type="password"
           id="password"
           inputRef={this.password}
         />
       </Grid>
       {/* <Grid item xs={12}>
         <FormControlLabel
           control={<Checkbox value="allowExtraEmails" color="primary" />}
           label="I want to receive inspiration, marketing promotions and updates via email."
         />
       </Grid> */}
     </Grid>
     <br/>
     <Button
       // type="submit"
       fullWidth
       variant="contained"
       color="primary"
       //className={classes.submit}
       //onClick={this.addUser.bind(this)}
       onClick = {handleClick}
      
     >
         
       Sign Up
     </Button>
     
     <Grid container justify="flex-end">
       <Grid item style ={{padding:'1rem'}}>
         <Link to='/login' id ="linkStyle" style={{fontSize:'16px'}}  variant="body2">
           Already have an account? Sign in
         </Link>
       </Grid>
     </Grid>
     
     
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
        message: state.message,
        // bookings: state.bookings
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onAddUser: (payload) => dispatch(actions.addUser(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(AddUser);