import { combineReducers } from "redux";
import cryptoLReducer from "./cryptoLReducer";
import reducer from "./reducer";
import stockLReducer from "./stockLReducer";
import authenticateReducer from "./authenticateReducer";
import nftReducer from "./nftReducer";
import tempDelistReducer from './tempDelistReducer'
import themeState from './themeReducer'
import togNav from './togNavReducer'
import definitionReducer from './definitionReducer'
import stateStock from './stateStock'
import stateCrypto from './stateCrypto'
import stateBank from './stateBank'
import totalBank from './totalBank'
import totalStock from './totalStock'
import totalCrypto from './totalCrypto'

const reducers = combineReducers({
    total : reducer,
    stockLength : stockLReducer,
    cryptoLength : cryptoLReducer,
    // auth : authenticateReducer,
    nftCollection : nftReducer,
    tempDelist : tempDelistReducer,
    // theme : themeState,
    tog : togNav,
    definitions : definitionReducer,
    stockState: stateStock,
    bankSate : stateBank,
    cryptoState: stateCrypto,
    totalBank: totalBank,
    totalStock: totalStock,
    totalCrypto: totalCrypto,
})


export default reducers