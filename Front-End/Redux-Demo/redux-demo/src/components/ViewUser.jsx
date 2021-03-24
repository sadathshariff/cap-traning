import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions/action'

import { withStyles, makeStyles } from '@material-ui/core/styles';
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
  });

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
  
 
class ViewUser extends Component {

    constructor(){
        super();
        this.state = {users:[],message:''}
    }

    componentDidMount(){
        console.log('Initialization...')
        this.props.onFetchUsers()
    }

    deleteUser(username){
         this.props.onDeleteUser(username)
    }


    render() {

        const classes = useStyles;

        
        var userList = this.props.users.map((user,i) => {
            return (


            <StyledTableRow>
                <StyledTableCell align="center">{user.id}</StyledTableCell>
                <StyledTableCell align="center">{user.username}</StyledTableCell>
                <StyledTableCell align="center">{user.password}</StyledTableCell>
                <StyledTableCell align= "center"><Link to={"/update/update/"+user.username}><Button variant="contained" color="primary">
                        Update</Button></Link></StyledTableCell>
                <StyledTableCell align="center"><Button variant="contained" color="secondary" className={classes.button}
                    startIcon={<DeleteIcon />} onClick={this.deleteUser.bind(this,user.username)}>Delete</Button>
                </StyledTableCell>         
            </StyledTableRow>
                // <tr key ={i}>
                //     <td>{user.id}</td>
                //     <td>{user.username}</td>
                //     <td>{user.password}</td>
                //     <td><button type="button" className="btn btn-danger" onClick={this.deleteUser.bind(this,user.username)}> Delete </button></td>
                //     <td><Link to={'/user/update/'+user.username}><button type="button" className="btn btn-info">
                //             Update</button></Link></td>
                // </tr>
            )
        })


        return (


            // <div className="row">

            //     <div className = "alert alert-success" role ="alert">
            //         {this.props.message}
            //     </div>

            //     <table className="table table-stripped table-bordered">
            //         <thead>
            //             <tr>
            //                 <th scope="col">id</th>
            //                 <th scope ="col">UserName</th>
            //                 <th scope = "col">Password</th>
            //                 <th scope = "col">Delete</th>
            //                 <th scope = "col">Update-Password</th>
            //             </tr>
            //         </thead>
            //         <tbody>
            //             {userList}
            //         </tbody>
            //     </table>
                
           // </div>

           <div>
               <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell align="center">Id</StyledTableCell>
                            <StyledTableCell align="center">Username</StyledTableCell>
                            <StyledTableCell align="center">Password</StyledTableCell>
                            <StyledTableCell align="center">Update</StyledTableCell>
                            <StyledTableCell align="center">Delete</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {userList}
                    </TableBody>
                </Table>
            </TableContainer>
           </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        users:state.users
    }
}
const mapDispatchToState = (dispatch) => {
    return {
        onFetchUsers : () => dispatch(actions.fetchUsers()),
        onDeleteUser : (username) => dispatch(actions.deleteUser(username))
    }
}

export default connect(mapStateToProps,mapDispatchToState)(ViewUser);
