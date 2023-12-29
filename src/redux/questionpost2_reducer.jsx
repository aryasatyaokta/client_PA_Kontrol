import { createSlice } from "@reduxjs/toolkit"

export const questionPost2Reducer = createSlice({
    name: 'questionPost2',
    initialState : {
        queuePost2: [],
        answerPost2 : [],
        trace : 0
    },
    reducers : {
        startExamActionPost2 : (state, action) => {
            let { question, answerPost2} = action.payload
            return {
                ...state,
                queuePost2 : question,
                answerPost2
            }
        },
        moveNextActionPost2 : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevActionPost2 : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllActionPost2 : () => {
            return {
                queuePost2: [],
                answerPost2 : [],
                trace : 0
            }
        }
    }
})

export const {
    startExamActionPost2, 
    moveNextActionPost2, 
    movePrevActionPost2, 
    resetAllActionPost2 
} = questionPost2Reducer.actions

export default questionPost2Reducer.reducer