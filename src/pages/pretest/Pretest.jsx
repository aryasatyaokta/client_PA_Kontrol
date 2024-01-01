  import React, { useRef, useEffect, useState} from 'react'
  import Sidebar from '../../auth/Sidebar'
  import Welcome from '../../images/melek.png'
  import Nangis from '../../images/nangis.png'
  import Kagum from '../../images/kagum.png'
  import {Link} from 'react-router-dom'
  import { useDispatch } from 'react-redux';
  import { setUserId } from '../../redux/result_reducer';
  import audioMulaiPretest from '../../audio/audio_mulai_pretest.mp3';
  import { useNavigate } from 'react-router-dom'

  export default function Pretest() {
    const inputRef = useRef(null);
    const dispatch = useDispatch()
    const audioRef = useRef(new Audio(audioMulaiPretest));
    const [isPlaying, setIsPlaying] = useState(false);
    const navigate = useNavigate();
    const [ results, setResults ] = useState({
      name: "",
      nilai: 0,
      jawab: "",
      kuis: ""
    });

    function startQuiz(){
      if(inputRef.current?.value){
        dispatch(setUserId(inputRef.current?.value))
      }
    }

    const handleResultHistory = async () => {
      try {
        let temp_data = []
        const response = await fetch('https://server-pa-kontrol.vercel.app/api/result');
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
      const token = sessionStorage.getItem('TOKEN');
      if (!token) {
        navigate('/login');
      } 
    }, [navigate]);

    useEffect(() => {
      handleResultHistory();
    }, [results.name || results])
    
    const handleToggleAudio = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };
    return (
      <div>
          <Sidebar/>
          { results.name ? 
          <div className="p-4 sm:ml-64">
            <div className="p-4  mt-14">
              <div className=" gap-4 mb-4 font-[Poppins]">
                <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-[600px] dark:bg-gray-800">
                  <p className='text-xl font-bold text-[#9A3B3B] text-center my-5'>Hasil Pretest Sandhangan</p>
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
              <div className="flex flex-col items-center justify-center bg-gray-50 gap-4 mb-4">
                <div className="col-span-2 justify-center items-center rounded-lg ">
                  <p className='text-xl font-bold text-[#9A3B3B] text-center my-5'>Pretest Sandhangan</p>
                  <div className='mx-2'>
                    <p className="text-lg font-semibold text-[#6E6E6E] text-center">Soal Kelas 5 SD</p>
                  </div>
                  <div className='flex flex-col items-center justify-center '>
                    <div className='my-16'>
                      <Link className='btn bg-[#9A3B3B] py-3 px-14 text-white rounded-md' to={'/quiz-pretest'} onClick={startQuiz}>Start Pretest</Link>
                    </div>
                  </div>
                </div>
                {/* <div className="col-span-1 flex flex-col items-center justify-center mb-44">
              <div className="border-yellow-700 border-2 rounded-xl drop-shadow-xl w-80 flex flex-col items-center justify-center">
                <img className="w-52" alt="" src={Welcome} />
                <p className="text-[#9A3B3B] mt-4 text-center">Haloo, ini pretest yang harus kamu kerjakan lhoo, semangat yaa</p>
              </div>
              <div className="mt-4">
                <button onClick={handleToggleAudio}
                  className="bg-[#9A3B3B] px-4 py-2 text-white rounded-lg"
                >
                  {isPlaying ? 'Pause Joko' : 'Suara Joko'}
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
