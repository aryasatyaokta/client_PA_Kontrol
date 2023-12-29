import React, { useRef, useState, useEffect } from 'react'
import Sidebar from '../../auth/Sidebar'
import Welcome from '../../images/melek.png'
import Nangis from '../../images/nangis.png'
import Kagum from '../../images/kagum.png'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setUserIdMan2 } from '../../redux/resultman2_reducer';
import audioMan from '../../audio/mandiri.mp3'
import axios from 'axios'

export default function Mandiri2() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const dispatch = useDispatch()
  const [ results, setResults ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });

  const Mandiri = useRef(new Audio(audioMan))
  const [isPlayingMan, setIsPlayingMan] = useState(false);
  const handleToggleAudioMan = () => {
    if (isPlayingMan) {
      Mandiri.current.pause();
    } else {
      Mandiri.current.play();
    }
    setIsPlayingMan(!isPlayingMan);
  };

  function startQuiz(){
    if(inputRef.current?.value){
      dispatch(setUserIdMan2(inputRef.current?.value))
    }
  }

  const handleResultHistory = async () => {
    try {
      let temp_data = []
      const response = await fetch('http://localhost:5000/api/resultman2'); // Ganti 'URL_API/results' dengan URL endpoint API hasil result kamu
      const data = await response.json();
      for(let i = 0; i < data.length; i++){
        if(data[i].username == sessionStorage.getItem('name')){
          temp_data.push({
            name: data[i].username,
            nilai: data[i].points,
            jawab: data[i].attempts,
            kuis: data[i].achived
          })
        }
      }
      setResults(
        {
          name: temp_data[0].name,
          nilai: temp_data[0].nilai,
          jawab: temp_data[0].jawab,
          kuis: temp_data[0].kuis
        }
      )
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    handleResultHistory();
  }, [results.name || results])

  async function onRestart(){
    await axios.delete(`http://localhost:5000/api/resultman2?name=${sessionStorage.getItem('name')}`)
    navigate("/latihan-mandirii")
    navigate(0);
  }

  return (
    <div>
        <Sidebar/>
        { results.name ? 
          <div className="p-4 sm:ml-64">
            <div className="p-4  mt-14">
              <div className="gap-4 mb-4 font-[Poppins]">
                <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-[600px] dark:bg-gray-800">
                  <p className='text-xl font-bold text-[#9A3B3B] text-center my-5'>Hasil Latihan Mandiri Sandhangan</p>
                  <div className=''>
                    <p className="text-lg font-semibold text-[#6E6E6E] text-center">Kelas 5 SD</p>
                  </div>
                <div className='flex flex-col items-center my-10'>
                  <div className='py-4 border-2 border-[#9A3B3B] w-1/2 h-full'>
                    <div className='flex justify-between px-2'>
                      <span>Nama: </span>
                      <span className='font-bold'>{results.name}</span>
                    </div>
                    <div className='flex justify-between px-2 mt-5'>
                      <span>Soal Dijawab: </span>
                      <span className='font-bold'>{results.jawab}</span>
                    </div>
                    <div className='flex justify-between px-2 mt-5'>
                      <span>Nilai Kamu: </span>
                      <span className='font-bold'>{results.nilai}</span>
                    </div>
                    <div className='flex justify-between px-2 mt-5'>
                      <span>Status Nilai: </span>
                      <span className={results.nilai < 80 ? 'font-bold text-red-500' : 'font-bold text-[#82CD47]'}>
                        {results.kuis}
                      </span>
                    </div>
                  </div>
                  <button onClick={onRestart} className={results.nilai < 80 ? 'bg-[#9A3B3B] px-16 py-2 text-white rounded-lg mt-3' : 'hidden'}>
                    Restart
                  </button>
                </div>
              </div>
              {/* <div className="flex items-center justify-center border-yellow-700 border-2 rounded-xl drop-shadow-xl self-start">
              {results.nilai >= 80 ? (
                <img className='w-52 self-start' alt='' src={Kagum} />
                ) : (
                <img className='w-52 self-start' alt='' src={Nangis} />
              )}
              </div> */}
              </div>
            </div>
          </div>
          :
        <div className="p-4 sm:ml-64">
        <div className="p-4  mt-14">
          <div className="gap-4 mb-4">
            <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-fulll dark:bg-gray-800">
              <p className='text-xl font-bold text-[#9A3B3B] text-center my-5'>Latihan Mandiri Sandhangan</p>
              <div className='mx-2'>
                <p className="text-lg font-semibold text-[#6E6E6E] text-center">Soal Kelas 5 SD</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='start my-16'>
                  <Link className='btn bg-[#9A3B3B] py-3 px-14 text-white rounded-md' to={'/quiz-latihan-mandiri'} onClick={startQuiz}>Start Latihan</Link>
                </div>
              </div>
            </div>
            {/* <div className="col-span-1 flex flex-col items-center justify-center mb-44">
              <div className="border-yellow-700 border-2 rounded-xl drop-shadow-xl w-80 flex flex-col items-center justify-center">
                <img className="w-52" alt="" src={Welcome} />
                <p className="text-[#9A3B3B] mt-4 text-center">Haloo, ini latihan mandiri yang harus kamu kerjakan lhoo, semangat yaa</p>
              </div>
              <div className="mt-4">
                <button onClick={handleToggleAudioMan}
                  className="bg-[#9A3B3B] px-4 py-2 text-white rounded-lg"
                >
                  {isPlayingMan ? 'Pause Joko' : 'Suara Joko'}
                </button>
              </div>
            </div> */}
          </div>
        </div>
        </div>
        }
    </div>
  )
}
