export default function manageUsers(state = { users: [] }, action){
  switch(action.type){
    case 'ADD_USER':
    console.log("Current state.users length %s", state.users.length);
      return Object.assign({}, state, {users: state.users.concat(action.user)} )
    default:
     return state
  }
}
