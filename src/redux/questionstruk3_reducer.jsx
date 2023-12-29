import { createSlice } from "@reduxjs/toolkit"

export const questionStruk3Reducer = createSlice({
    name: 'questionStruk3',
    initialState : {
        queueStruk3: [],
        answerStruk3 : [],
        trace : 0
    },
    reducers : {
        startExamActionStruk3 : (state, action) => {
            let { question, answerStruk3} = action.payload
            return {
                ...state,
                queueStruk3 : question,
                answerStruk3
            }
        },
        moveNextActionStruk3 : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevActionStruk3 : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllActionStruk3 : () => {
            return {
                queueStruk3: [],
                answerStruk3 : [],
                trace : 0
            }
        }
    }
})

export const {
    startExamActionStruk3, 
    moveNextActionStruk3, 
    movePrevActionStruk3, 
    resetAllActionStruk3 
} = questionStruk3Reducer.actions

export default questionStruk3Reducer.reducer