import { createSlice } from "@reduxjs/toolkit"

export const resultStruk2Reducer = createSlice({
    name: 'resultStruk2',
    initialState : {
        userIdStruk2 : null,
        resultsStruk2 : []
    },
    reducers : {
        setUserIdStruk2 : (state, action) => {
            state.userIdStruk2 = action.payload
        },
        pushResultActionStruk2 : (state, action) => {
            state.resultsStruk2.push(action.payload)
        },
        updateResultActionStruk2 : (state, action) => {
            const { trace, checked } = action.payload;
            state.resultsStruk2.fill(checked, trace, trace + 1)
        },
        resetResultActionStruk2 : () => {
            return {
                setUserIdStruk2 : null,
                resultsStruk2 : []
            }
        }
    }
})

export const {
    setUserIdStruk2, 
    pushResultActionStruk2, 
    resetResultActionStruk2, 
    updateResultActionStruk2
} = resultStruk2Reducer.actions;

export default resultStruk2Reducer.reducer;