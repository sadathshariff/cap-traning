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

class AddFeedback extends Component {

    constructor(){
        super();
        this.username = React.createRef()
        this.rating = React.createRef()
        this.comment = React.createRef()
        this.routeName = React.createRef()

        this.state = {message:''}
    }


    addFeedback(event){
        this.setState = {message:''}
        this.props.onAddFeedback({
            username:this.username.current.value,
            rating:this.rating.current.value,
            comment:this.comment.current.value,
            routeName:this.routeName.current.value
        })
    }

    render() {

        const classes = useStyles

        return (

            <div>
                 <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper} >
                         <Typography component="h1" variant="h5" style ={{color:'blue',fontFamily:'cursive',fontSize:'30px',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem',}}>
                    <Avatar className={classes.avatar} style={{backgroundColor:'blue', display:'flex',alignItems:'center'}} ></Avatar>   
                    How Was Your Ride!
                    </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                    
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined" 
                        required
                        fullWidth
                        
                        label="Username"
                        
                        inputRef={this.username}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        type="number" 
                        min="1" 
                        max="5"
                        
                        label="Enter rating"
                        
                        inputRef={this.rating}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        
                        label="Enter Comment"
                        
                        inputRef={this.comment}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        
                        label="Route Name"
                        
                        inputRef={this.routeName}
                        />
                    </Grid>
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        //className={classes.submit}
                        //onClick={this.addUser.bind(this)}
                        onClick = {this.addFeedback.bind(this)}>
                        Submit Feedback
                        </Button>
                    </Grid>
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
        message:state.message,
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onAddFeedback :(payload) =>  dispatch(actions.addFeedback(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToState)(AddFeedback);
