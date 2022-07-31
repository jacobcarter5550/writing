const userList = (state = [], action) =>{
    switch (action.type) {
        case 'addToList':
            return [...action.payload]
        case 'clear' :
            return []
        default:
            return state
    }
}


export default userList