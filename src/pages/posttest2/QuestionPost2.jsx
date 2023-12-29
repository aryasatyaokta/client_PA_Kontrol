import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchQestionPost2} from '../../hooks/FetchQuestion'
import { updateResultActionPost2 } from '../../redux/resultpost2_reducer'


export default function QuestionPost2({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const [{ isLoading, apiData, serverError}] = useFetchQestionPost2() 
    const { trace } = useSelector(state => state.questionPost2);
    const result = useSelector(state => state.resultPost2.resultPost2);

    const questions = useSelector(state => state.questionPost2.queuePost2[state.questionPost2.trace])
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(updateResultActionPost2({ trace, checked}))
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
