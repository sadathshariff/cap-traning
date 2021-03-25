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
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
  }));

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

            <div style ={{
                display:"flex-wrap",
                padding:"0.5rem",
                margin:"1rem"
                
                

            }}>
                <div style={{
                     display:"flex",
                     alignItems:"center",
                     justifyContent:"center",
                     margin:"1rem" 
                }}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField inputRef={this.bookingId} id="outlined-basic" label="Enter Booking ID" variant="outlined" />
                    </form>
                </div>
                <div style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    margin:"1rem"  
                }}>
                    <form className={classes.root}  noValidate autoComplete="off">
                        <TextField inputRef={this.username} id="outlined-basic" label="Enter Username" variant="outlined" />
                    </form>
                </div>

               <div style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center" ,
                    margin:"1rem"
                }}>
                <form className={classes.root}  noValidate autoComplete="off">
                        <TextField inputRef={this.busNumber} id="outlined-basic" label="Bus Number" variant="outlined" />
                    </form>
               </div>

               <div
               style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center" ,
                margin:"1rem" 
            }}
               >
                     <form className={classes.root}  noValidate autoComplete="off">
                        <TextField inputRef={this.source} id="outlined-basic" label="Source" variant="outlined" />
                    </form>
               </div>


                <div  style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center" ,
                margin:"1rem" 
            }}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField inputRef={this.destination} id="outlined-basic" label="Destination" variant="outlined" />
                </form> 
                </div>


                <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center" ,
                margin:"1rem"
            }} >
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField inputRef={this.numberOfSeats} id="outlined-basic" label="numberOfSeats" variant="outlined" />
                    </form>
                </div>

               <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center" ,
                margin:"1rem"
            }} >
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField inputRef={this.amountPaid} id="outlined-basic" label="Amount" variant="outlined" />
                    </form>
               </div>

                <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center" ,
                margin:"1rem"
            }}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField  type ="date" InputLabelProps={{shrink: true}}inputRef={this.date} id="outlined-basic" label="Date" variant="outlined" />
                    </form>
                </div>

                <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                margin:"1rem" 
            }}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField  type="time" InputLabelProps={{shrink: true}} inputRef={this.journeyStartTime} id="outlined-basic" label="Start-Time" variant="outlined" />
                    </form>
                </div>

               <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center" ,
                margin:"1rem" 
            }}>
                    <form className={classes.root} noValidate autoComplete="off">
                            <TextField type = "time" InputLabelProps={{shrink: true}} inputRef={this.journeyEndTime} id="outlined-basic" label="End-Time" variant="outlined" />
                        </form>
               </div>

                <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                <Button variant="contained" color="primary" size="medium" className={classes.button} startIcon={<SaveIcon />}
                    onClick={this.addBooking.bind(this)}>Save</Button></div>

               
            </div>

            // <div>
            //      <div className="alert alert-success" role="alert">
            //         {this.props.message}
            //     </div>
            //     <div className="input-group mb-3">
            //     <div className="input-group-prepend">
            //         <span className="input-group-text" id="basic-addon1">Booking ID</span>
            //     </div>
            //     <input type="text" ref={this.bookingId} className="form-control" placeholder="Enter BookingID" aria-label="Username" aria-describedby="basic-addon1"/>
            //     </div>

            //     <div className="input-group mb-3">
            //     <div className="input-group-prepend">
            //         <span className="input-group-text" id="basic-addon1">Username</span>
            //     </div>
            //     <input type="text" ref={this.username} className="form-control" placeholder="Enter Username" aria-label="Username" aria-describedby="basic-addon1"/>
            //     </div>

            //     <div className="input-group mb-3">
            //     <div className="input-group-prepend">
            //         <span className="input-group-text" id="basic-addon1">BusNumber</span>
            //     </div>
            //     <input type="text" ref={this.busNumber} className="form-control" placeholder="Enter Bus Number" aria-label="Username" aria-describedby="basic-addon1"/>
            //     </div>

            //     <div className="input-group mb-3">
            //     <div className="input-group-prepend">
            //         <span className="input-group-text" id="basic-addon1">Source</span>
            //     </div>
            //     <input type="text" ref={this.source} className="form-control" placeholder="Enter Source" aria-label="Username" aria-describedby="basic-addon1"/>
            //     </div>

            //     <div className="input-group mb-3">
            //     <div className="input-group-prepend">
            //         <span className="input-group-text" id="basic-addon1">Destination</span>
            //     </div>
            //     <input type="text" ref={this.destination} className="form-control" placeholder="Enter Destination" aria-label="Username" aria-describedby="basic-addon1"/>
            //     </div>

            //     <div className="input-group mb-3">
            //     <div className="input-group-prepend">
            //         <span className="input-group-text" id="basic-addon1">Number of Seats</span>
            //     </div>
            //     <input type="text" ref={this.numberOfSeats} className="form-control" placeholder="Enter number of seats" aria-label="Username" aria-describedby="basic-addon1"/>
            //     </div>

            //     <div className="input-group mb-3">
            //     <div className="input-group-prepend">
            //         <span className="input-group-text" id="basic-addon1">Amount Paid</span>
            //     </div>
            //     <input type="text" ref={this.amountPaid} className="form-control" placeholder="Enter amount paid" aria-label="Username" aria-describedby="basic-addon1"/>
            //     </div>

            //     <div className="input-group mb-3">
            //     <div className="input-group-prepend">
            //         <span className="input-group-text" id="basic-addon1">Date</span>
            //     </div>
            //     <input type="date" ref={this.date} className="form-control" placeholder="Enter Date" aria-label="Username" aria-describedby="basic-addon1"/>
            //     </div>

            //     <div className="input-group mb-3">
            //     <div className="input-group-prepend">
            //         <span className="input-group-text" id="basic-addon1">Journey Start Time</span>
            //     </div>
            //     <input type="time" ref={this.journeyStartTime} className="form-control" placeholder="Enter start time" aria-label="Username" aria-describedby="basic-addon1"/>
            //     </div>

            //     <div className="input-group mb-3">
            //     <div className="input-group-prepend">
            //         <span className="input-group-text" id="basic-addon1">Jounrey End Time</span>
            //     </div>
            //     <input type="time" ref={this.journeyEndTime} className="form-control" placeholder="Enter end time" aria-label="Username" aria-describedby="basic-addon1"/>
            //     </div>


            //     <button type="button" className="btn btn-primary" onClick={this.addBooking.bind(this)}>Add Booking</button>
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
        onAddBooking: (payload) => dispatch(actions.addBooking(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(AddBooking);