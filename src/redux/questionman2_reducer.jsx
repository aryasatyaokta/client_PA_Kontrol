import { createSlice } from "@reduxjs/toolkit"

export const questionMan2Reducer = createSlice({
    name: 'questionMan2',
    initialState : {
        queueMan2: [],
        answerMan2 : [],
        trace : 0
    },
    reducers : {
        startExamActionMan2 : (state, action) => {
            let { question, answerMan2} = action.payload
            return {
                ...state,
                queueMan2 : question,
                answerMan2
            }
        },
        moveNextActionMan2 : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevActionMan2 : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllActionMan2 : () => {
            return {
                queueMan2: [],
                answerMan2 : [],
                trace : 0
            }
        }
    }
})

export const {
    startExamActionMan2, 
    moveNextActionMan2, 
    movePrevActionMan2, 
    resetAllActionMan2 
} = questionMan2Reducer.actions

export default questionMan2Reducer.reducer