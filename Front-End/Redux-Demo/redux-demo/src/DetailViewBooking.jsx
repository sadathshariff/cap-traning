import React, { Component } from 'react'

export default class DetailViewBooking extends Component {

    constructor(){
        super();
        this.state = {bookings: [], date: {}, journeyStartTime:{}, journeyEndTime:{}}
    }

    componentDidMount() {
        console.log('Initialization...')
        console.log('id', this.props.match.params.id);
        fetch('http://localhost:8090/api/v1/bookings/' + this.props.match.params.id)
            .then(response => response.json())
            .then(
                data => {
                    console.log(data)
                    this.setState({bookings:data, date:data, journeyStartTime:data, journeyEndTime:data});
                }
            );
    }

    render() {
        return(
            <div>
                 <h2>Detail View Of Booking</h2>
                <h4>BookingID: {this.state.bookings.bookingId}</h4>
                <table class="table table-striped table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">End Time</th>
                    </tr>
                    </thead>
                <tbody>
                    <tr>
                        <td>{this.state.bookings.date}</td>
                        <td>{this.state.bookings.journeyStartTime}</td>
                        <td>{this.state.bookings.journeyEndTime}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }

}
