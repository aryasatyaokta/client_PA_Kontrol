import { createSlice } from "@reduxjs/toolkit"

export const questionStruk6Reducer = createSlice({
    name: 'questionStruk6',
    initialState : {
        queueStruk6: [],
        answerStruk6 : [],
        trace : 0
    },
    reducers : {
        startExamActionStruk6 : (state, action) => {
            let { question, answerStruk6} = action.payload
            return {
                ...state,
                queueStruk6 : question,
                answerStruk6
            }
        },
        moveNextActionStruk6 : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevActionStruk6 : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllActionStruk6 : () => {
            return {
                queueStruk6: [],
                answerStruk6 : [],
                trace : 0
            }
        }
    }
})

export const {
    startExamActionStruk6, 
    moveNextActionStruk6, 
    movePrevActionStruk6, 
    resetAllActionStruk6 
} = questionStruk6Reducer.actions

export default questionStruk6Reducer.reducer