import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions/action'

import {withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  },
  (theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));  

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  

class ViewBooking extends Component {

    constructor(){
        super();
        this.state = {bookings:[], message:''}
    }

    componentDidMount(){
        console.log('Initialization...')
        this.props.onFetchBookings()
        
    }

    deleteBooking(bookingId){
        return this.props.onDeleteBooking(bookingId)
    }

    render() {

        const classes = useStyles;

        var bookingList = this.props.bookings.map((booking,i) => {
            return (

            <StyledTableRow key={i}>
                <StyledTableCell align="center"><Link to={"/detailview/" + booking.bookingId}>{booking.bookingId}</Link></StyledTableCell>
                <StyledTableCell align="center">{booking.username}</StyledTableCell>
                <StyledTableCell align="center">{booking.busNumber}</StyledTableCell>
                <StyledTableCell align="center">{booking.source}</StyledTableCell>
                <StyledTableCell align="center">{booking.destination}</StyledTableCell>
                <StyledTableCell align="center">{booking.numberOfSeats}</StyledTableCell>
                <StyledTableCell align="center">{booking.amountPaid}</StyledTableCell>
                <StyledTableCell align="center"><Link to={"/update/" + booking.bookingId}><Button variant="contained" color="primary">
                            Update</Button></Link></StyledTableCell>
                <StyledTableCell align="center"><Button variant="contained" color="secondary" className={classes.button}
                        startIcon={<DeleteIcon />} onClick={this.deleteBooking.bind(this, booking.bookingId)}>Delete</Button> </StyledTableCell>
                
            </StyledTableRow>

            //     <tr key={i}>
            //     {/* <td>{booking.bookingId}</td> */}
            //     <Link to={"/detailview/" + booking.bookingId}>{booking.bookingId}</Link>
            //     <td>{booking.username}</td>
            //     <td>{booking.busNumber}</td>
            //     <td>{booking.source}</td>
            //     <td>{booking.destination}</td>
            //     {/* <td>{booking.numberOfSeats}</td>
            //     <td>{booking.amountPaid}</td> */}
            //     {/* <td>{booking.date}</td>
            //     <td>{booking.journeyStartTime}</td>
            //     <td>{booking.journeyEndTime}</td> */}
            //     <td><button type="button" className="btn btn-danger" onClick={this.deleteBooking.bind(this, booking.bookingId)}> Delete </button></td>
            //     <td><Link to={"/update/" + booking.bookingId}><button type="button" className="btn btn-info">
            //                 Update</button></Link></td>
            // </tr>
            )
        })

        return (
            // <div className="row">
            //     <div className="alert alert-success" role="alert">
            //         {this.state.message}
            //     </div>
            //     <table className="table table-stripped table-bordered">
            //         <thead>
            //             <tr>
            //                 <th scope="col">BookingID</th>
            //                 <th scope="col">Username</th>
            //                 <th scope="col">BusNumber</th>
            //                 <th scope="col">Source</th>
            //                 <th scope="col">Destination</th>
            //                 {/* <th scope="col">Number of Seats</th>
            //                 <th scope="col">Amount Paid</th> */}
            //                 {/* <th scope="col">Date</th>
            //                 <th scope="col">Start Time</th>
            //                 <th scope="col">End Time</th>   */}
            //                 <th scope = "col"> Delete </th>
            //                 <th scope = "col" >Update</th>
            //             </tr>
            //         </thead>
            //         <tbody>
            //             {bookingList}
            //         </tbody>
            //     </table>
            // </div>

            <div>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell align="center">BookingID</StyledTableCell>
                            <StyledTableCell align="center">Username</StyledTableCell>
                            <StyledTableCell align="center">BusNumber</StyledTableCell>
                            <StyledTableCell align="center">Source</StyledTableCell>
                            <StyledTableCell align="center">Destination</StyledTableCell>
                            <StyledTableCell align="center">Number of Seats</StyledTableCell>
                            <StyledTableCell align="center">Amount Paid</StyledTableCell>
                            <StyledTableCell align="center">Update</StyledTableCell>
                            <StyledTableCell align="center">Delete</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>

                        {bookingList}
                    </TableBody>
                </Table>
            </TableContainer>

            </div>
        )
    }
}

const mapStateToProps = (state)  => {
    return {
        bookings:state.bookings
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onFetchBookings : () => dispatch(actions.fetchBookings()),
        onDeleteBooking : (bookingId) => dispatch(actions.deleteBooking(bookingId))
    }
}

export default connect(mapStateToProps,mapDispatchToState)(ViewBooking);