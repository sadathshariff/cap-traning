import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

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

        return (

            <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                borderTop:"1px solid black",
                borderBottom:"1px solid black",
                borderRadius:"2.5rem",
                padding:"1rem",
                margin:"auto",
                width:"50%",
                height:"100ew",
                boxSizing:"border-box",
            
            }}>
                <div>
                <div style = {{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    margin:"1rem"
                }}>

            <form className={classes.root} noValidate autoComplete="off">
                <div style={{
                    fontFamily:"cursive",
                    fontWeight:"light",
                    fontSize:"1.2rem"

                }}>
                   <h2>Add User:</h2>
                </div>
                <TextField inputRef ={this.username} id="outlined-basic" label="Enter Username" variant="outlined" />
            </form>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin:"1rem"
              }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.password} id="outlined-basic" label="Enter Password" variant="outlined" />
                </form>
                </div>

                <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                <Button variant="contained" color="primary" size="medium" className={classes.button} startIcon={<SaveIcon />}
                    onClick={this.addUser.bind(this)}>Save</Button></div>
                </div>
            </div>


            

            // <div>
            //      <div className="alert alert-success" role="alert">
            //         {this.props.message}
            //     </div>

            //     <div className="input-group mb-3">
            //     <div className="input-group-prepend">
            //         <span className="input-group-text" id="basic-addon1">UserName</span>
            //     </div>
            //     <input type="text" ref={this.username} className="form-control" placeholder="Enter Name" aria-label="Username" aria-describedby="basic-addon1"  required />
            //     </div>

            //     <div className="input-group mb-3">
            //     <div className="input-group-prepend">
            //         <span className="input-group-text" id="basic-addon1">Password</span>
            //     </div>
            //     <input type="password" ref={this.password} className="form-control" placeholder="Password" aria-label="Username"  aria-describedby="basic-addon1"  required /  >
            //     </div>
            //     <button type="button" className="btn btn-primary" onClick={this.addUser.bind(this)}>Add User</button> 
            // </div>
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