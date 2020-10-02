import * as ACTION from '../constants';

const membersReducer = (state = {loading: true}, {type, payload}) => {
    switch(type) {
        case ACTION.REQUEST_API_DATA:
            return {
                loading: true
            };
        case ACTION.RECEIVE_API_DATA:
            return {
                loading: false,
                payload: payload
            };
        default:
            return state;
    }
}

export default membersReducer