import { Action } from '../actions/index'
import { ActionType } from '../actionTypes';
const initState = 0;

const reducer = (state = initState,action: Action ) => {
    switch (action.type) {
        case ActionType.TEST:
            return state + action.payload
        case ActionType.TT:
            return state - action.payload

        default:
            return 0
    }
}
export default reducer