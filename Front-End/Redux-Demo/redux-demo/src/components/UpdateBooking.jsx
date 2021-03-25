import React, { Component } from 'react'

import { connect } from 'react-redux';
import * as actions from '../actions/action'
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';



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

            <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                borderTop:"1px solid black",
                borderBottom:"1px solid black",
                borderRadius:"2rem",
                padding:"1rem",
                margin:"auto",
                width:"50%",
                height:"50%",
                boxSizing:"border-box",
            
            }}>

            <div>
                <div>

                <div style={{
                    fontFamily:"cursive",
                    fontWeight:"light",
                    fontSize:"1.2rem"

                }}>
                   <h2>Update Booking Date:</h2>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin:"1rem"

                }}>
            <form className={classes.root} noValidate autoComplete="off">
            
                <TextField value ={this.props.match.params.id} id="outlined-basic" label="Booking-Id" variant="outlined" disabled />
            </form>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin:"1rem"
              }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField type="date"  inputRef={this.date} id="outlined-basic" label="" variant="outlined" />
                   
                </form>
                </div>

                <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                <Button variant="contained" color="primary" size="medium" className={classes.button} startIcon={<SaveIcon />}
                    onClick={this.updateBooking.bind(this)}>Update</Button></div>
                </div>



            </div>
            </div>
            /* // <div>

            //     <div className="alert alert-success" role="alert">
            //         {this.state.message}
            //     </div>
            //     <div className="input-group mb-3">
            //     <div className="input-group-prepend">
            //         <span className="input-group-text" id="basic-addon1">Booking ID</span>
            //     </div>
            //     <input type="number" value={this.props.match.params.id} disabled className="form-control" placeholder="Enter BookingID" aria-label="Username" aria-describedby="basic-addon1"/>
            //     </div>

            //     <div className="input-group mb-3">
            //     <div className="input-group-prepend">
            //         <span className="input-group-text" id="basic-addon1">Date</span>
            //     </div>
            //     <input type="date" ref={this.date} className="form-control" placeholder="Enter new Date" aria-label="Username" aria-describedby="basic-addon1"/>
            //     </div>

            //     <button type="button" className="btn btn-primary" onClick={this.updateBooking.bind(this)}>Update Booking</button>
                
            // </div> */
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
