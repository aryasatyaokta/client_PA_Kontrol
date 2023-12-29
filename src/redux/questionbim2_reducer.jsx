import { createSlice } from "@reduxjs/toolkit"

export const questionBim2Reducer = createSlice({
    name: 'questionBim2',
    initialState : {
        queueBim2: [],
        answerBim2 : [],
        trace : 0
    },
    reducers : {
        startExamActionBim2 : (state, action) => {
            let { question, answerBim2} = action.payload
            return {
                ...state,
                queueBim2 : question,
                answerBim2
            }
        },
        moveNextActionBim2 : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevActionBim2 : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllActionBim2 : () => {
            return {
                queueBim2: [],
                answerBim2 : [],
                trace : 0
            }
        }
    }
})

export const {
    startExamActionBim2, 
    moveNextActionBim2, 
    movePrevActionBim2, 
    resetAllActionBim2 
} = questionBim2Reducer.actions

export default questionBim2Reducer.reducer