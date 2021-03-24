import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as actions from '../actions/action'

class UpdateEmployee extends Component {

    constructor(){
        super();
        this.name = React.createRef();
        this.salary = React.createRef();
        this.state = { employee : {},message: "" };
    }

    updateEmployee(event){

        console.log("Updating Employee...");
        console.log('name', this.name.current.value)
        console.log('salary',this.salary.current.value)

        event.preventDefault();

        this.props.onUpdateEmployee({name: this.name.current.value,  salary: this.salary.current.value})
    }

    render() {
        return (
            <div>

                <div className="alert alert-success" role="alert">
                    {this.props.message}
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Employee Name</span>
                </div>
                <input type="text" ref={this.name} className="form-control" placeholder="Enter Name" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Employee Salary</span>
                </div>
                <input type="number" ref={this.salary} className="form-control" placeholder="Enter Salary" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>


                <button type="button" className="btn btn-primary" onClick={this.updateEmployee.bind(this)}>Update Employee</button>

                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log('State is:: ', state)
    return {
        employees: state.employees,
        message:state.message
        // this.props.employee = this.state.employees;
    }
}


const mapDispatchToState = (dispatch) => {
    return {
        // onFetchEmployees: () => dispatch(actions.updateEmployee()),
        // onDeleteEmployee: (id) => dispatch(actions.deleteEmployee(id))
        onUpdateEmployee: (payload) => dispatch(actions.updateEmployee(payload))
        
    }
}



// export default ViewEmployee;
export default connect(mapStateToProps, mapDispatchToState)(UpdateEmployee);
