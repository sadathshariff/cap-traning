import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions/action'

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

        var bookingList = this.props.bookings.map((booking,i) => {
            return (
                <tr key={i}>
                {/* <td>{booking.bookingId}</td> */}
                <Link to={"/detailview/" + booking.bookingId}>{booking.bookingId}</Link>
                <td>{booking.username}</td>
                <td>{booking.busNumber}</td>
                <td>{booking.source}</td>
                <td>{booking.destination}</td>
                <td>{booking.numberOfSeats}</td>
                <td>{booking.amountPaid}</td>
                <td>{booking.date}</td>
                <td>{booking.journeyStartTime}</td>
                <td>{booking.journeyEndTime}</td>
                <td><button type="button" className="btn btn-danger" onClick={this.deleteBooking.bind(this, booking.bookingId)}> X </button>
                <Link to={"/update/" + booking.bookingId}><button variant="contained" color="primary">
                            Update</button></Link></td>
            </tr>
            )
        })

        return (
            <div className="row">
                <div className="alert alert-success" role="alert">
                    {this.state.message}
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">BookingID</th>
                            <th scope="col">Username</th>
                            <th scope="col">BusNumber</th>
                            <th scope="col">Source</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Number of Seats</th>
                            <th scope="col">Amount Paid</th>
                            <th scope="col">Date</th>
                            <th scope="col">Start Time</th>
                            <th scope="col">End Time</th>  
                        </tr>
                    </thead>
                    <tbody>
                        {bookingList}
                    </tbody>
                </table>
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