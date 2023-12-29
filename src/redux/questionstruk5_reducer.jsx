import { createSlice } from "@reduxjs/toolkit"

export const questionStruk5Reducer = createSlice({
    name: 'questionStruk5',
    initialState : {
        queueStruk5: [],
        answerStruk5 : [],
        trace : 0
    },
    reducers : {
        startExamActionStruk5 : (state, action) => {
            let { question, answerStruk5} = action.payload
            return {
                ...state,
                queueStruk5 : question,
                answerStruk5
            }
        },
        moveNextActionStruk5 : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevActionStruk5 : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllActionStruk5 : () => {
            return {
                queueStruk5: [],
                answerStruk5 : [],
                trace : 0
            }
        }
    }
})

export const {
    startExamActionStruk5, 
    moveNextActionStruk5, 
    movePrevActionStruk5, 
    resetAllActionStruk5 
} = questionStruk5Reducer.actions

export default questionStruk5Reducer.reducer