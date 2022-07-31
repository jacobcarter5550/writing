export const addToTotal = (amount) => {
    return (dispatch) => {
        return dispatch({
            type : 'add',
            payload : amount
        })
    }
}

export const addToList = (list) => {
    return (dispatch) => {
        return dispatch({
            type : 'addToList',
            payload : list
        })
    }
}