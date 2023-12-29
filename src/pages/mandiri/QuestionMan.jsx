import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchQestionMan} from '../../hooks/FetchQuestion'
import { updateResultActionMan } from '../../redux/resultman_reducer'


export default function QuestionMan({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const [{ isLoading, apiData, serverError}] = useFetchQestionMan() 
    const { trace } = useSelector(state => state.questionMan);
    const result = useSelector(state => state.resultMan.resultMan);
    const questions = useSelector(state => state.questionMan.queueMan[state.questionMan.trace])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateResultActionMan({ trace, checked}))
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
