import { createSlice } from "@reduxjs/toolkit"

export const resultBim2Reducer = createSlice({
    name: 'resultBim2',
    initialState : {
        userIdBim2 : null,
        resultBim2 : []
    },
    reducers : {
        setUserIdBim2 : (state, action) => {
            state.userIdBim2 = action.payload
        },
        pushResultActionBim2 : (state, action) => {
            state.resultBim2.push(action.payload)
        },
        updateResultActionBim2 : (state, action) => {
            const { trace, checked } = action.payload;
            state.resultBim2.fill(checked, trace, trace + 1)
        },
        resetResultActionBim2 : () => {
            return {
                setUserIdBim2 : null,
                resultBim2 : []
            }
        }
    }
})

export const {
    setUserIdBim2, 
    pushResultActionBim2, 
    resetResultActionBim2, 
    updateResultActionBim2
} = resultBim2Reducer.actions;

export default resultBim2Reducer.reducer;