const initialState = {
  updateMessage: "",
  addMessage: "",
  feedbackMessage: "",

  message: "",
  bookings: [],
  users: [],
  feedbacks: [],
  bus: [],
  busOperators: [],
  busOp: [],

  //login
  errorMessage: "",
  user: undefined,
  admin: undefined,
  busOps: undefined,
  progress: false,
  login: false,
  revenue: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_BOOKING":
      return { addMessage: payload.message, bookings: state.bookings };

    case "DELETE_BOOKING":
      var filteredList = state.bookings.filter(
        (booking) => booking.bookingId !== payload.bookingId
      );
      //console.log(filteredList)
      return { bookings: filteredList };

    case "FIND_BOOKINGS":
      console.log(payload);
      return { ...state, bookings: payload };

    case "UPDATE_BOOKING":
      return { updateMessage: payload.message, bookings: state.bookings };

    case "FIND_BOOKING_USER":
      //console.log(paylaod)
      return { ...state, bookings: payload };

    case "ADD_USER":
      return { message: payload.message, users: state.users };

    case "DELETE_USER":
      var filteredList1 = state.users.filter(
        (user) => user.username !== payload.username
      );
      console.log(filteredList1);
      return { users: filteredList1 };

    case "FIND_USERS":
      console.log(payload);
      return { ...state, users: payload };

    case "UPDATE_USER":
      return { message: payload.message, users: state.users };

    case "LOGIN_USER":
      return { users: state.users };

    case "ADD_BUS":
      return { message: payload.message, bus: state.bus };

    case "FIND_BUS":
      console.log(payload);
      return { ...state, bus: payload };

    case "DELETE_BUS":
      var filteredList2 = state.bus.filter(
        (bus) => bus.busNumber !== payload.busNumber
      );
      return { bus: filteredList2 };

    case "FIND_BUSOPERATOR":
      console.log(payload);
      return { ...state, busOperators: payload };

    case "ADD_FEEDBACK":
      console.log(payload);
      return { feedbackMessage: payload.message, feedbacks: state.feedbacks };

    case "FIND_FEEDBACK":
      console.log(payload);
      return { ...state, feedbacks: payload };

    //user login

    case "GET_USER":
      return { ...state, user: payload };

    case "ERROR_USER":
      return { ...state, errorMessage: payload };

    //admin login
    case "GET_ADMIN":
      return { ...state, admin: payload };
    case "ERROR_ADMIN":
      return { ...state, errorMessage: payload };

    //bus Op login stuffs
    case "PROGRESS":
      return { ...state, progress: payload };
    case "LOGIN":
      return { ...state, loginSuccess: payload };
    case "ERROR_BUSOP":
      return { ...state, errorMessage: payload };
    case "GET_BUSOP":
      return { ...state, busOps: payload };

    //bus Operator
    case "ADD_BUSOP":
      return { ...state, busOp: state.busOp, message: payload.message };
    case "GET_REV":
      console.log(payload);
      return { ...state, revenue: payload };

    default:
      return state;
  }
};
export default reducer;
