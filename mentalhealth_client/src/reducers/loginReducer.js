
const allUsers = (state = {users: []}, action) => {
    switch (action.type) {
      case "LOGIN":
        return { users: state.users.concat(action.payload) };
      case "SIGNUP":
        return { users: state.users.concat(action.payload)};
      default:
        return state;
    }
  };
 export default allUsers;