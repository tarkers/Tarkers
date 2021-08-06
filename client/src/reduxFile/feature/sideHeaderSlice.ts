import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface SideHeaderState {
    key: number
    title:string,
}

// Define the initial state using that type
const initialState: SideHeaderState = {
    key: 0,
    title:"MAIN"
}

export const sideHeaderSlice = createSlice({
    name: 'sideheader',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        nextPage: (state) => {
            state.key += 1
        },
        previousPage: (state) => {
            state.key -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        jumpToPage: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
    },
})

export const { nextPage, previousPage, jumpToPage } = sideHeaderSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectKey = (state: RootState):number => state.sideHeader.key
export const selectTitle = (state: RootState):string => state.sideHeader.title

export default sideHeaderSlice.reducer