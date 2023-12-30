import React, { useRef, useState, useEffect } from 'react'
import Sidebar from '../../auth/Sidebar'
import Welcome from '../../images/melek.png'
import Nangis from '../../images/nangis.png'
import Kagum from '../../images/kagum.png'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setUserIdStruk6 } from '../../redux/resultstruk6_reducer';
import audioStruk from '../../audio/terstruktur.mp3'
import axios from 'axios';

export default function Struktur6() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [ results, setResults ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });

  function startQuiz(){
    if(inputRef.current?.value){
      dispatch(setUserIdStruk6(inputRef.current?.value))
    }
  }

  const handleResultHistory6 = async () => {
    try {
      let temp_data = []
      const response = await fetch('http://localhost:3030/api/resultstruk6');
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
    handleResultHistory6();
  }, [results.name || results])

  async function onRestart(){
    await axios.delete(`http://localhost:3030/api/resultstruk6?name=${sessionStorage.getItem('name')}`)
    navigate("/lat-struktur")
    navigate(0);
      // dispatch(resetAllActionStruk2())
      // dispatch(resetResultActionStruk2())
  }

  return (
    <div>
        { results.name ? 
          <div className="p-4 sm:ml-64">
            <div className="p-4  mt-14">
              <div className="gap-4 mb-4 font-[Poppins]">
                <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-[400px] dark:bg-gray-800">
                  <p className='text-xl font-bold text-[#9A3B3B] text-center my-5'>Hasil Latihan Terstruktur 3</p>
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
                        {results.nilai < 80 ? 'Failed' : 'Passed'}
                      </span>
                    </div>
                  </div>
                  <button onClick={onRestart} className={results.nilai < 99 ? 'bg-[#9A3B3B] px-16 py-2 text-white rounded-lg mt-3' : 'hidden'}>
                    Restart
                  </button>
                </div>
              </div>
              </div>
            </div>
          </div>
          : 
        <div className="sm:ml-64">
        <div className="mt-14">
          <div className=" gap-4">
            <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-fulll dark:bg-gray-800">
              <p className='text-xl font-bold text-[#9A3B3B] text-center my-5'>Latihan Terstruktur 3</p>
              <div className='mx-2'>
                <p className="text-lg font-semibold text-[#6E6E6E] text-center">Soal Kelas 5 SD</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='start my-16'>
                  <Link className='btn bg-[#9A3B3B] py-3 px-14 text-white rounded-md' to={'/quiz-lat-struktur5'} onClick={startQuiz}>Start Latihan</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        }
    </div>
  )
}
