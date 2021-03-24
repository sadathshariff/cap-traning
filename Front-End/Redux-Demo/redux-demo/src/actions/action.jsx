const baseUrl = 'http://localhost:8090/api/v1/bookings'

export const saveBooking = (payload) => {
    return {type:"ADD_BOOKING",payload:{message:"Successfully added Booking!"}}
}

export const addBooking = (payload) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch(baseUrl+'/', requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveBooking())
                }
            })   
    }
}

export const findBookings = (payload) => {
    return {type: "FIND_BOOKINGS", payload: payload}
}

export const fetchBookings = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch(baseUrl+'/getall', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findBookings(data));
            }) 
    }
}

const removeBooking = (payload) => {
    return {type: "DELETE_BOOKING", payload:{message:"Delete Booking Successfull"}}
}

export const deleteBooking = (bookingId) =>{
    
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        let message = ''
        console.log('Deleting booking ...' , bookingId)
        fetch(baseUrl+'/' + bookingId, requestOptions)
            .then(res => {
                console.log(res);
                if(res.status === 200){
                    message = 'Booking successfully deleted'
                }
                else{
                    message = 'Failed to delete booking'
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(removeBooking({bookings: data, message}))
                dispatch(fetchBookings())
            }) 
    }
}

const updateBooking = () => {
    return {type: "UPDATE_BOOKING", payload:{message: "Successfully updated"}}
}

export const updateBookings = (id, date) =>{
    
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({bookingId: id, date: date})
    };
    return dispatch => {
        fetch( baseUrl+'/'+id+':'+ date, requestOptions)
            .then(response =>{
                console.log(response.status);
                if(response.status === 200){
                    // this.setState({date: this.date.current.value})
                    // this.setState({message: 'Booking updated sucessfully!'})
                    dispatch(updateBooking())
            }
            })
    }
}


export const saveUser = (payload) => {
    return {type:"ADD_USER", payload:{message:"Successfully added User"}}
}

export const addUser = (payload) => {
    const requestOptions = {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8090/api/v1/users/',requestOptions)
        .then(res => {
            console.log(res)
            if(res.status === 201){
                console.log("Success");
                dispatch(saveUser())
            }
        })
    }
}

export const  findUsers = (payload) => {
    return {type:"FIND_USERS", payload:payload}
}

export const fetchUsers = () => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8090/api/v1/users/',requestOptions)
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(data => {
            console.log(data);
            dispatch(findUsers(data));
        })
    }
}

export const  removeUser = (payload) => {
    return {type:"DELETE_USER",paylaod:{message:"Delete User Successfull"}}
}

export const deleteUser = (username) => {
    const requestOptions = {
        method:'DELETE',
        headers:{'Content-Type' : 'application/json'}
    };
    return dispatch => {
        let message ="";
        console.log('Deleting User...',username)
        fetch('http://localhost:8090/api/v1/users/delete/'+username,requestOptions)
        .then(res => {
            console.log(res);
            if(res.status === 201){
                message = "User deleted Sucessfully"
            }
            else{
                message="failed"
            }

             
            
        })
        .then(data => {
            console.log(data);
            dispatch(removeUser({ users:data, message}))
            dispatch(fetchUsers())
        })
    }
}


const updateUserPassword = (payload) => {
    return {type: "UPDATE_USER", payload:{message: "Successfully updated"}}
}

export const updateUser = (username, password) =>{
    
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username: username, password: password})
    };
    return dispatch => {
        fetch( 'http://localhost:8090/api/v1/users/update/'+username+'/'+password, requestOptions)
            .then(response =>{
                console.log(response.status);
                if(response.status === 201){
                    // this.setState({date: this.date.current.value})
                    // this.setState({message: 'Booking updated sucessfully!'})
                    dispatch(updateUserPassword())
            }
            })
    }
}
