import { createSlice } from "@reduxjs/toolkit"

export const resultPostReducer = createSlice({
    name: 'resultPost',
    initialState : {
        userIdPost : null,
        resultPost : []
    },
    reducers : {
        setUserIdPost: (state, action) => {
            state.userIdPost = action.payload
        },
        pushResultActionPost : (state, action) => {
            state.resultPost.push(action.payload)
        },
        updateResultActionPost : (state, action) => {
            const { trace, checked } = action.payload;
            state.resultPost.fill(checked, trace, trace + 1)
        },
        resetResultActionPost : () => {
            return {
                setUserIdPost : null,
                resultPost : []
            }
        }
    }
})

export const {
    setUserIdPost, 
    pushResultActionPost, 
    resetResultActionPost, 
    updateResultActionPost
} = resultPostReducer.actions;

export default resultPostReducer.reducer;