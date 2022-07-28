export const addToTotal = (amount) => {
    return (dispatch) => {
        return dispatch({
            type : 'add',
            payload : amount
        })
    }
}

export const clearTotal = () =>{
    return (dispatch) => {
        return dispatch({
            type: 'clear'
        })
    }
}

export const addToStockLTotal = (amount) =>{
    return (dispatch) => {
        return dispatch({
            type : 'addToStock',
            payload : amount
        })
    }
}


export const addToCryptoLTotal = (amount) =>{
    return (dispatch) => {
        return dispatch({
            type : 'addToCrypto',
            payload : amount
        })
    }
}

export const authenticate = () =>{
    return (dispatch) => {
        return dispatch({
            type : 'authenticate',
        })
    }
}

export const authOut = () =>{
    return (dispatch) => {
        return dispatch({
            type : 'logout',
        })
    }
}

export const addToNftCollection = (nft) =>{
    return (dispatch) => {
        return dispatch({
            type : 'addNft',
            payload : nft
        })
    }
}

export const clearNft = () =>{
    return (dispatch) => {
        return dispatch({
            type: 'clearNft'
        })
    }
}

export const addToTempDelist = (item) =>{
    return (dispatch) => {
        return dispatch({
            type : 'addTempDelist',
            payload : item
        })
    }
}

export const updateTheme = (theme) =>{
    return (dispatch) =>{
        return dispatch({
            type: 'updateTheme',
            payload : theme
        })
    }
}

export const togNav = () => {
    return (dispatch) =>{
        return dispatch({
            type:'togNav',
        })
    }
}

export const addDef = (definition) => {
    return (dispatch) =>{
        return dispatch({
            type : 'addDef',
            payload : definition
        })
    }
}

export const addToBank = (amount) => {
    return (dispatch) =>{
        return dispatch({
            type : 'addToBank',
            payload: amount
        })
    }
}

export const addToCryptoTotal = (amount) =>{
    return(dispatch) =>{
        return dispatch({
            type : 'addToCryptoTotal',
            payload: amount
        })
    }
}
export const addToStockTotal = (amount) =>{
    return(dispatch) =>{
        return dispatch({
            type : 'addToStockTotal',
            payload: amount
        })
    }
}
export const addToBankTotal = (amount) =>{
    return(dispatch) =>{
        return dispatch({
            type : 'addToBankTotal',
            payload: amount
        })
    }
}

export const updateStockState = (newState) =>{
    return(dispatch) =>{
        return dispatch({
            type : 'updateStockState',
            payload: newState
        })
    }
}

export const updateBankState = (newState) =>{
    return(dispatch) =>{
        return dispatch({
            type : 'updateBankState',
            payload: newState
        })
    }
}

export const updateCryptoState = (newState) =>{
    return(dispatch) =>{
        return dispatch({
            type : 'updateCryptoState',
            payload: newState
        })
    }
}

export const clearBt = () => {
    return(dispatch) =>{
        return dispatch({
            type:'clearBT'
        })
    }
}

export const clearCt = () => {
    return(dispatch) =>{
        return dispatch({
            type:'clearCT'
        })
    }
}
export const clearSt = () => {
    return(dispatch) =>{
        return dispatch({
            type:'clearST'
        })
    }
}