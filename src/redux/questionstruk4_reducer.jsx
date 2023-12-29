import { createSlice } from "@reduxjs/toolkit"

export const questionStruk4Reducer = createSlice({
    name: 'questionStruk4',
    initialState : {
        queueStruk4: [],
        answerStruk4 : [],
        trace : 0
    },
    reducers : {
        startExamActionStruk4 : (state, action) => {
            let { question, answerStruk4} = action.payload
            return {
                ...state,
                queueStruk4 : question,
                answerStruk4
            }
        },
        moveNextActionStruk4 : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevActionStruk4 : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllActionStruk4 : () => {
            return {
                queueStruk4: [],
                answerStruk4 : [],
                trace : 0
            }
        }
    }
})

export const {
    startExamActionStruk4, 
    moveNextActionStruk4, 
    movePrevActionStruk4, 
    resetAllActionStruk4 
} = questionStruk4Reducer.actions

export default questionStruk4Reducer.reducer