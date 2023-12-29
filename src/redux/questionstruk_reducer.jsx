import { createSlice } from "@reduxjs/toolkit"

export const questionStrukReducer = createSlice({
    name: 'questionStruk',
    initialState : {
        queueStruk: [],
        answerStruk : [],
        trace : 0
    },
    reducers : {
        startExamActionStruk : (state, action) => {
            let { question, answerStruk} = action.payload
            return {
                ...state,
                queueStruk : question,
                answerStruk
            }
        },
        moveNextActionStruk : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevActionStruk : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllActionStruk : () => {
            return {
                queueStruk: [],
                answerStruk : [],
                trace : 0
            }
        }
    }
})

export const {
    startExamActionStruk, 
    moveNextActionStruk, 
    movePrevActionStruk, 
    resetAllActionStruk 
} = questionStrukReducer.actions

export default questionStrukReducer.reducer