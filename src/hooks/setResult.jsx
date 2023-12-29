import { 
    postServerData, 
    postServerDataStruk, 
    postServerDataBim, 
    postServerDataMan,
    postServerDataStruk2, 
    postServerDataBim2,
    postServerDataMan2,
    postServerDataPost,
    postServerDataPost2,
    postServerDataStruk3,
    postServerDataStruk4,
    postServerDataStruk5,
    postServerDataStruk6} from '../helper/helper'
import * as Action from '../redux/result_reducer'
import * as Actions from '../redux/resultstruk_reducer'
import * as Actionb from '../redux/resultbim_reducer'
import * as Actionm from '../redux/resultman_reducer'
import * as Actions2 from '../redux/resultstruk2_reducer'
import * as Actionb2 from '../redux/resultbim2_reducer'
import * as Actionm2 from '../redux/resultman2_reducer'
import * as Actionp from '../redux/resultpost_reducer'
import * as Actionp2 from '../redux/resultpost2_reducer'
import * as Actions3 from '../redux/resultstruk3_reducer'
import * as Actions4 from '../redux/resultstruk4_reducer'
import * as Actions5 from '../redux/resultstruk5_reducer'
import * as Actions6 from '../redux/resultstruk6_reducer'
import { useState, useEffect } from 'react'

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResult = (resultData) => {
    console.log(resultData);
    const [isDataSent, setIsDataSent] = useState(false);

    useEffect(() => {
        if (resultData && !isDataSent) {
            const { result, username } = resultData;

            (async () => {
                try {
                    if (result.length !== 0 && username) {
                        await postServerData(`http://localhost:5000/api/result`, resultData, (data) => data);
                        console.log('Successfully posted data');
                        setIsDataSent(true);
                    } else {
                        throw new Error("Couldn't get result or username");
                    }
                } catch (error) {
                    console.log(error);
                }
            })();
        } else {
            console.log("resultData is undefined or data has been sent");
        }
    }, [resultData, isDataSent]);
};


/** Terstruktur */
export const PushAnswerStruk = (result) => async (dispatch) => {
    try {
        await dispatch(Actions.pushResultActionStruk(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultStruk = (index) => async (dispatch) => {
    try {
        dispatch(Actions.updateResultActionStruk(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResultStruk = (resultData) => {
    console.log(resultData);

    const [isDataSent, setIsDataSent] = useState(false);

    useEffect(() => {
        if (resultData && !isDataSent) {
            const { result, username } = resultData;

            (async () => {
                try {
                    if (result !== 0 && username) {
                        await postServerDataStruk(`http://localhost:5000/api/resultstruk`, resultData, (data) => data);
                        console.log('Successfully posted data');
                        setIsDataSent(true);
                    } else {
                        throw new Error("Couldn't get result or username");
                    }
                } catch (error) {
                    console.log(error);
                }
            })();
        } else {
            console.log("resultData is undefined or data has been sent");
        }
    }, [resultData, isDataSent]);
}
/** ========= */


/** Terbimbing */
export const PushAnswerBim = (result) => async (dispatch) => {
    try {
        await dispatch(Actionb.pushResultActionBim(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultBim = (index) => async (dispatch) => {
    try {
        dispatch(Actionb.updateResultActionBim(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResultBim = (resultData) => {
    console.log(resultData);
    const [isDataSent, setIsDataSent] = useState(false);

    useEffect(() => {
        if (resultData && !isDataSent) {
            const { result, username } = resultData;

            (async () => {
                try {
                    if (result !== 0 && username) {
                        await postServerDataBim(`http://localhost:5000/api/resultbim`, resultData, (data) => data);
                        console.log('Successfully posted data');
                        setIsDataSent(true);
                    } else {
                        throw new Error("Couldn't get result or username");
                    }
                } catch (error) {
                    console.log(error);
                }
            })();
        } else {
            console.log("resultData is undefined or data has been sent");
        }
    }, [resultData, isDataSent]);
}
/** ========== */


/** Mandiri */
export const PushAnswerMan = (result) => async (dispatch) => {
    try {
        await dispatch(Actionm.pushResultActionMan(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultMan = (index) => async (dispatch) => {
    try {
        dispatch(Actionm.updateResultActionMan(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResultMan = (resultData) => {
    console.log(resultData);
    const [isDataSent, setIsDataSent] = useState(false);

    useEffect(() => {
        if (resultData && !isDataSent) {
            const { result, username } = resultData;

            (async () => {
                try {
                    if (result !== 0 && username) {
                        await postServerDataMan(`http://localhost:5000/api/resultman`, resultData, (data) => data);
                        console.log('Successfully posted data');
                        setIsDataSent(true);
                    } else {
                        throw new Error("Couldn't get result or username");
                    }
                } catch (error) {
                    console.log(error);
                }
            })();
        } else {
            console.log("resultData is undefined or data has been sent");
        }
    }, [resultData, isDataSent]);
}
/** ======= */


/** Terstruktur 2 */
export const PushAnswerStruk2 = (result) => async (dispatch) => {
    try {
        await dispatch(Actions2.pushResultActionStruk2(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultStruk2 = (index) => async (dispatch) => {
    try {
        dispatch(Actions2.updateResultActionStruk2(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResultStruk2 = (resultData) => {
    console.log(resultData);
    const [isDataSent, setIsDataSent] = useState(false);

    useEffect(() => {
        if (resultData && !isDataSent) {
            const { result, username } = resultData;

            (async () => {
                try {
                    if (result !== 0 && username) {
                        await postServerDataStruk2(`http://localhost:5000/api/resultstruk2`, resultData, (data) => data);
                        console.log('Successfully posted data');
                        setIsDataSent(true);
                    } else {
                        throw new Error("Couldn't get result or username");
                    }
                } catch (error) {
                    console.log(error);
                }
            })();
        } else {
            console.log("resultData is undefined or data has been sent");
        }
    }, [resultData, isDataSent]);
}
/** ============= */

/** Terbimbing 2 */
export const PushAnswerBim2 = (result) => async (dispatch) => {
    try {
        await dispatch(Actionb2.pushResultActionBim2(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultBim2 = (index) => async (dispatch) => {
    try {
        dispatch(Actionb2.updateResultActionBim2(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResultBim2 = (resultData) => {
    console.log(resultData);
    const [isDataSent, setIsDataSent] = useState(false);

    useEffect(() => {
        if (resultData && !isDataSent) {
            const { result, username } = resultData;

            (async () => {
                try {
                    if (result !== 0 && username) {
                        await postServerDataBim2(`http://localhost:5000/api/resultbim2`, resultData, (data) => data);
                        console.log('Successfully posted data');
                        setIsDataSent(true);
                    } else {
                        throw new Error("Couldn't get result or username");
                    }
                } catch (error) {
                    console.log(error);
                }
            })();
        } else {
            console.log("resultData is undefined or data has been sent");
        }
    }, [resultData, isDataSent]);
}
/** ============ */

/** Mandiri 2 */
export const PushAnswerMan2 = (result) => async (dispatch) => {
    try {
        await dispatch(Actionm2.pushResultActionMan2(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultMan2 = (index) => async (dispatch) => {
    try {
        dispatch(Actionm2.updateResultActionMan2(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResultMan2 = (resultData) => {
    console.log(resultData);
    const [isDataSent, setIsDataSent] = useState(false);

    useEffect(() => {
        if (resultData && !isDataSent) {
            const { result, username } = resultData;

            (async () => {
                try {
                    if (result !== 0 && username) {
                        await postServerDataMan2(`http://localhost:5000/api/resultman2`, resultData, (data) => data);
                        console.log('Successfully posted data');
                        setIsDataSent(true);
                    } else {
                        throw new Error("Couldn't get result or username");
                    }
                } catch (error) {
                    console.log(error);
                }
            })();
        } else {
            console.log("resultData is undefined or data has been sent");
        }
    }, [resultData, isDataSent]);
}
/** ========= */


/** Posttest */
export const PushAnswerPost = (result) => async (dispatch) => {
    try {
        await dispatch(Actionp.pushResultActionPost(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultPost = (index) => async (dispatch) => {
    try {
        dispatch(Actionp.updateResultActionPost(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResultPost = (resultData) => {
    console.log(resultData);
    const [isDataSent, setIsDataSent] = useState(false);

    useEffect(() => {
        if (resultData && !isDataSent) {
            const { result, username } = resultData;

            (async () => {
                try {
                    if (result !== 0 && username) {
                        await postServerDataPost(`http://localhost:5000/api/resultpost`, resultData, (data) => data);
                        console.log('Successfully posted data');
                        setIsDataSent(true);
                    } else {
                        throw new Error("Couldn't get result or username");
                    }
                } catch (error) {
                    console.log(error);
                }
            })();
        } else {
            console.log("resultData is undefined or data has been sent");
        }
    }, [resultData, isDataSent]);
}
/** ======== */

/** Posttest 2 */
export const PushAnswerPost2 = (result) => async (dispatch) => {
    try {
        await dispatch(Actionp2.pushResultActionPost2(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultPost2 = (index) => async (dispatch) => {
    try {
        dispatch(Actionp2.updateResultActionPost2(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResultPost2 = (resultData) => {
    console.log(resultData);
    const [isDataSent, setIsDataSent] = useState(false);

    useEffect(() => {
        if (resultData && !isDataSent) {
            const { result, username } = resultData;

            (async () => {
                try {
                    if (result !== 0 && username) {
                        await postServerDataPost2(`http://localhost:5000/api/resultpost2`, resultData, (data) => data);
                        console.log('Successfully posted data');
                        setIsDataSent(true);
                    } else {
                        throw new Error("Couldn't get result or username");
                    }
                } catch (error) {
                    console.log(error);
                }
            })();
        } else {
            console.log("resultData is undefined or data has been sent");
        }
    }, [resultData, isDataSent]);
}
/** ========== */

/** Terstruktur 3 */
export const PushAnswerStruk3 = (result) => async (dispatch) => {
    try {
        await dispatch(Actions3.pushResultActionStruk3(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultStruk3 = (index) => async (dispatch) => {
    try {
        dispatch(Actions3.updateResultActionStruk3(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResultStruk3 = (resultData) => {
    console.log(resultData);

    // Mengecek apakah data sudah terkirim atau belum
    const [isDataSent, setIsDataSent] = useState(false);

    useEffect(() => {
        if (resultData && !isDataSent) {
            const { result, username } = resultData;

            (async () => {
                try {
                    if (result !== 0 && username) {
                        await postServerDataStruk3(`http://localhost:5000/api/resultstruk3`, resultData, (data) => data);
                        console.log('Successfully posted data');
                        setIsDataSent(true);
                    } else {
                        throw new Error("Couldn't get result or username");
                    }
                } catch (error) {
                    console.log(error);
                }
            })();
        } else {
            console.log("resultData is undefined or data has been sent");
        }
    }, [resultData, isDataSent]);
}
/** ============= */

/** Terstruktur 4 */
export const PushAnswerStruk4 = (result) => async (dispatch) => {
    try {
        await dispatch(Actions4.pushResultActionStruk4(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultStruk4 = (index) => async (dispatch) => {
    try {
        dispatch(Actions4.updateResultActionStruk4(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResultStruk4 = (resultData) => {
    console.log(resultData);
    const [isDataSent, setIsDataSent] = useState(false);

    useEffect(() => {
        if (resultData && !isDataSent) {
            const { result, username } = resultData;

            (async () => {
                try {
                    if (result !== 0 && username) {
                        await postServerDataStruk4(`http://localhost:5000/api/resultstruk4`, resultData, (data) => data);
                        console.log('Successfully posted data');
                        setIsDataSent(true);
                    } else {
                        throw new Error("Couldn't get result or username");
                    }
                } catch (error) {
                    console.log(error);
                }
            })();
        } else {
            console.log("resultData is undefined or data has been sent");
        }
    }, [resultData, isDataSent]);
}
/** ============= */

/** Terstruktur 5 */
export const PushAnswerStruk5 = (result) => async (dispatch) => {
    try {
        await dispatch(Actions5.pushResultActionStruk5(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultStruk5 = (index) => async (dispatch) => {
    try {
        dispatch(Actions5.updateResultActionStruk5(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResultStruk5 = (resultData) => {
    console.log(resultData);
    const [isDataSent, setIsDataSent] = useState(false);

    useEffect(() => {
        if (resultData && !isDataSent) {
            const { result, username } = resultData;

            (async () => {
                try {
                    if (result !== 0 && username) {
                        await postServerDataStruk5(`http://localhost:5000/api/resultstruk5`, resultData, (data) => data);
                        console.log('Successfully posted data');
                        setIsDataSent(true);
                    } else {
                        throw new Error("Couldn't get result or username");
                    }
                } catch (error) {
                    console.log(error);
                }
            })();
        } else {
            console.log("resultData is undefined or data has been sent");
        }
    }, [resultData, isDataSent]);
}
/** ============= */

/** Terstruktur 6 */
export const PushAnswerStruk6 = (result) => async (dispatch) => {
    try {
        await dispatch(Actions6.pushResultActionStruk6(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultStruk6 = (index) => async (dispatch) => {
    try {
        dispatch(Actions6.updateResultActionStruk6(index));
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResultStruk6 = (resultData) => {
    console.log(resultData);
    const [isDataSent, setIsDataSent] = useState(false);

    useEffect(() => {
        if (resultData && !isDataSent) {
            const { result, username } = resultData;

            (async () => {
                try {
                    if (result !== 0 && username) {
                        await postServerDataStruk6(`http://localhost:5000/api/resultstruk6`, resultData, (data) => data);
                        console.log('Successfully posted data');
                        setIsDataSent(true);
                    } else {
                        throw new Error("Couldn't get result or username");
                    }
                } catch (error) {
                    console.log(error);
                }
            })();
        } else {
            console.log("resultData is undefined or data has been sent");
        }
    }, [resultData, isDataSent]);
}
/** ============= */