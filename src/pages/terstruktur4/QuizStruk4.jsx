import { PushAnswerStruk4 } from '../../hooks/setResult';
import { useState } from 'react';
import Sidebar from '../../auth/Sidebar';
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { MoveNextQuestionStruk4, MovePrevQuestionStruk4 } from '../../hooks/FetchQuestion';
import Welcome from '../../images/melek.png'
import QuestionStruk4 from './QuestionStruk4';

export default function QuizStruk4() {

    const [check, setChecked] = useState(undefined)

    const resultStruk4 = useSelector(state => state.resultStruk4.resultsStruk4);
    const { queueStruk4, trace } = useSelector(state => state.questionStruk4);
    const dispatch = useDispatch()

    function onNext(){
        if(trace < queueStruk4.length){
            dispatch(MoveNextQuestionStruk4());

            if(resultStruk4.length <= trace){
                dispatch(PushAnswerStruk4(check))
            }
        }
        setChecked(undefined)
    }

    function onPrev(){
        if(trace > 0){
            dispatch(MovePrevQuestionStruk4());
        }
    }

    function onChecked(check){
        setChecked(check)
    }

    if(resultStruk4.length && resultStruk4.length >= queueStruk4.length){
        return <Navigate to={'/hasil-lat-struktur3'} replace={true}></Navigate>
    }

  return (
    <div>
      <Sidebar/>
        <div className="p-4 sm:ml-64">
        <div className="p-4  mt-14">
          <div className=" gap-4 mb-4 font-[Poppins]">
            <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-[650px] dark:bg-gray-800">
              <p className='text-xl font-bold text-[#9A3B3B] text-center my-5'>Latihan Terstruktur 3</p>
              <div className=''>
                <p className="text-lg font-semibold text-[#6E6E6E] text-center">Soal Kelas 5 SD</p>
              </div>
              <div className='py-10'>
                <div className='mx-24'>
                  <QuestionStruk4 onChecked={onChecked}/>
                </div>
                <div className='flex justify-between px-24 h-8 my-9'>
                  { trace > 0 ? <button className='bg-[#AE9D45] w-40 text-white rounded-sm' onClick={onPrev}>Kembali</button> : <div></div> }
                  <button className='bg-[#9A3B3B] w-40 text-white rounded-sm' onClick={onNext}>Selanjutnya</button>
                </div>
              </div>
            </div>
            {/* <div className="flex items-center justify-center border-yellow-700 border-2 rounded-xl drop-shadow-xl self-start">
              <img className='w-52 self-start' alt='' src={Welcome}/>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
