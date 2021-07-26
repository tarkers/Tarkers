import {ActionType} from '../actionTypes'
import { Dispatch } from 'redux'
import { Action } from '../actions'
export const userAction = (num:number)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.TEST,
            payload:num
        })
    }
}

export const anotherAction = (num:number)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.TT,
            payload:num
        })
    }
}
