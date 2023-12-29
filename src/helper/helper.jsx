import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'

export function attempts_Number(result){
    return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point) {
    if (!result || !answers || result.length !== answers.length) {
      return 0; 
    }
  
    return result
      .map((element, i) => (answers[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResult(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExist({ children }){
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/pretest'} replace={true}></Navigate>
}

export async function postServerData(url, resultsStruk, callback){
    const data = await (await axios.post(url, resultsStruk))?.data;
    return callback ? callback(data) : data;
}

/** Terstruktur */
export function attempts_NumberStruk(resultsStruk){
    return resultsStruk.filter(r => r !== undefined).length;
}

export function earnPoints_NumberStruk(resultsStruk, answerStruk, point) {
    if (!resultsStruk || !answerStruk || resultsStruk.length !== answerStruk.length) {
      return 0; 
    }
  
    return resultsStruk
      .map((element, i) => (answerStruk[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultStruk(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExistStruk({ children }){
    const auth = useSelector(state => state.resultStruk.userIdStruk)
    return auth ? children : <Navigate to={'/posttest1'} replace={true}></Navigate>
}

export async function postServerDataStruk(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}

/** Terbimbing */

export function attempts_NumberBim(resultBim){
    return resultBim.filter(r => r !== undefined).length;
}

export function earnPoints_NumberBim(resultBim, answerBim, point) {
    if (!resultBim || !answerBim || resultBim.length !== answerBim.length) {
      return 0; 
    }
  
    return resultBim
      .map((element, i) => (answerBim[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultBim(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExistBim({ children }){
    const auth = useSelector(state => state.resultBim.userIdBim)
    return auth ? children : <Navigate to={'/posttest2'} replace={true}></Navigate>
}

export async function postServerDataBim(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}

/** =========== */


/** Mandiri */
export function attempts_NumberMan(resultMan){
    return resultMan.filter(r => r !== undefined).length;
}

export function earnPoints_NumberMan(resultMan, answerMan, point) {
    if (!resultMan || !answerMan || resultMan.length !== answerMan.length) {
      return 0; 
    }
  
    return resultMan
      .map((element, i) => (answerMan[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultMan(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExistMan({ children }){
    const auth = useSelector(state => state.resultMan.userIdMan)
    return auth ? children : <Navigate to={'/posttest3'} replace={true}></Navigate>
}

export async function postServerDataMan(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}
/** ======= */


/** Terstruktur 2 */
export function attempts_NumberStruk2(resultStruk2){
    return resultStruk2.filter(r => r !== undefined).length;
}

export function earnPoints_NumberStruk2(resultStruk2, answerStruk2, point) {
    if (!resultStruk2 || !answerStruk2 || resultStruk2.length !== answerStruk2.length) {
      return 0; 
    }
  
    return resultStruk2
      .map((element, i) => (answerStruk2[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultStruk2(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExistStruk2({ children }){
    const auth = useSelector(state => state.resultStruk2.userIdStruk2)
    return auth ? children : <Navigate to={'/posttests1'} replace={true}></Navigate>
}

export async function postServerDataStruk2(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}
/** ============= */

/** Terbimbing 2 */
export function attempts_NumberBim2(resultBim2){
    return resultBim2.filter(r => r !== undefined).length;
}

export function earnPoints_NumberBim2(resultBim2, answerBim2, point) {
    if (!resultBim2 || !answerBim2 || resultBim2.length !== answerBim2.length) {
      return 0; 
    }
  
    return resultBim2
      .map((element, i) => (answerBim2[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultBim2(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExistBim2({ children }){
    const auth = useSelector(state => state.resultBim2.userIdBim2)
    return auth ? children : <Navigate to={'/posttests2'} replace={true}></Navigate>
}

export async function postServerDataBim2(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}
/** ============ */

/** Mandiri 2 */
export function attempts_NumberMan2(resultMan2){
    return resultMan2.filter(r => r !== undefined).length;
}

export function earnPoints_NumberMan2(resultMan2, answerMan2, point) {
    if (!resultMan2 || !answerMan2 || resultMan2.length !== answerMan2.length) {
      return 0; 
    }
  
    return resultMan2
      .map((element, i) => (answerMan2[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultMan2(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExistMan2({ children }){
    const auth = useSelector(state => state.resultMan2.userIdMan2)
    return auth ? children : <Navigate to={'/posttests3'} replace={true}></Navigate>
}

export async function postServerDataMan2(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}
/** ========= */

/** Posttest 1*/
export function attempts_NumberPost(resultPost){
    return resultPost.filter(r => r !== undefined).length;
}

export function earnPoints_NumberPost(resultPost, answerPost, point) {
    if (!resultPost || !answerPost || resultPost.length !== answerPost.length) {
      return 0; 
    }
  
    return resultPost
      .map((element, i) => (answerPost[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultPost(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

export async function postServerDataPost(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}
/** ======== */

/** Posttest 2 */
export function attempts_NumberPost2(resultPost2){
    return resultPost2.filter(r => r !== undefined).length;
}

export function earnPoints_NumberPost2(resultPost2, answerPost2, point) {
    if (!resultPost2 || !answerPost2 || resultPost2.length !== answerPost2.length) {
      return 0; 
    }
  
    return resultPost2
      .map((element, i) => (answerPost2[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultPost2(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

export async function postServerDataPost2(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}
/** ========== */

/** Terstruktur 3 */
export function attempts_NumberStruk3(resultStruk3){
    return resultStruk3.filter(r => r !== undefined).length;
}

export function earnPoints_NumberStruk3(resultStruk3, answerStruk3, point) {
    if (!resultStruk3 || !answerStruk3 || resultStruk3.length !== answerStruk3.length) {
      return 0; 
    }
  
    return resultStruk3
      .map((element, i) => (answerStruk3[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultStruk3(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExistStruk3({ children }){
    const auth = useSelector(state => state.resultStruk3.userIdStruk3)
    return auth ? children : <Navigate to={'/posttests1'} replace={true}></Navigate>
}

export async function postServerDataStruk3(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}
/** ============= */

/** Terstruktur 4 */
export function attempts_NumberStruk4(resultStruk4){
    return resultStruk4.filter(r => r !== undefined).length;
}

export function earnPoints_NumberStruk4(resultStruk4, answerStruk4, point) {
    if (!resultStruk4 || !answerStruk4 || resultStruk4.length !== answerStruk4.length) {
      return 0; 
    }
  
    return resultStruk4
      .map((element, i) => (answerStruk4[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultStruk4(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExistStruk4({ children }){
    const auth = useSelector(state => state.resultStruk4.userIdStruk4)
    return auth ? children : <Navigate to={'/posttests1'} replace={true}></Navigate>
}

export async function postServerDataStruk4(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}
/** ============= */

/** Terstruktur 5 */
export function attempts_NumberStruk5(resultStruk5){
    return resultStruk5.filter(r => r !== undefined).length;
}

export function earnPoints_NumberStruk5(resultStruk5, answerStruk5, point) {
    if (!resultStruk5 || !answerStruk5 || resultStruk5.length !== answerStruk5.length) {
      return 0; 
    }
  
    return resultStruk5
      .map((element, i) => (answerStruk5[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultStruk5(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExistStruk5({ children }){
    const auth = useSelector(state => state.resultStruk5.userIdStruk5)
    return auth ? children : <Navigate to={'/posttests1'} replace={true}></Navigate>
}

export async function postServerDataStruk5(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}
/** ============= */

/** Terstruktur 6 */
export function attempts_NumberStruk6(resultStruk6){
    return resultStruk6.filter(r => r !== undefined).length;
}

export function earnPoints_NumberStruk6(resultStruk6, answerStruk6, point) {
    if (!resultStruk6 || !answerStruk6 || resultStruk6.length !== answerStruk6.length) {
      return 0; 
    }
  
    return resultStruk6
      .map((element, i) => (answerStruk6[i] === element ? point : 0))
      .reduce((prev, curr) => prev + curr, 0);
  }

export function flagResultStruk6(totalPoints, earnPoints){
    return (totalPoints * 60 / 100) < earnPoints; 
}

/** check user auth  */
export function CheckUserExistStruk6({ children }){
    const auth = useSelector(state => state.resultStruk6.userIdStruk6)
    return auth ? children : <Navigate to={'/posttests1'} replace={true}></Navigate>
}

export async function postServerDataStruk6(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}
/** ============= */