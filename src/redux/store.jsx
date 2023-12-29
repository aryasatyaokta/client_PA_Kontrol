import { combineReducers, configureStore } from '@reduxjs/toolkit';

/** call reducers */
import questionReducer from './question_reducer';
import resultReducer from './result_reducer';
import questionstruk_reducer from './questionstruk_reducer';
import resultstruk_reducer from './resultstruk_reducer';
import questionbim_reducer from './questionbim_reducer';
import resultbim_reducer from './resultbim_reducer';
import questionman_reducer from './questionman_reducer';
import resultman_reducer from './resultman_reducer';
import questionstruk2_reducer from './questionstruk2_reducer';
import resultstruk2_reducer from './resultstruk2_reducer';
import questionbim2_reducer from './questionbim2_reducer';
import resultbim2_reducer from './resultbim2_reducer';
import questionman2_reducer from './questionman2_reducer';
import resultman2_reducer from './resultman2_reducer';
import questionpost_reducer from './questionpost_reducer';
import resultpost_reducer from './resultpost_reducer';
import questionpost2_reducer from './questionpost2_reducer';
import resultpost2_reducer from './resultpost2_reducer';
import questionstruk3_reducer from './questionstruk3_reducer';
import resultstruk3_reducer from './resultstruk3_reducer';
import questionstruk4_reducer from './questionstruk4_reducer';
import resultstruk4_reducer from './resultstruk4_reducer';
import questionstruk5_reducer from './questionstruk5_reducer';
import resultstruk5_reducer from './resultstruk5_reducer';
import questionstruk6_reducer from './questionstruk6_reducer';
import resultstruk6_reducer from './resultstruk6_reducer';


const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer,
    questionStruk: questionstruk_reducer,
    resultStruk: resultstruk_reducer,
    questionBim: questionbim_reducer,
    resultBim: resultbim_reducer,
    questionMan: questionman_reducer,
    resultMan: resultman_reducer,
    questionStruk2: questionstruk2_reducer,
    resultStruk2: resultstruk2_reducer,
    questionBim2: questionbim2_reducer,
    resultBim2: resultbim2_reducer,
    questionMan2: questionman2_reducer,
    resultMan2: resultman2_reducer,
    questionPost: questionpost_reducer,
    resultPost: resultpost_reducer,
    questionPost2: questionpost2_reducer,
    resultPost2: resultpost2_reducer,
    questionStruk3: questionstruk3_reducer,
    resultStruk3: resultstruk3_reducer,
    questionStruk4: questionstruk4_reducer,
    resultStruk4: resultstruk4_reducer,
    questionStruk5: questionstruk5_reducer,
    resultStruk5: resultstruk5_reducer,
    questionStruk6: questionstruk6_reducer,
    resultStruk6: resultstruk6_reducer,
})

/** create store with reducer */
export default configureStore({ reducer : rootReducer});