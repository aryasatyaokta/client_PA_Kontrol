import React, { useRef, useState, useEffect } from 'react'
import Sidebar from '../../auth/Sidebar'
import Welcome from '../../images/melek.png'
import Nangis from '../../images/nangis.png'
import Kagum from '../../images/kagum.png'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setUserIdStruk } from '../../redux/resultstruk_reducer';
import audioStruk from '../../audio/terstruktur.mp3'
import Struktur3 from '../terstruktur3/Struktur3'
import Struktur4 from '../terstruktur4/Struktur4'
import axios from 'axios';

export default function Struktur() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [ results, setResults ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });
  const [ results2, setResults2 ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });
  const [ results3, setResults3 ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });
  const Struktur = useRef(new Audio(audioStruk))
  const [isPlayingStruk, setIsPlayingStruk] = useState(false);

  const handleToggleAudioStruk = () => {
    if (isPlayingStruk) {
      Struktur.current.pause();
    } else {
      Struktur.current.play();
    }
    setIsPlayingStruk(!isPlayingStruk);
  };

  function startQuiz(){
    if(inputRef.current?.value){
      dispatch(setUserIdStruk(inputRef.current?.value))
    }
  }

  const handleResultHistory = async () => {
    try {
      let temp_data = []
      const response = await fetch('http://localhost:3030/api/resultstruk');
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

  const handleResultHistory2 = async () => {
    try {
      let temp_data = []
      const response = await fetch('http://localhost:3030/api/resultstruk3');
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
      setResults2(
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

  const handleResultHistory3 = async () => {
    try {
      let temp_data = []
      const response = await fetch('http://localhost:3030/api/resultstruk4');
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
      setResults3(
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

  useEffect(() => {
    handleResultHistory2();
  }, [results2.name || results2])

  useEffect(() => {
    handleResultHistory3();
  }, [results.name || results])

  async function onRestart(){
    await axios.delete(`http://localhost:3030/api/resultstruk?name=${sessionStorage.getItem('name')}`)
    navigate("/latihan-struktur")
    navigate(0);
  }

  return (
    <div>
        <Sidebar/>
        { results.name ? 
          <div className="p-4 sm:ml-64">
            <div className="p-4  mt-14">
              <div className="gap-4 mb-2 font-[Poppins]">
                <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-[400px] dark:bg-gray-800">
                  <p className='text-xl font-bold text-[#9A3B3B] text-center my-5'>Hasil Latihan Terstruktur 1</p>
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
              {results.nilai < 80 || results2.nilai < 80 || results3.nilai < 80 ? (
                <img className='w-52' src={Nangis} alt='Nangis'/>
              ) : (
                <img className='w-52' src={Kagum} alt='Kagum'/>
              )}
              </div> */}
              </div>
            </div>
          </div>
          : 
        <div className="p-4 sm:ml-64">
        <div className="p-4  mt-14">
          <div className=" gap-4 mb-4">
            <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-fulll dark:bg-gray-800">
              <p className='text-xl font-bold text-[#9A3B3B] text-center my-5'>Latihan Terstruktur 1</p>
              <div className='mx-2'>
                <p className="text-lg font-semibold text-[#6E6E6E] text-center">Soal Kelas 5 SD</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='start my-16'>
                  <Link className='btn bg-[#9A3B3B] py-3 px-14 text-white rounded-md' to={'/quiz-lat-terstruktur'} onClick={startQuiz}>Start Latihan</Link>
                </div>
              </div>
            </div>
            {/* <div className="col-span-1 flex flex-col items-center justify-center mb-44">
              <div className="border-yellow-700 border-2 rounded-xl drop-shadow-xl w-80 flex flex-col items-center justify-center">
                <img className="w-52" alt="" src={Welcome} />
                <p className="text-[#9A3B3B] mt-4 text-center">Haloo, ini latihan terstruktur yang harus kamu kerjakan lhoo, semangat yaa</p>
              </div>
              <div className="mt-4">
                <button onClick={handleToggleAudioStruk}
                  className="bg-[#9A3B3B] px-4 py-2 text-white rounded-lg"
                >
                  {isPlayingStruk ? 'Pause Joko' : 'Suara Joko'}
                </button>
              </div>
            </div> */}
          </div>
        </div>
        </div>
        }
        <div className='gap-4 mb-2 font-[Poppins]'>
          <div className='col-span-2 justify-center items-center rounded-lg bg-gray-50 h-[300px] dark:bg-gray-800'>
            {results.nilai >=80 ? (
              <Struktur3/>
            ) : (
              <div className="p-4 sm:ml-64">
              <div className="p-4">
                <div className=" gap-4 mb-4">
                  <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-fulll dark:bg-gray-800">
                    <div className=" dark:bg-gray-800 mt-20">
                        <p className='text-xl font-bold text-[#9A3B3B] text-center my-5'>Latihan Terstruktur 2</p>
                        <div className='mx-2'>
                          <p className="text-lg font-semibold text-[#6E6E6E] text-center">Kerjakan Latihan Terstruktur 1 Dulu yaa!</p>
                        </div>
                    </div>
                </div>
              </div>
              </div>
            </div>
            )}
            {results2.nilai >=80 ? (
              <Struktur4/>
            ) : (
            <div className="p-4 sm:ml-64">
              <div className="p-4">
                <div className=" gap-4 mb-4">
                  <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-fulll dark:bg-gray-800">
                    <div className=" dark:bg-gray-800 mt-20">
                        <p className='text-xl font-bold text-[#9A3B3B] text-center my-5'>Latihan Terstruktur 3</p>
                        <div className='mx-2'>
                          <p className="text-lg font-semibold text-[#6E6E6E] text-center">Kerjakan Latihan Terstruktur 2 Dulu yaa!</p>
                        </div>
                    </div>
                </div>
              </div>
              </div>
            </div>
            )}
          </div>
         </div>
    </div>
  )
}
