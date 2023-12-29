import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import data, {answers} from "../soal/soalPretest"
import dataStruk, {answerStruk} from "../soal/soalTerstruktur"
import dataBim, {answerBim} from "../soal/soalTerbimbing"
import dataMan, {answerMan} from "../soal/soalMandiri"
import dataStruk2, {answerStruk2} from "../soal/soalTerstruktur2"
import dataBim2, {answerBim2} from "../soal/soalTerbimbing2"
import dataMan2, {answerMan2} from "../soal/soalMandiri2"
import dataPost, {answerPost} from "../soal/soalPosttest"
import dataPost2, {answerPost2} from "../soal/soalPosttest2"
import dataStruk3, {answerStruk3} from "../soal/soalTerstruktur3"
import dataStruk4, {answerStruk4} from "../soal/soalTerstruktur4"
import dataStruk5, {answerStruk5} from "../soal/soalTerstruktur5"
import dataStruk6, {answerStruk6} from "../soal/soalTerstruktur6"

import * as Action from '../redux/question_reducer'
import * as Actions from '../redux/questionstruk_reducer'
import * as Actionb from '../redux/questionbim_reducer'
import * as Actionm from '../redux/questionman_reducer'
import * as Actions2 from '../redux/questionstruk2_reducer'
import * as Actionb2 from '../redux/questionbim2_reducer'
import * as Actionm2 from '../redux/questionman2_reducer'
import * as Actionp from '../redux/questionpost_reducer'
import * as Actionp2 from '../redux/questionpost2_reducer'
import * as Actions3 from '../redux/questionstruk3_reducer'
import * as Actions4 from '../redux/questionstruk4_reducer'
import * as Actions5 from '../redux/questionstruk5_reducer'
import * as Actions6 from '../redux/questionstruk6_reducer'

export const useFetchQestion = () => {
    const dispatch = useDispatch();   
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await data;
                
                if(question.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : question}));
                    dispatch(Action.startExamAction({ question, answers }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}


/** Terstruktur */
export const useFetchQestionStruk = () => {
    const dispatch = useDispatch();   
    const [getDataStruk, setGetDataStruk] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetDataStruk(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await dataStruk;
                
                if(question.length > 0){
                    setGetDataStruk(prev => ({...prev, isLoading : false}));
                    setGetDataStruk(prev => ({...prev, apiData : question}));
                    dispatch(Actions.startExamActionStruk({ question, answerStruk }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetDataStruk(prev => ({...prev, isLoading : false}));
                setGetDataStruk(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataStruk, setGetDataStruk];
}
/**  */


/** Terbimbing */
export const useFetchQestionBim = () => {
    const dispatch = useDispatch();   
    const [getDataBim, setGetDataBim] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetDataBim(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await dataBim;
                
                if(question.length > 0){
                    setGetDataBim(prev => ({...prev, isLoading : false}));
                    setGetDataBim(prev => ({...prev, apiData : question}));
                    dispatch(Actionb.startExamActionBim({ question, answerBim }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetDataBim(prev => ({...prev, isLoading : false}));
                setGetDataBim(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataBim, setGetDataBim];
}
/** ====== */


/** Mandiri */
export const useFetchQestionMan = () => {
    const dispatch = useDispatch();   
    const [getDataMan, setGetDataMan] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetDataMan(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await dataMan;
                
                if(question.length > 0){
                    setGetDataMan(prev => ({...prev, isLoading : false}));
                    setGetDataMan(prev => ({...prev, apiData : question}));
                    dispatch(Actionm.startExamActionMan({ question, answerMan }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetDataMan(prev => ({...prev, isLoading : false}));
                setGetDataMan(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataMan, setGetDataMan];
}
/** ======= */


/** Terstruktur 2 */
export const useFetchQestionStruk2 = () => {
    const dispatch = useDispatch();   
    const [getDataStruk2, setGetDataStruk2] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetDataStruk2(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await dataStruk2;
                
                if(question.length > 0){
                    setGetDataStruk2(prev => ({...prev, isLoading : false}));
                    setGetDataStruk2(prev => ({...prev, apiData : question}));
                    dispatch(Actions2.startExamActionStruk2({ question, answerStruk2 }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetDataStruk2(prev => ({...prev, isLoading : false}));
                setGetDataStruk2(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataStruk2, setGetDataStruk2];
}
/** ============= */

/** Terbimbing 2 */
export const useFetchQestionBim2 = () => {
    const dispatch = useDispatch();   
    const [getDataBim2, setGetDataBim2] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetDataBim2(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await dataBim2;
                
                if(question.length > 0){
                    setGetDataBim2(prev => ({...prev, isLoading : false}));
                    setGetDataBim2(prev => ({...prev, apiData : question}));
                    dispatch(Actionb2.startExamActionBim2({ question, answerBim2 }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetDataBim2(prev => ({...prev, isLoading : false}));
                setGetDataBim2(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataBim2, setGetDataBim2];
}
/** ============ */

/** Mandiri 2 */
export const useFetchQestionMan2 = () => {
    const dispatch = useDispatch();   
    const [getDataMan2, setGetDataMan2] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetDataMan2(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await dataMan2;
                
                if(question.length > 0){
                    setGetDataMan2(prev => ({...prev, isLoading : false}));
                    setGetDataMan2(prev => ({...prev, apiData : question}));
                    dispatch(Actionm2.startExamActionMan2({ question, answerMan2 }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetDataMan2(prev => ({...prev, isLoading : false}));
                setGetDataMan2(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataMan2, setGetDataMan2];
}
/** ========= */

/** Posttest */
export const useFetchQestionPost = () => {
    const dispatch = useDispatch();   
    const [getDataPost, setGetDataPost] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetDataPost(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await dataPost;
                
                if(question.length > 0){
                    setGetDataPost(prev => ({...prev, isLoading : false}));
                    setGetDataPost(prev => ({...prev, apiData : question}));
                    dispatch(Actionp.startExamActionPost({ question, answerPost }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetDataPost(prev => ({...prev, isLoading : false}));
                setGetDataPost(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataPost, setGetDataPost];
}
/** ======== */

/** Posttest2 */
export const useFetchQestionPost2 = () => {
    const dispatch = useDispatch();   
    const [getDataPost2, setGetDataPost2] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetDataPost2(prev => ({...prev, isLoading : true}));
        (async () => {
            try {
                let question = await dataPost2;
                
                if(question.length > 0){
                    setGetDataPost2(prev => ({...prev, isLoading : false}));
                    setGetDataPost2(prev => ({...prev, apiData : question}));
                    dispatch(Actionp2.startExamActionPost2({ question, answerPost2 }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetDataPost2(prev => ({...prev, isLoading : false}));
                setGetDataPost2(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataPost2, setGetDataPost2];
}
/** ======== */

/** Terstruktur 3 */
export const useFetchQestionStruk3 = () => {
    const dispatch = useDispatch();   
    const [getDataStruk3, setGetDataStruk3] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetDataStruk3(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await dataStruk3;
                
                if(question.length > 0){
                    setGetDataStruk3(prev => ({...prev, isLoading : false}));
                    setGetDataStruk3(prev => ({...prev, apiData : question}));
                    dispatch(Actions3.startExamActionStruk3({ question, answerStruk3 }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetDataStruk3(prev => ({...prev, isLoading : false}));
                setGetDataStruk3(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataStruk3, setGetDataStruk3];
}
/** ============= */

/** Terstruktur 4 */
export const useFetchQestionStruk4 = () => {
    const dispatch = useDispatch();   
    const [getDataStruk4, setGetDataStruk4] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetDataStruk4(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await dataStruk4;
                
                if(question.length > 0){
                    setGetDataStruk4(prev => ({...prev, isLoading : false}));
                    setGetDataStruk4(prev => ({...prev, apiData : question}));
                    dispatch(Actions4.startExamActionStruk4({ question, answerStruk4 }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetDataStruk4(prev => ({...prev, isLoading : false}));
                setGetDataStruk4(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataStruk4, setGetDataStruk4];
}
/** ============= */

/** Terstruktur 5 */
export const useFetchQestionStruk5 = () => {
    const dispatch = useDispatch();   
    const [getDataStruk5, setGetDataStruk5] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetDataStruk5(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await dataStruk5;
                
                if(question.length > 0){
                    setGetDataStruk5(prev => ({...prev, isLoading : false}));
                    setGetDataStruk5(prev => ({...prev, apiData : question}));
                    dispatch(Actions5.startExamActionStruk5({ question, answerStruk5 }))
                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetDataStruk5(prev => ({...prev, isLoading : false}));
                setGetDataStruk5(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataStruk5, setGetDataStruk5];
}
/** ============= */

/** Terstruktur 6 */
export const useFetchQestionStruk6 = () => {
    const dispatch = useDispatch();   
    const [getDataStruk6, setGetDataStruk6] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetDataStruk6(prev => ({...prev, isLoading : true}));

        (async () => {
            try {
                let question = await dataStruk6;
                
                if(question.length > 0){
                    setGetDataStruk6(prev => ({...prev, isLoading : false}));
                    setGetDataStruk6(prev => ({...prev, apiData : question}));
                    dispatch(Actions6.startExamActionStruk6({ question, answerStruk6 }))
                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetDataStruk6(prev => ({...prev, isLoading : false}));
                setGetDataStruk6(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getDataStruk6, setGetDataStruk6];
}
/** ============= */

/** Pretest */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction());
    } catch (error) {
        console.log(error)
    }
}
/** */


/** Terstruktur */
export const MoveNextQuestionStruk = () => async (dispatch) => {
    try {
        dispatch(Actions.moveNextActionStruk());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestionStruk = () => async (dispatch) => {
    try {
        dispatch(Actions.movePrevActionStruk());
    } catch (error) {
        console.log(error)
    }
}
/** */

/** Terbimbing */
export const MoveNextQuestionBim = () => async (dispatch) => {
    try {
        dispatch(Actionb.moveNextActionBim());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestionBim = () => async (dispatch) => {
    try {
        dispatch(Actionb.movePrevActionBim());
    } catch (error) {
        console.log(error)
    }
}

/** */


/** Mandiri */
export const MoveNextQuestionMan = () => async (dispatch) => {
    try {
        dispatch(Actionm.moveNextActionMan());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestionMan = () => async (dispatch) => {
    try {
        dispatch(Actionm.movePrevActionMan());
    } catch (error) {
        console.log(error)
    }
}
/** ======= */


/** Terstruktur 2 */
export const MoveNextQuestionStruk2 = () => async (dispatch) => {
    try {
        dispatch(Actions2.moveNextActionStruk2());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestionStruk2 = () => async (dispatch) => {
    try {
        dispatch(Actions2.movePrevActionStruk2());
    } catch (error) {
        console.log(error)
    }
}
/** ============= */

/** Terbimbing 2 */
export const MoveNextQuestionBim2 = () => async (dispatch) => {
    try {
        dispatch(Actionb2.moveNextActionBim2());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestionBim2 = () => async (dispatch) => {
    try {
        dispatch(Actionb2.movePrevActionBim2());
    } catch (error) {
        console.log(error)
    }
}
/** ============ */

/** Mandiri 2 */
export const MoveNextQuestionMan2 = () => async (dispatch) => {
    try {
        dispatch(Actionm2.moveNextActionMan2());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestionMan2 = () => async (dispatch) => {
    try {
        dispatch(Actionm2.movePrevActionMan2());
    } catch (error) {
        console.log(error)
    }
}
/** ========= */

/** Posttest */
export const MoveNextQuestionPost = () => async (dispatch) => {
    try {
        dispatch(Actionp.moveNextActionPost());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestionPost = () => async (dispatch) => {
    try {
        dispatch(Actionp.movePrevActionPost());
    } catch (error) {
        console.log(error)
    }
}
/** ======== */

/** Posttest2 */
export const MoveNextQuestionPost2 = () => async (dispatch) => {
    try {
        dispatch(Actionp2.moveNextActionPost2());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestionPost2 = () => async (dispatch) => {
    try {
        dispatch(Actionp2.movePrevActionPost2());
    } catch (error) {
        console.log(error)
    }
}
/** ======== */

/** Terstruktur 3 */
export const MoveNextQuestionStruk3 = () => async (dispatch) => {
    try {
        dispatch(Actions3.moveNextActionStruk3());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestionStruk3 = () => async (dispatch) => {
    try {
        dispatch(Actions3.movePrevActionStruk3());
    } catch (error) {
        console.log(error)
    }
}
/** ============= */

/** Terstruktur 4 */
export const MoveNextQuestionStruk4 = () => async (dispatch) => {
    try {
        dispatch(Actions4.moveNextActionStruk4());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestionStruk4 = () => async (dispatch) => {
    try {
        dispatch(Actions4.movePrevActionStruk4());
    } catch (error) {
        console.log(error)
    }
}
/** ============= */

/** Terstruktur 5 */
export const MoveNextQuestionStruk5 = () => async (dispatch) => {
    try {
        dispatch(Actions5.moveNextActionStruk5());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestionStruk5 = () => async (dispatch) => {
    try {
        dispatch(Actions5.movePrevActionStruk5());
    } catch (error) {
        console.log(error)
    }
}
/** ============= */

/** Terstruktur 6 */
export const MoveNextQuestionStruk6 = () => async (dispatch) => {
    try {
        dispatch(Actions6.moveNextActionStruk6());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestionStruk6 = () => async (dispatch) => {
    try {
        dispatch(Actions6.movePrevActionStruk6());
    } catch (error) {
        console.log(error)
    }
}
/** ============= */


