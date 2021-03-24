const initialState = {
    message:'',
    bookings: [

    ],
    users:[

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
            return {bookings:payload};
        case "UPDATE_BOOKING" :
            return {bookings:state.bookings};
        case "ADD_USER":
            return {message:payload.message, users:state.users};
        case "DELETE_USER":
            var filteredList1 = state.users.filter((user) => 
            user.username !== payload.username)
            console.log(filteredList1)
            return {users:filteredList1};
        case "FIND_USERS":
            console.log(payload)
            return {users:payload};
        case  "UPDATE_USER":
        return {message:payload.message,users:state.users}    
        default:
            return state    
    }

}
export default reducer;