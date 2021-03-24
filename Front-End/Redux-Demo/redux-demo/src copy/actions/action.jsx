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
        fetch('http://localhost:8090/api/v1/bookings/', requestOptions)
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
        fetch('http://localhost:8090/api/v1/bookings/', requestOptions)
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
        fetch('http://localhost:8090/api/v1/bookings/' + bookingId, requestOptions)
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
        fetch('http://localhost:8090/api/v1/bookings/update/' + id + '/' + date, requestOptions)
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

// export const saveEmployee = (payload) => {

//     // http call using fetch.POST method

//     return {type: "ADD_EMPLOYEE", payload: {message: "Successfully added employee!!"}}
// }


// export const addEmployee = (payload) => {

//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//     };
//     return dispatch => {
//         fetch('http://localhost:8090/employees/', requestOptions)
//             .then(res => {
//                 console.log(res)
//                 // console.log(res.json())
//                 if(res.status === 201){
//                     console.log("success");
//                     dispatch(saveEmployee())
//                 }
//             })
        
//     }

// }


// export const findEmployees = (payload) => {
//     return {type: "FIND_EMPLOYEES", payload: payload}
// }

// export const fetchEmployees = () => {

//     const requestOptions = {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' }
//     };
//     return dispatch => {
//         fetch('http://localhost:8090/employees', requestOptions)
//             .then(res => {
//                 console.log(res);
//                 return res.json();
//             })
//             .then(data => {
//                 console.log(data);
//                 dispatch(findEmployees(data));
//             })
        
//     }

// }


// const removeEmployee = (payload) => {
//     return {type:"DELETE_EMPLOYEE", payload:{message: "Successfully Deleted employee!!"}}
// }

// export const deleteEmployee = (id) => {
//     const requestOptions = {
//         method:'DELETE',
//         headers:{'Content-Type' : 'application/json'}
//     };
//     return dispatch => {
//         fetch("http://localhost:8090/employees/" + id, requestOptions)
//         .then(res => {
//             console.log(res) 
//         })
//         .then(data=>{
//             console.log(data)
//             dispatch(removeEmployee(data))
//             dispatch(fetchEmployees(data))
//         })
//     }
// }



// const EditEmployee = (payload) =>{
//     console.log('inside update user')
//         return {type : "UPDATE_EMPLOYEE",payload : {message : "Successfully updated user"}}
    
//     }
    
//     export const updateEmployee = (payload) =>{
//          const requestOptions = {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(payload)
//         };
//         return dispatch => {
//             fetch('http://localhost:8090/employees', requestOptions)
//                 .then(res => {
//                     console.log(res)
//                     // console.log(res.json())
//                     if(res.status === 204){
//                         console.log("success");
//                         dispatch(EditEmployee(payload))
//                     }
//                 })
//     }}
  