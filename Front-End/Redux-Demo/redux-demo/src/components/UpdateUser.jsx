import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'

 class UpdateUser extends Component {

    constructor(){
        super();
        this.username = React.createRef();
        this.password = React.createRef();
        this.state = {message:''}
    }

    updateUser(event){
        console.log('Method for updating user',this.props.match.params.username)
        console.log('password', this.password.current.value )

        event.preventDefault();
        this.props.onUpdateUser(this.props.match.params.username,this.password.current.value)
    }
    render() {
        return (
            <div>

                    <div className="alert alert-success" role="alert">
                        {this.props.message}
                    </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">UserName</span>
                    </div>
                    <input type="text" value={this.props.match.params.username} disabled className="form-control" placeholder="Enter UserName" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Password</span>
                    </div>
                    <input type="password" ref={this.password} className="form-control" placeholder="Enter Password" aria-label="Username" aria-describedby="basic-addon1" />
                </div>


                <button type="button" className="btn btn-primary" onClick={this.updateUser.bind(this)}>Update Password</button>
                
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
        onUpdateUser: (username,password) => dispatch(actions.updateUser(username,password))
    }
}

export default connect(mapStateToProps,mapDispatchToState)(UpdateUser);

