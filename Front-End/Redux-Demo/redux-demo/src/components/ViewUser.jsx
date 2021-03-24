import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions/action'

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
        return this.props.onDeleteUser(username)
    }


    render() {

        
        var userList = this.state.users.map((user,i) => {
            return (
                <tr key ={i}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td><button type="button" className="btn btn-danger" onClick={this.deleteUser.bind(this,user.username)}> X </button></td>
                </tr>
            )
        })


        return (
            <div className="row">

                <div className = "alert alert-success" role ="alert">
                    {this.state.message}
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope ="col">UserName</th>
                            <th scope = "col">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList}
                    </tbody>
                </table>
                
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
