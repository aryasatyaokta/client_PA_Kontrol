import { createSlice } from "@reduxjs/toolkit"

export const resultStruk3Reducer = createSlice({
    name: 'resultStruk3',
    initialState : {
        userIdStruk3 : null,
        resultsStruk3 : []
    },
    reducers : {
        setUserIdStruk3 : (state, action) => {
            state.userIdStruk3 = action.payload
        },
        pushResultActionStruk3 : (state, action) => {
            state.resultsStruk3.push(action.payload)
        },
        updateResultActionStruk3 : (state, action) => {
            const { trace, checked } = action.payload;
            state.resultsStruk3.fill(checked, trace, trace + 1)
        },
        resetResultActionStruk3 : () => {
            return {
                setUserIdStruk3 : null,
                resultsStruk3 : []
            }
        }
    }
})

export const {
    setUserIdStruk3, 
    pushResultActionStruk3, 
    resetResultActionStruk3, 
    updateResultActionStruk3
} = resultStruk3Reducer.actions;

export default resultStruk3Reducer.reducer;