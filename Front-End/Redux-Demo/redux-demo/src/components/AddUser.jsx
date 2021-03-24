import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'

class AddUser extends Component {
    constructor(){
        super();
        this.username = React.createRef();
        this.password = React.createRef();
        this.state = {message:''}
    }

    addUser(event){
        console.log('Method for adding User:',this.username.current.value)
        console.log('Method for adding User:', this.password.current.value)

        event.preventDefault();

        this.props.onAddUser({username:this.username.current.value,password:this.password.current.value})
    }
    render() {
        return (
            <div>
                 <div className="alert alert-success" role="alert">
                    {this.state.message}
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">UserName</span>
                </div>
                <input type="text" ref={this.username} className="form-control" placeholder="Enter Name" aria-label="Username" aria-describedby="basic-addon1"  required />
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Password</span>
                </div>
                <input type="password" ref={this.password} className="form-control" placeholder="Password" aria-label="Username"  aria-describedby="basic-addon1"  required /  >
                </div>


                <button type="button" className="btn btn-primary" onClick={this.addUser.bind(this)}>Add User</button> 
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
        onAddUser: (payload) => dispatch(actions.addUser(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(AddUser);