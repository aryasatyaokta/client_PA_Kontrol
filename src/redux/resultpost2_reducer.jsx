import { createSlice } from "@reduxjs/toolkit"

export const resultPost2Reducer = createSlice({
    name: 'resultPost2',
    initialState : {
        userIdPost2 : null,
        resultPost2 : []
    },
    reducers : {
        setUserIdPost2: (state, action) => {
            state.userIdPost2 = action.payload
        },
        pushResultActionPost2 : (state, action) => {
            state.resultPost2.push(action.payload)
        },
        updateResultActionPost2 : (state, action) => {
            const { trace, checked } = action.payload;
            state.resultPost2.fill(checked, trace, trace + 1)
        },
        resetResultActionPost2 : () => {
            return {
                setUserIdPost2 : null,
                resultPost2 : []
            }
        }
    }
})

export const {
    setUserIdPost2, 
    pushResultActionPost2, 
    resetResultActionPost2, 
    updateResultActionPost2
} = resultPost2Reducer.actions;

export default resultPost2Reducer.reducer;