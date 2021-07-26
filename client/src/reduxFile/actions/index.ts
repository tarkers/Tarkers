import {ActionType} from '../actionTypes/index'
interface TestAction {
    type: ActionType.TEST,
    payload:number
}

interface TtAction {
    type:ActionType.TT,
    payload:number
}
export type Action = TestAction | TtAction