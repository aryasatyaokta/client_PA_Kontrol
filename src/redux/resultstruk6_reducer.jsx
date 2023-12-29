import { createSlice } from "@reduxjs/toolkit"

export const resultStruk6Reducer = createSlice({
    name: 'resultStruk6',
    initialState : {
        userIdStruk6 : null,
        resultsStruk6 : []
    },
    reducers : {
        setUserIdStruk6 : (state, action) => {
            state.userIdStruk6 = action.payload
        },
        pushResultActionStruk6 : (state, action) => {
            state.resultsStruk6.push(action.payload)
        },
        updateResultActionStruk6 : (state, action) => {
            const { trace, checked } = action.payload;
            state.resultsStruk6.fill(checked, trace, trace + 1)
        },
        resetResultActionStruk6 : () => {
            return {
                setUserIdStruk6 : null,
                resultsStruk6 : []
            }
        }
    }
})

export const {
    setUserIdStruk6, 
    pushResultActionStruk6, 
    resetResultActionStruk6, 
    updateResultActionStruk6
} = resultStruk6Reducer.actions;

export default resultStruk6Reducer.reducer;