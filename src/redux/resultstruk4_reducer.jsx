import { createSlice } from "@reduxjs/toolkit"

export const resultStruk4Reducer = createSlice({
    name: 'resultStruk4',
    initialState : {
        userIdStruk4 : null,
        resultsStruk4 : []
    },
    reducers : {
        setUserIdStruk4 : (state, action) => {
            state.userIdStruk4 = action.payload
        },
        pushResultActionStruk4 : (state, action) => {
            state.resultsStruk4.push(action.payload)
        },
        updateResultActionStruk4 : (state, action) => {
            const { trace, checked } = action.payload;
            state.resultsStruk4.fill(checked, trace, trace + 1)
        },
        resetResultActionStruk4 : () => {
            return {
                setUserIdStruk4 : null,
                resultsStruk4 : []
            }
        }
    }
})

export const {
    setUserIdStruk4, 
    pushResultActionStruk4, 
    resetResultActionStruk4, 
    updateResultActionStruk4
} = resultStruk4Reducer.actions;

export default resultStruk4Reducer.reducer;