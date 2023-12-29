import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchQestionBim} from '../../hooks/FetchQuestion'
import { updateResultActionBim } from '../../redux/resultbim_reducer'


export default function QuestionBim({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const [audio, setAudio] = useState(new Audio());
    const [showA1, setShowA1] = useState(false);
    const [showA2, setShowA2] = useState(false);
    const [showA3, setShowA3] = useState(false);

    const [{ isLoading, apiData, serverError}] = useFetchQestionBim() 
    const { trace } = useSelector(state => state.questionBim);
    const result = useSelector(state => state.resultBim.resultBim);

    const questions = useSelector(state => state.questionBim.queueBim[state.questionBim.trace])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateResultActionBim({ trace, checked}))
    }, [checked])

    useEffect(() => {
      setAudio(new Audio(questions?.audio));
  
      return () => {
        audio.pause();
      };
    }, [questions]);
    
    function onSelect(i){
        onChecked(i)
        setChecked(i)
    }

    function toggleAudio() {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    function toggleA1() {
      setShowA1(!showA1);
    }
  
    function toggleA2() {
      setShowA2(!showA2);
    }

    function toggleA3() {
      setShowA3(!showA3);
    }

    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>

  return (
    <div>
        <h2 className='text-left text-lg'>{questions?.question}</h2>
        <div className='relative mt-3'>
          <div className='flex space-x-5 items-center'>
            <button className='bg-[#9A3B3B] p-2 rounded-md text-white hover:bg-[#662828] relative' onClick={toggleA1}>
              <div className='flex'>
                <span className='mr-2'>{showA1 ? 'Aksara 1' : 'Aksara 1'}</span>
                <svg
                  className={`transition-transform duration-300 transform ${showA1 ? 'rotate-0' : 'rotate-180'} text-white`}
                  fill="#ffffff"
                  width="20px"
                  height="20px"
                  viewBox="-6.5 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                  <g id="SVGRepo_iconCarrier">
                    <title>dropdown</title>
                    <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z" />
                  </g>
                </svg>
              </div>
            </button>

            <button className='bg-[#9A3B3B] p-2 rounded-md text-white hover:bg-[#662828] relative' onClick={toggleA2}>
            <div className='flex'>
                <span className='mr-2'>{showA2 ? 'Aksara 2' : 'Aksara 2'}</span>
                <svg
                  className={`transition-transform duration-300 transform ${showA2 ? 'rotate-0' : 'rotate-180'} text-white`}
                  fill="#ffffff"
                  width="20px"
                  height="20px"
                  viewBox="-6.5 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                  <g id="SVGRepo_iconCarrier">
                    <title>dropdown</title>
                    <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z" />
                  </g>
                </svg>
              </div>
            </button>

            {questions?.a3 && (
              <button className='bg-[#9A3B3B] p-2 rounded-md text-white hover:bg-[#662828] relative' onClick={toggleA3}>
                <div className='flex'>
                <span className='mr-2'>{showA3 ? 'Aksara 3' : 'Aksara 3'}</span>
                <svg
                  className={`transition-transform duration-300 transform ${showA3 ? 'rotate-0' : 'rotate-180'} text-white`}
                  fill="#ffffff"
                  width="20px"
                  height="20px"
                  viewBox="-6.5 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                  <g id="SVGRepo_iconCarrier">
                    <title>dropdown</title>
                    <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z" />
                  </g>
                </svg>
              </div>
              </button>
            )}
          </div>
          <div className='mt-3'>
            {showA1 && <p className='text-center font-medium border border-[#9A3B3B] text-xl mb-4 p-4 w-48'><p className='text-sm text-[#9A3B3B]'>Aksara 1</p>{questions?.a1}</p>}
            {showA2 && <p className='text-center font-medium border border-[#9A3B3B] text-xl mb-4 p-4 w-48'><p className='text-sm text-[#9A3B3B]'>Aksara 2</p>{questions?.a2}</p>}
            {showA3 && <p className='text-center font-medium border border-[#9A3B3B] text-xl mb-4 p-4 w-48'><p className='text-sm text-[#9A3B3B]'>Aksara 3</p>{questions?.a3}</p>}
          </div>
        </div>
        {questions?.audio && (
          <audio className='mt-8' key={`${questions.id}-${trace}`} controls>
            <source src={questions.audio} type='audio/mp3' />
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
          <p className='mb-3'>Petunjuk: </p>
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
