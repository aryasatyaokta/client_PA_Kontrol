import React, { useEffect, useState, useRef } from 'react'
import Welcome from '../images/melek.png'
import Sidebar from '../auth/Sidebar'
import { useNavigate } from 'react-router-dom'
import audioDashboard from '../audio/audio_dashboard.mp3'
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/result_reducer';
import { setUserIdStruk } from '../redux/resultstruk_reducer';
import { setUserIdStruk2 } from '../redux/resultstruk2_reducer';
import { setUserIdBim } from '../redux/resultbim_reducer';
import { setUserIdBim2 } from '../redux/resultbim2_reducer';
import { setUserIdMan } from '../redux/resultman_reducer';
import { setUserIdMan2 } from '../redux/resultman2_reducer';
import { setUserIdPost } from '../redux/resultpost_reducer';
import { setUserIdPost2 } from '../redux/resultpost2_reducer';
import { setUserIdStruk3 } from '../redux/resultstruk3_reducer';
import { setUserIdStruk5 } from '../redux/resultstruk5_reducer';
import { setUserIdStruk4 } from '../redux/resultstruk4_reducer';
import { setUserIdStruk6 } from '../redux/resultstruk6_reducer';
import {Link} from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const inputRef = useRef(null);
  const audioRef = useRef(new Audio(audioDashboard));
  const [isPlaying, setIsPlaying] = useState(false);

  function startQuiz(){
    if(inputRef.current?.value){
      dispatch(setUserId(inputRef.current?.value))
    }
  }

  function startQuizStruk(){
    if(inputRef.current?.value){
      dispatch(setUserIdStruk(inputRef.current?.value))
    }
  }

  function startQuizStruk2(){
    if(inputRef.current?.value){
      dispatch(setUserIdStruk2(inputRef.current?.value))
    }
  }

  function startQuizStruk3(){
    if(inputRef.current?.value){
      dispatch(setUserIdStruk3(inputRef.current?.value))
    }
  }

  function startQuizStruk5(){
    if(inputRef.current?.value){
      dispatch(setUserIdStruk5(inputRef.current?.value))
    }
  }

  function startQuizStruk4(){
    if(inputRef.current?.value){
      dispatch(setUserIdStruk4(inputRef.current?.value))
    }
  }
  
  function startQuizStruk6(){
    if(inputRef.current?.value){
      dispatch(setUserIdStruk6(inputRef.current?.value))
    }
  }

  function startQuizBim(){
    if(inputRef.current?.value){
      dispatch(setUserIdBim(inputRef.current?.value))
    }
  }

  function startQuizBim2(){
    if(inputRef.current?.value){
      dispatch(setUserIdBim2(inputRef.current?.value))
    }
  }

  function startQuizMan(){
    if(inputRef.current?.value){
      dispatch(setUserIdMan(inputRef.current?.value))
    }
  }

  function startQuizMan2(){
    if(inputRef.current?.value){
      dispatch(setUserIdMan2(inputRef.current?.value))
    }
  }

  function startQuizPost(){
    if(inputRef.current?.value){
      dispatch(setUserIdPost(inputRef.current?.value))
    }
  }

  function startQuizPost2(){
    if(inputRef.current?.value){
      dispatch(setUserIdPost2(inputRef.current?.value))
    }
  }

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

  const [ resultStruk5, setResultStruk5 ] = useState({
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

  const [ resultStruk6, setResultStruk6 ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });

  const [ resultBim, setResultBim ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });

  const [ resultBim2, setResultBim2 ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });

  const [ resultMan, setResultMan ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });

  const [ resultMan2, setResultMan2 ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });

  const [ resultPost, setResultPost ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });

  const [ resultPost2, setResultPost2 ] = useState({
    name: "",
    nilai: 0,
    jawab: "",
    kuis: ""
  });

  const handleResultHistory = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app//api/result'); // Ganti 'URL_API/results' dengan URL endpoint API hasil result kamu
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

  const handleResultHistoryStruk = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app//api/resultstruk'); // Ganti 'URL_API/results' dengan URL endpoint API hasil result kamu
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

  useEffect(() => {
    handleResultHistoryStruk();
  }, [resultStruk.name || resultStruk])

  const handleResultHistoryStruk2 = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app//api/resultstruk2'); // Ganti 'URL_API/results' dengan URL endpoint API hasil result kamu
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

  useEffect(() => {
    handleResultHistoryStruk2();
  }, [resultStruk2.name || resultStruk2])

  const handleResultHistoryStruk3 = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app//api/resultstruk3'); // Ganti 'URL_API/results' dengan URL endpoint API hasil result kamu
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

  useEffect(() => {
    handleResultHistoryStruk3();
  }, [resultStruk3.name || resultStruk3])

  const handleResultHistoryStruk5 = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app//api/resultstruk5'); // Ganti 'URL_API/results' dengan URL endpoint API hasil result kamu
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

  useEffect(() => {
    handleResultHistoryStruk5();
  }, [resultStruk5.name || resultStruk5])

  const handleResultHistoryStruk4 = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app//api/resultstruk4'); // Ganti 'URL_API/results' dengan URL endpoint API hasil result kamu
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

  useEffect(() => {
    handleResultHistoryStruk4();
  }, [resultStruk4.name || resultStruk4])

  const handleResultHistoryStruk6 = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app//api/resultstruk6'); // Ganti 'URL_API/results' dengan URL endpoint API hasil result kamu
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
    handleResultHistoryStruk6();
  }, [resultStruk6.name || resultStruk6])

  const handleResultHistoryBim = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app//api/resultbim'); // Ganti 'URL_API/results' dengan URL endpoint API hasil result kamu
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
      setResultBim(
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
    handleResultHistoryBim();
  }, [resultBim.name || resultBim])

  const handleResultHistoryBim2 = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app//api/resultbim2'); // Ganti 'URL_API/results' dengan URL endpoint API hasil result kamu
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
      setResultBim2(
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
    handleResultHistoryBim2();
  }, [resultBim2.name || resultBim2])

  const handleResultHistoryMan = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app//api/resultman'); // Ganti 'URL_API/results' dengan URL endpoint API hasil result kamu
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
      setResultMan(
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
    handleResultHistoryMan();
  }, [resultMan.name || resultMan])

  const handleResultHistoryMan2 = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app//api/resultman2'); // Ganti 'URL_API/results' dengan URL endpoint API hasil result kamu
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
      setResultMan2(
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
    handleResultHistoryMan2();
  }, [resultMan2.name || resultMan2])

  const handleResultHistoryPost = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app//api/resultpost'); // Ganti 'URL_API/results' dengan URL endpoint API hasil result kamu
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
      setResultPost(
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
    handleResultHistoryPost();
  }, [resultPost.name || resultPost])

  const handleResultHistoryPost2 = async () => {
    try {
      let temp_data = []
      const response = await fetch('https://server-pa-kontrol.vercel.app//api/resultpost2'); // Ganti 'URL_API/results' dengan URL endpoint API hasil result kamu
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
      setResultPost2(
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
    handleResultHistoryPost2();
  }, [resultPost2.name || resultPost2])

  useEffect(() => {
    const token = sessionStorage.getItem('TOKEN');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

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
        <div className="p-4 sm:ml-64">
        <div className="p-4  mt-14">
            <div className=" gap-4 mb-4">
                <div className="col-span-2 flex flex-col items-center">
                  <p className="text-[45px] font-bold text-[#9A3B3B]">Selamat Datang</p>
                  <p className="text-[45px] font-bold text-[#9A3B3B] mt-5">di Pembelajaran Aksara</p>
                  <p className="text-[45px] font-bold text-[#9A3B3B] mt-5">Mari Kita Belajar Sandhangan</p>
                </div>
                {/* <div className="col-span-1 flex flex-col items-center justify-center">
              <div className="border-yellow-700 border-2 rounded-xl drop-shadow-xl w-80 flex flex-col items-center justify-center">
                <img className="w-52" alt="" src={Welcome} />
                <p className="text-[#9A3B3B] mt-4 text-center">Halooo, kenalin aku Joko, disini aku akan menemani kamu dalam belajar aksara Jawa, yuk belajar sama aku, pertama ada pretest yang harus kamu kerjakan lhoo, semangat yaa</p>
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
            <p className='text-center w-60 ml-auto mr-12' id="introText"></p>
            
            {/* Kegiatan */}
            <div id="detailed-pricing" class="w-full overflow-x-auto">
                <div class="overflow-hidden min-w-max">
                    <div class="grid grid-cols-2 p-4 text-sm font-bold text-gray-900 bg-gray-400 border-t border-b border-gray-200 gap-x-16 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                        <div class="flex items-center">Kegiatan</div>
                        <div className='text-center'>Keterangan Mengerjakan</div>
                    </div>
                    <div class="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                        <div class="text-gray-500 dark:text-gray-400">Pretest</div>
                        <div className='flex flex-col items-center justify-center'>
                            {results.name ? (
                              <svg class="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                              </svg>
                            ) : (
                              <Link className='flex-col flex bg-[#9A3B3B] w-20 h-8 text-white rounded-md text-center justify-center items-center' to={'/quiz-pretest'} onClick={startQuiz}>Mulai</Link>
                            )}
                        </div>
                    </div>
                    <div class="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                        <div class="text-gray-500 dark:text-gray-400">Latihan Terstruktur 1</div>
                        <div className='flex flex-col items-center justify-center'>
                          {results.name ? (
                            <>
                              {results.nilai < 80 ? (
                              <>
                                {resultStruk.name && resultStruk.jawab && resultStruk.kuis ? (
                                  <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                  </svg>
                                ) : (
                                  <>
                                    {results.name ? (
                                      <Link className='flex-col flex bg-[#9A3B3B] w-20 h-8 text-white rounded-md text-center justify-center items-center' to={'/quiz-lat-terstruktur'} onClick={startQuizStruk}>Mulai</Link>
                                    ) : (
                                      <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                    )}
                                  </>
                                )}
                              </>
                              ) : (
                                <>
                                  {resultStruk2.name && resultStruk2.jawab && resultStruk2.kuis ? (
                                    <svg class="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                  ) : (
                                  <>
                                    {results.name ? (
                                      <Link className='flex-col flex bg-[#9A3B3B] w-20 h-8 text-white rounded-md text-center justify-center items-center' to={'/quiz-lat-struktur'} onClick={startQuizStruk2}>Mulai</Link>
                                    ) : (
                                      <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                    )}
                                  </>
                                  )}
                                </>
                              )}
                            </>
                          ) : (
                            <svg class="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                          )}
                        </div>
                    </div>
                    <div class="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                        <div class="text-gray-500 dark:text-gray-400">Latihan Terstruktur 2</div>
                        <div className='flex flex-col items-center justify-center'>
                          {results.name ? (
                            <>
                              {results.nilai < 80 ? (
                              <>
                                {resultStruk3.name && resultStruk3.jawab && resultStruk3.kuis ? (
                                  <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                  </svg>
                                ) : (
                                  <>
                                    {resultStruk.name ? (
                                      <Link className='flex-col flex bg-[#9A3B3B] w-20 h-8 text-white rounded-md text-center justify-center items-center' to={'/quiz-lat-struktur2'} onClick={startQuizStruk3}>Mulai</Link>
                                    ) : (
                                      <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                    )}
                                  </>
                                )}
                              </>
                              ) : (
                                <>
                                  {resultStruk5.name && resultStruk5.jawab && resultStruk5.kuis ? (
                                    <svg class="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                  ) : (
                                  <>
                                    {resultStruk2.name ? (
                                      <Link className='flex-col flex bg-[#9A3B3B] w-20 h-8 text-white rounded-md text-center justify-center items-center' to={'/quiz-lat-struktur4'} onClick={startQuizStruk5}>Mulai</Link>
                                    ) : (
                                      <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                    )}
                                  </>
                                  )}
                                </>
                              )}
                            </>
                          ) : (
                            <svg class="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                          )}
                        </div>
                    </div>
                    <div class="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                        <div class="text-gray-500 dark:text-gray-400">Latihan Terstruktur 3</div>
                        <div className='flex flex-col items-center justify-center'>
                          {results.name ? (
                            <>
                              {results.nilai < 80 ? (
                              <>
                                {resultStruk4.name && resultStruk4.jawab && resultStruk4.kuis ? (
                                  <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                  </svg>
                                ) : (
                                  <>
                                    {resultStruk3.name ? (
                                      <Link className='flex-col flex bg-[#9A3B3B] w-20 h-8 text-white rounded-md text-center justify-center items-center' to={'/quiz-lat-struktur3'} onClick={startQuizStruk4}>Mulai</Link>
                                    ) : (
                                      <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                    )}
                                  </>
                                )}
                              </>
                              ) : (
                                <>
                                  {resultStruk6.name && resultStruk6.jawab && resultStruk6.kuis ? (
                                    <svg class="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                  ) : (
                                  <>
                                    {resultStruk5.name ? (
                                      <Link className='flex-col flex bg-[#9A3B3B] w-20 h-8 text-white rounded-md text-center justify-center items-center' to={'/quiz-lat-struktur5'} onClick={startQuizStruk6}>Mulai</Link>
                                    ) : (
                                      <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                    )}
                                  </>
                                  )}
                                </>
                              )}
                            </>
                          ) : (
                            <svg class="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                          )}
                        </div>
                    </div>
                    <div class="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                        <div class="text-gray-500 dark:text-gray-400">Latihan Terbimbing</div>
                        <div className='flex flex-col items-center justify-center'>
                          {results.name ? (
                            <>
                              {results.nilai < 80 ? (
                                <>
                                  {resultBim.name && resultBim.jawab && resultBim.kuis ? (
                                    <svg class="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                  ) : (
                                  <>
                                    {resultStruk4.name ? (
                                      <Link className='flex-col flex bg-[#9A3B3B] w-20 h-8 text-white rounded-md text-center justify-center items-center' to={'/quiz-lat-terbimbing'} onClick={startQuizBim}>Mulai</Link>
                                    ) : (
                                      <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                    )}
                                  </>
                                  )}
                                </>
                              ) : (
                                <>
                                  {resultBim2.name && resultBim2.jawab && resultBim2.kuis ? (
                                    <svg class="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                  ) : (
                                  <>
                                    {resultStruk6.name ? (
                                      <Link className='flex-col flex bg-[#9A3B3B] w-20 h-8 text-white rounded-md text-center justify-center items-center' to={'/quiz-lat-bimbing'} onClick={startQuizBim2}>Mulai</Link>
                                    ) : (
                                      <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                    )}
                                  </>
                                  )}
                                </>
                              )}
                            </>
                          ) : (
                            <svg class="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                          )}
                        </div>
                    </div>
                    <div class="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                        <div class="text-gray-500 dark:text-gray-400">Latihan Mandiri</div>
                        <div className='flex flex-col items-center justify-center'>
                          {results.name ? (
                            <>
                              {results.nilai < 80 ? (
                                <>
                                  {resultMan.name && resultMan.jawab && resultMan.kuis ? (
                                    <svg class="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                  ) : (
                                  <>
                                    {resultBim.name ? (
                                      <Link className='flex-col flex bg-[#9A3B3B] w-20 h-8 text-white rounded-md text-center justify-center items-center' to={'/quiz-lat-mandiri'} onClick={startQuizMan}>Mulai</Link>
                                    ) : (
                                      <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                    )}
                                  </>
                                  )}
                                </>
                              ) : (
                                <>
                                  {resultMan2.name && resultMan2.jawab && resultMan2.kuis ? (
                                    <svg class="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                  ) : (
                                  <>
                                    {resultBim2.name ? (
                                      <Link className='flex-col flex bg-[#9A3B3B] w-20 h-8 text-white rounded-md text-center justify-center items-center' to={'/quiz-latihan-mandiri'} onClick={startQuizMan2}>Mulai</Link>
                                    ) : (
                                      <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                    )}
                                  </>
                                  )}
                                </>
                              )}
                            </>
                          ) : (
                            <svg class="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                          )}
                        </div>
                    </div>
                    <div class="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                        <div class="text-gray-500 dark:text-gray-400">Posttest</div>
                        <div className='flex flex-col items-center justify-center'>
                          {results.name ? (
                            <>
                              {results.nilai < 80 ? (
                                <>
                                  {resultPost.name && resultPost.jawab && resultPost.kuis ? (
                                    <svg class="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                  ) : (
                                  <>
                                    {resultMan.name ? (
                                      <Link className='flex-col flex bg-[#9A3B3B] w-20 h-8 text-white rounded-md text-center justify-center items-center' to={'/quiz-post'} onClick={startQuizPost}>Mulai</Link>
                                    ) : (
                                      <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                    )}
                                  </>
                                  )}
                                </>
                              ) : (
                                <>
                                  {resultPost2.name && resultPost2.jawab && resultPost2.kuis ? (
                                    <svg class="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                    </svg>
                                  ) : (
                                    <>
                                    {resultMan2.name ? (
                                      <Link className='flex-col flex bg-[#9A3B3B] w-20 h-8 text-white rounded-md text-center justify-center items-center' to={'/quiz-test'} onClick={startQuizPost2}>Mulai</Link>
                                    ) : (
                                      <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                    )}
                                  </>
                                  )}
                                </>
                              )}
                            </>
                          ) : (
                            <svg class="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                          )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
