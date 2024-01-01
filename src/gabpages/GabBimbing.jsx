import React, { useState, useEffect, useRef } from 'react'
import Bimbing from '../pages/terbimbing/Bimbing'
import Bimbing2 from '../pages/terbimbing2/Bimbing2'
import Welcome from '../images/melek.png'
import Sidebar from '../auth/Sidebar';
import audioStu from '../audio/kerstu.mp3'

export default function GabBimbing() {

  const [ results, setResults ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });

  const [ resultStruk, setResultStruk ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });

  const [ resultStruk2, setResultStruk2 ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });

  const [ resultStruk3, setResultStruk3 ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });

  const [ resultStruk4, setResultStruk4 ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });

  const [ resultStruk5, setResultStruk5 ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });

  const [ resultStruk6, setResultStruk6 ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });

  const audio = useRef(new Audio(audioStu))
  const [isPlaying, setIsPlaying] = useState(false);
  const handleToggleAudio = () => {
    if (isPlaying) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
    setIsPlaying(!isPlaying);
  };

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

  const handleResultHistoryStruk = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app/api/resultstruk'); 
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
      setResultStruk(
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

  const handleResultHistoryStruk2 = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app/api/resultstruk2'); 
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
      setResultStruk2(
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

  const handleResultHistoryStruk3 = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app/api/resultstruk3'); 
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
      setResultStruk3(
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

  const handleResultHistoryStruk4 = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app/api/resultstruk4'); 
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
      setResultStruk4(
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

  const handleResultHistoryStruk5 = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app/api/resultstruk5'); 
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
      setResultStruk5(
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

  const handleResultHistoryStruk6 = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app/api/resultstruk6'); 
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
      setResultStruk6(
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
    handleResultHistoryStruk();
    handleResultHistoryStruk2()
    handleResultHistoryStruk3();
    handleResultHistoryStruk4();
    handleResultHistoryStruk5();
    handleResultHistoryStruk6();
  }, [results.name || results])


  return (
    <div>
      {results.nilai < 80 ? (
        resultStruk.name && resultStruk3.name && resultStruk4.name ? (
          <Bimbing />
        ) : (
          <div>
          <Sidebar/>
            <div className="p-4 sm:ml-64">
            <div className="p-4  mt-14">
              <div className="gap-4 mb-4">
                <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-fulll dark:bg-gray-800">
                  <p className='mt-24 text-xl font-bold text-[#9A3B3B] text-center my-5'>Kerjakan Latihan Terstruktur Dulu yaa!</p>
                </div>
                {/* <div className="flex flex-col items-center justify-center border-yellow-700 border-2 rounded-xl drop-shadow-xl">
                  <img className='w-52' alt='' src={Welcome}/>
                    <p className="text-[#9A3B3B] mt-4 text-center">Kerjakan Latihan Terstruktur Dulu yaa!</p>
                </div>
                <div className='flex flex-col col-span-3 items-end justify-end mr-28'>
                  <button onClick={handleToggleAudio} className="bg-[#9A3B3B] px-4 py-2 text-white rounded-lg">
                    {isPlaying ? 'Pause Joko' : 'Suara Joko'}
                  </button>
                </div> */}
              </div>
            </div>
            </div>
          </div>
        )
      ) : (
        resultStruk2.name && resultStruk5.name && resultStruk6.name ? (
          <Bimbing2 />
        ) : (
          <div>
          <Sidebar/>
            <div className="p-4 sm:ml-64">
            <div className="p-4  mt-14">
              <div className="gap-4 mb-4">
                <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-fulll dark:bg-gray-800">
                  <p className='mt-24 text-xl font-bold text-[#9A3B3B] text-center my-5'>Kerjakan Latihan Terstruktur Dulu yaa!</p>
                </div>
                {/* <div className="flex flex-col items-center justify-center border-yellow-700 border-2 rounded-xl drop-shadow-xl">
                <img className='w-52' alt='' src={Welcome}/>
                    <p className="text-[#9A3B3B] mt-4 text-center">Kerjakan Latihan Terstruktur Dulu yaa!</p>
              </div>
              <div className='flex flex-col col-span-3 items-end justify-end mr-28'>
                <button onClick={handleToggleAudio} className="bg-[#9A3B3B] px-4 py-2 text-white rounded-lg">
                  {isPlaying ? 'Pause Joko' : 'Suara Joko'}
                </button>
              </div> */}
              </div>
            </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}
