const initialState = {
    message:'',
    bookings: [],
    users:[],
    feedbacks:[],
    bus:[],

    //login 
    errorMessage:'',
    user:undefined,
    progress:false,
    login:false,
}

const reducer = (state = initialState, {type,payload}) => {

    
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
            return {...state, bookings:payload};

        case "UPDATE_BOOKING" :
            return {bookings:state.bookings};

        case "FIND_BOOKING_USER":
            //console.log(paylaod)
            return {...state,bookings:payload}


        case "ADD_USER":
            return {message:payload.message, users:state.users};

        case "DELETE_USER":
            var filteredList1 = state.users.filter((user) => 
            user.username !== payload.username)
            console.log(filteredList1)
            return {users:filteredList1};

        case "FIND_USERS":
            console.log(payload)
            return {...state, users:payload};

        case  "UPDATE_USER":
        return {message:payload.message,users:state.users}   

        case "LOGIN_USER":
            return {users:state.users}


        
        case "ADD_BUS":
        return {message:payload.message,bus:state.bus}

        case "FIND_BUS":
            console.log(payload)
            return {...state,bus: payload}

        case "DELETE_BUS":
            var filteredList2 = state.bus.filter((bus)=>
                bus.busNumber !== payload.busNumber)        
            return { bus: filteredList2 } 



        case "ADD_FEEDBACK":
            return {message: payload.message, feedbacks: state.feedbacks}
        
        case "FIND_FEEDBACK":
            console.log(payload)
            return {...state,feedbacks:payload}

        case "GET_USER":
                return {...state,user: payload};

         case "ERROR_USER":
                return {...state, errorMessage: payload};  
                    
        default:
            return state    
    }

}
export default reducer;