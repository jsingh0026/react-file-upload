import { combineReducers } from "redux";

import membersReducer from './membersReducer'

export default combineReducers({
    member: membersReducer
});