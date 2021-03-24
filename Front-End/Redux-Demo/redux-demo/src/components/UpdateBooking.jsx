import React, { Component } from 'react'

import { connect } from 'react-redux';
import * as actions from '../actions/action'

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
        return (
            <div>

                <div className="alert alert-success" role="alert">
                    {this.state.message}
                </div>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Booking ID</span>
                </div>
                <input type="number" value={this.props.match.params.id} disabled className="form-control" placeholder="Enter BookingID" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Date</span>
                </div>
                <input type="date" ref={this.date} className="form-control" placeholder="Enter new Date" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <button type="button" className="btn btn-primary" onClick={this.updateBooking.bind(this)}>Update Booking</button>
                
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
