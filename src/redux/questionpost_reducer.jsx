import { createSlice } from "@reduxjs/toolkit"

export const questionPostReducer = createSlice({
    name: 'questionPost',
    initialState : {
        queuePost: [],
        answerPost : [],
        trace : 0
    },
    reducers : {
        startExamActionPost : (state, action) => {
            let { question, answerPost} = action.payload
            return {
                ...state,
                queuePost : question,
                answerPost
            }
        },
        moveNextActionPost : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevActionPost : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllActionPost : () => {
            return {
                queuePost: [],
                answerPost : [],
                trace : 0
            }
        }
    }
})

export const {
    startExamActionPost, 
    moveNextActionPost, 
    movePrevActionPost, 
    resetAllActionPost 
} = questionPostReducer.actions

export default questionPostReducer.reducer