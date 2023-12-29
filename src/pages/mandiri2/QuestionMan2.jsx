import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchQestionMan2} from '../../hooks/FetchQuestion'
import { updateResultActionMan2 } from '../../redux/resultman2_reducer'


export default function QuestionMan2({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const [{ isLoading, apiData, serverError}] = useFetchQestionMan2() 
    const { trace } = useSelector(state => state.questionMan2);
    const result = useSelector(state => state.resultMan2.resultMan2);
    const questions = useSelector(state => state.questionMan2.queueMan2[state.questionMan2.trace])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateResultActionMan2({ trace, checked}))
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
    </div>
  )
}
