import { createSlice } from "@reduxjs/toolkit"

export const resultBimReducer = createSlice({
    name: 'resultBim',
    initialState : {
        userIdBim : null,
        resultBim : []
    },
    reducers : {
        setUserIdBim : (state, action) => {
            state.userIdBim = action.payload
        },
        pushResultActionBim : (state, action) => {
            state.resultBim.push(action.payload)
        },
        updateResultActionBim : (state, action) => {
            const { trace, checked } = action.payload;
            state.resultBim.fill(checked, trace, trace + 1)
        },
        resetResultActionBim : () => {
            return {
                setUserIdBim : null,
                resultBim : []
            }
        }
    }
})

export const {
    setUserIdBim, 
    pushResultActionBim, 
    resetResultActionBim, 
    updateResultActionBim
} = resultBimReducer.actions;

export default resultBimReducer.reducer;