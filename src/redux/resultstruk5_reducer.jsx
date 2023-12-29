import { createSlice } from "@reduxjs/toolkit"

export const resultStruk5Reducer = createSlice({
    name: 'resultStruk5',
    initialState : {
        userIdStruk5 : null,
        resultsStruk5 : []
    },
    reducers : {
        setUserIdStruk5 : (state, action) => {
            state.userIdStruk5 = action.payload
        },
        pushResultActionStruk5 : (state, action) => {
            state.resultsStruk5.push(action.payload)
        },
        updateResultActionStruk5 : (state, action) => {
            const { trace, checked } = action.payload;
            state.resultsStruk5.fill(checked, trace, trace + 1)
        },
        resetResultActionStruk5 : () => {
            return {
                setUserIdStruk5 : null,
                resultsStruk5 : []
            }
        }
    }
})

export const {
    setUserIdStruk5, 
    pushResultActionStruk5, 
    resetResultActionStruk5, 
    updateResultActionStruk5
} = resultStruk5Reducer.actions;

export default resultStruk5Reducer.reducer;