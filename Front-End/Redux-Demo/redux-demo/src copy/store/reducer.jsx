
// const initialState = {
//     message: '',
//     employees: [
//         // { id: 11, name: 'Abhinav', salary: 12345 },
//         // { id: 102, name: 'Abhishek', salary: 23456 },
//         // { id: 103, name: 'Ajay', salary: 34567 }
//     ]
// }

const initialState = {
    message:'',
    bookings: [

    ]
}

const reducer = (state = initialState, {type,payload}) => {

    console.log(type);
    switch(type){

        case "ADD_BOOKING" :
            return {message:payload.message, bookings:state.bookings};

        case "DELETE_BOOKING" :
            var filteredList = state.bookings.filter((booking)=>
            booking.bookingId !== payload.bookingId)
        //console.log(filteredList)
            return {bookings:filteredList}
        case "FIND_BOOKINGS":
            console.log(payload);
            return {bookings:payload}
        case "UPDATE_BOOKING" :
            return {bookings:state.bookings}
        default:
            return state    
    }

}

// const reducer = (state = initialState, { type, payload }) => {

//     console.log(type);
//     switch (type) {

//         case "ADD_EMPLOYEE":
//             // let newEmployees = [...state.employees, payload]
//             return { message: payload.message, employees: state.employees };
//         case "DELETE_EMPLOYEE":
//             var filteredList = state.employees.filter((employee) => {
//                 if (employee.id != payload.id) {
//                     return employee;
//                 }
//             })
//             console.log(filteredList)
//             return { message: payload.message, employees: filteredList }
//         case "FIND_EMPLOYEES":

//             console.log(payload)
//             // newEmployees = [...payload]
//             return {employees: payload }

//         case "UPDATE_EMPLOYEE":
//             return {message:payload.message,employees:state.employees}   
            
//         default:
//             return state
//     }
// }

export default reducer;