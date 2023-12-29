import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchQestionStruk2 } from '../../hooks/FetchQuestion'
import { updateResultStruk2 } from '../../hooks/setResult'


export default function QuestionStruk2({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const [{ isLoading, apiData, serverError}] = useFetchQestionStruk2() 
    const { trace } = useSelector(state => state.questionStruk2);
    const result = useSelector(state => state.resultStruk2.resultsStruk2);

    const questions = useSelector(state => state.questionStruk2.queueStruk2[state.questionStruk2.trace])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateResultStruk2({ trace, checked}))
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
