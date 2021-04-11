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
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
      minWidth: 600,
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
                <StyledTableCell align="center">{booking.bookingId}</StyledTableCell>
                <StyledTableCell align="center">{booking.username}</StyledTableCell>
                  <StyledTableCell align="center"><Link to={"/detailview/" + booking.bookingId}><Button variant="contained" color="primary">
                            View</Button></Link></StyledTableCell>
            </StyledTableRow>

           
            )
        })

        return (
            

            <div>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell align="center">BookingID</StyledTableCell>
                            <StyledTableCell align="center">Username</StyledTableCell>

                            <StyledTableCell align="center">Detail-View</StyledTableCell> 
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