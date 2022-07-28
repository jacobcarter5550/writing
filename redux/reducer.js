const reducer = (state = [0,0,0], action) =>{
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        case 'clear' :
            return []
        default:
            return state
    }
}


export default reducer