import { createSlice } from "@reduxjs/toolkit"

export const questionManReducer = createSlice({
    name: 'questionMan',
    initialState : {
        queueMan: [],
        answerMan : [],
        trace : 0
    },
    reducers : {
        startExamActionMan : (state, action) => {
            let { question, answerMan} = action.payload
            return {
                ...state,
                queueMan : question,
                answerMan
            }
        },
        moveNextActionMan : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevActionMan : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllActionMan : () => {
            return {
                queueMan: [],
                answerMan : [],
                trace : 0
            }
        }
    }
})

export const {
    startExamActionMan, 
    moveNextActionMan, 
    movePrevActionMan, 
    resetAllActionMan 
} = questionManReducer.actions

export default questionManReducer.reducer