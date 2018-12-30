const Reducer = (
  state = {
    location: ''
  },
  action
) => {
  switch (action.type) {
    case "GET_USER_LOCATION":
      state = {
        ...state,
        location: action.payload
      }
      break;
    default:
      break;
  }
  return state;
}

export default Reducer;