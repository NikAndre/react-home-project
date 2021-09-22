import {applyMiddleware, createStore} from "redux";
import reducer from './reducer';
import logger from "./middleware/logger";
import genId from "./middleware/genId";

const store = createStore(
    reducer,
    applyMiddleware(
        genId,
        logger
    ));

export default  store;