import { createSlice } from "@reduxjs/toolkit"

export const resultStrukReducer = createSlice({
    name: 'resultStruk',
    initialState : {
        userIdStruk : null,
        resultsStruk : []
    },
    reducers : {
        setUserIdStruk : (state, action) => {
            state.userIdStruk = action.payload
        },
        pushResultActionStruk : (state, action) => {
            state.resultsStruk.push(action.payload)
        },
        updateResultActionStruk : (state, action) => {
            const { trace, checked } = action.payload;
            state.resultsStruk.fill(checked, trace, trace + 1)
        },
        resetResultActionStruk : () => {
            return {
                setUserIdStruk : null,
                resultsStruk : []
            }
        }
    }
})

export const {
    setUserIdStruk, 
    pushResultActionStruk, 
    resetResultActionStruk, 
    updateResultActionStruk
} = resultStrukReducer.actions;

export default resultStrukReducer.reducer;