import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


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
                

            <div
            style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
            }}>
               
                
                  <form className={classes.root} noValidate autoComplete="off" >

                  {<h2 style={{textAlign:'center',
                fontFamily:'cursive',
                fontSize:'1.5rem'}}>Update Password :</h2>}
                     <div style={{
                         margin:'1rem'
                     }}>
                        <TextField  defaultValue={this.props.match.params.username} id="standard-read-only-input" label="Username" variant="filled" InputProps={{readOnly: true,}}></TextField>
                     </div>
                     <div style={{
                         margin:'1rem'
                     }}>
                        <TextField  inputRef={this.password} id="standard-password-input" label="Password" type="password" helperText="New password to be updated" autoComplete="current-password" variant="filled"></TextField>
                     </div>
                     <div style={{
                         margin:'1rem'
                     }}>
                        <Button style={{
                         margin:'1rem'
                     }} variant="contained" color="primary" className={classes.button} onClick={this.updateUser.bind(this)}>Update Password</Button> 
                     </div>
                     
                        {/* <TextField fullWidth  disabled id="outlined-required" label={this.props.message} variant="filled"></TextField> */}
                     
                 </form>
            
            </div>

            // <div style={{
            //     display:"flex",
            //     alignItems:"center",
            //     justifyContent:"center",
            //     borderTop:"1px solid black",
            //     borderBottom:"1px solid black",
            //     borderRadius:"2rem",
            //     padding:"1rem",
            //     margin:"auto",
            //     width:"50%",
            //     height:"100ew",
            //     boxSizing:"border-box",
            
            // }}>

            // <div>
            //     <div style = {{
            //         display:"flex",
            //         alignItems:"center",
            //         justifyContent:"center",
            //         margin:"1rem"
            //     }}>

            // <form className={classes.root} noValidate autoComplete="off">
            //     <div style={{
            //         fontFamily:"cursive",
            //         fontWeight:"light",
            //         fontSize:"1.2rem"

            //     }}>
            //        <h2>Update Password:</h2>
            //     </div>
            //     <TextField value ={this.props.match.params.username} id="outlined-basic" label="Username" variant="outlined" disabled />
            // </form>
            // </div>

            // <div style={{
            //     display: "flex",
            //     justifyContent: "center",
            //     alignItems: "center",
            //     margin:"1rem"
            //   }}>
            //     <form className={classes.root} noValidate autoComplete="off">
            //         <TextField type="password" inputRef={this.password} id="outlined-basic" label="Enter New Password" variant="outlined" />
            //     </form>
            //     </div>

            //     <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
            //     <Button variant="contained" color="primary" size="medium" className={classes.button} startIcon={<SaveIcon />}
            //         onClick={this.updateUser.bind(this)}>Update</Button></div>
            //     </div>



            // </div>


            // <div>

            //         <div className="alert alert-success" role="alert">
            //             {this.props.message}
            //         </div>

            //     <div className="input-group mb-3">
            //         <div className="input-group-prepend">
            //             <span className="input-group-text" id="basic-addon1">UserName</span>
            //         </div>
            //         <input type="text" value={this.props.match.params.username} disabled className="form-control" placeholder="Enter UserName" aria-label="Username" aria-describedby="basic-addon1" />
            //     </div>

            //     <div className="input-group mb-3">
            //         <div className="input-group-prepend">
            //             <span className="input-group-text" id="basic-addon1">Password</span>
            //         </div>
            //         <input type="password" ref={this.password} className="form-control" placeholder="Enter Password" aria-label="Username" aria-describedby="basic-addon1" />
            //     </div>


            //     <button type="button" className="btn btn-primary" onClick={this.updateUser.bind(this)}>Update Password</button>
                
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
        onUpdateUser: (username,password) => dispatch(actions.updateUser(username,password))
    }
}

export default connect(mapStateToProps,mapDispatchToState)(UpdateUser);
