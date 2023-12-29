import { createSlice } from "@reduxjs/toolkit"

export const questionBimReducer = createSlice({
    name: 'questionBim',
    initialState : {
        queueBim: [],
        answerBim : [],
        trace : 0
    },
    reducers : {
        startExamActionBim : (state, action) => {
            let { question, answerBim} = action.payload
            return {
                ...state,
                queueBim : question,
                answerBim
            }
        },
        moveNextActionBim : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevActionBim : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllActionBim : () => {
            return {
                queueBim: [],
                answerBim : [],
                trace : 0
            }
        }
    }
})

export const {
    startExamActionBim, 
    moveNextActionBim, 
    movePrevActionBim, 
    resetAllActionBim 
} = questionBimReducer.actions

export default questionBimReducer.reducer