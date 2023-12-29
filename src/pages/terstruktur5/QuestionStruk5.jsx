import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchQestionStruk5 } from '../../hooks/FetchQuestion'
import { updateResultStruk5 } from '../../hooks/setResult'

export default function QuestionStruk5({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const [{ isLoading, apiData, serverError}] = useFetchQestionStruk5() 
    const { trace } = useSelector(state => state.questionStruk5);
    const result = useSelector(state => state.resultStruk5.resultsStruk5);

    console.log("useSelector(state => state.questions)",useSelector(state => state));

    const questions = useSelector(state => state.questionStruk5.queueStruk5[state.questionStruk5.trace])
    const dispatch = useDispatch()

    console.log("test view",questions);

    useEffect(() => {
        dispatch(updateResultStruk5({ trace, checked}))
    }, [checked])
    
    function onSelect(i){
        onChecked(i)
        setChecked(i)
    }


    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>

  return (
    <div>
        <h2 className='text-left text-lg'>{questions?.question}</h2>
        {questions?.audio && (
          <audio key={`${questions.id}-${trace}`} controls>
            <source src={questions.audio} type='audio/mp3' />
            Your browser does not support the audio element.
          </audio>
        )}
        <ul key={questions?.id}>
            {
              questions?.options.map((q, i) => (
                <li className='bulet' key={i}>
                  <input
                      type='radio'
                      value={false}
                      name='options'
                      id={`q${i}-option`}
                      onChange={() => onSelect(i)}
                  />
                  <label htmlFor={`q${i}-option`} className='text-xl'>{q}</label>
                  <div className={`check ${result[trace] === i ? 'checked' : '' }`}></div>
                </li>
              )) 
            }
        </ul>
        <div className="struktur-container mt-7 bg-[#9A3B3B] p-4 text-white rounded-xl">
          <p className='mb-3'>Langkah - langkah Pengerjaan: </p>
                {questions?.struktur && (
                    <ul>
                        {questions.struktur.map((struktur, i) => (
                            <li key={i}>{struktur}</li>
                        ))}
                    </ul>
                )}
            </div>
    </div>
  )
}
