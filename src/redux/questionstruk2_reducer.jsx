import { createSlice } from "@reduxjs/toolkit"

export const questionStruk2Reducer = createSlice({
    name: 'questionStruk2',
    initialState : {
        queueStruk2: [],
        answerStruk2 : [],
        trace : 0
    },
    reducers : {
        startExamActionStruk2 : (state, action) => {
            let { question, answerStruk2} = action.payload
            return {
                ...state,
                queueStruk2 : question,
                answerStruk2
            }
        },
        moveNextActionStruk2 : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevActionStruk2 : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllActionStruk2 : () => {
            return {
                queueStruk2: [],
                answerStruk2 : [],
                trace : 0
            }
        }
    }
})

export const {
    startExamActionStruk2, 
    moveNextActionStruk2, 
    movePrevActionStruk2, 
    resetAllActionStruk2 
} = questionStruk2Reducer.actions

export default questionStruk2Reducer.reducer