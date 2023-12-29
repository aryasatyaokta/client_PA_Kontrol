import { createSlice } from "@reduxjs/toolkit"

export const resultManReducer = createSlice({
    name: 'resultMan',
    initialState : {
        userIdMan : null,
        resultMan : []
    },
    reducers : {
        setUserIdMan : (state, action) => {
            state.userIdMan = action.payload
        },
        pushResultActionMan : (state, action) => {
            state.resultMan.push(action.payload)
        },
        updateResultActionMan : (state, action) => {
            const { trace, checked } = action.payload;
            state.resultMan.fill(checked, trace, trace + 1)
        },
        resetResultActionMan : () => {
            return {
                setUserIdMan : null,
                resultMan : []
            }
        }
    }
})

export const {
    setUserIdMan, 
    pushResultActionMan, 
    resetResultActionMan, 
    updateResultActionMan
} = resultManReducer.actions;

export default resultManReducer.reducer;