import { createSlice } from "@reduxjs/toolkit"

export const resultMan2Reducer = createSlice({
    name: 'resultMan2',
    initialState : {
        userIdMan2 : null,
        resultMan2 : []
    },
    reducers : {
        setUserIdMan2 : (state, action) => {
            state.userIdMan2 = action.payload
        },
        pushResultActionMan2 : (state, action) => {
            state.resultMan2.push(action.payload)
        },
        updateResultActionMan2 : (state, action) => {
            const { trace, checked } = action.payload;
            state.resultMan2.fill(checked, trace, trace + 1)
        },
        resetResultActionMan2 : () => {
            return {
                setUserIdMan2 : null,
                resultMan2 : []
            }
        }
    }
})

export const {
    setUserIdMan2, 
    pushResultActionMan2, 
    resetResultActionMan2, 
    updateResultActionMan2
} = resultMan2Reducer.actions;

export default resultMan2Reducer.reducer;