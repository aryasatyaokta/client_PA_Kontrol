import Sidebar from '../../auth/Sidebar'
import Nangis from '../../images/nangis.png'
import Kagum from '../../images/kagum.png'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { attempts_NumberMan2, earnPoints_NumberMan2, flagResultMan2 } from '../../helper/helper';
import {usePublishResultMan2} from '../../hooks/setResult';
import audioNilaiKurang from '../../audio/audio_nil_kurang.mp3'
import audioNilaiCukup from '../../audio/audio_nilai_cukup.mp3'

import axios from 'axios';


export default function ResultMan2() {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { questionMan2: { queueMan2, answerMan2 }, resultMan2: { resultMan2, userIdMan2 } } = useSelector(state => state);

    const totalPoints = queueMan2.length * 20; 
    const attempts = attempts_NumberMan2(resultMan2);
    const earnPoints = earnPoints_NumberMan2(resultMan2, answerMan2, 20)
    const flag = flagResultMan2(totalPoints, earnPoints)

    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [audioElement] = useState(new Audio(earnPoints >= 80 ? audioNilaiCukup : audioNilaiKurang));
    
    usePublishResultMan2({ 
        resultMan2, 
        username : sessionStorage.getItem('name'),
        attempts,
        points: earnPoints,
        achived : flag ? "Passed" : "Failed" });

    async function onRestart(){
      await axios.delete(`https://server-pa-kontrol.vercel.app//api/resultman2?name=${sessionStorage.getItem('name')}`)
      navigate("/latihan-mandirii")
      navigate(0);
    }

    useEffect(() => {
    }, [audioElement])
  
    const handleToggleAudio = () => {
      if (isAudioPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
    };

  return (
    <div>
      <Sidebar/>
        <div className="p-4 sm:ml-64">
        <div className="p-4  mt-14">
          <div className="gap-4 mb-4 font-[Poppins]">
            <div className="col-span-2 justify-center items-center rounded-lg bg-gray-50 h-[600px] dark:bg-gray-800">
              <p className='text-xl font-bold text-[#9A3B3B] text-center my-5'>Hasil Latihan Mandiri Sandhangan</p>
              <div className=''>
                <p className="text-lg font-semibold text-[#6E6E6E] text-center">Soal Kelas 5 SD</p>
              </div>
              <div className='flex flex-col items-center my-10'>
                <div className='py-4 border-2 border-[#9A3B3B] w-1/2 h-full'>
                  <div className='flex justify-between px-2'>
                    <span>Nama: </span>
                    <span className='font-bold'>{sessionStorage.getItem('name')}</span>
                  </div>
                  <div className='flex justify-between px-2 py-2'>
                    <span>Nilai Maksimum: </span>
                    <span className='font-bold'>{totalPoints || 0}</span>
                  </div>
                  <div className='flex justify-between px-2 py-2'>
                    <span>Total Pertanyaan: </span>
                    <span className='font-bold'>{queueMan2.length || 0}</span>
                  </div>
                  <div className='flex justify-between px-2 py-2'>
                    <span>Soal Dijawab: </span>
                    <span className='font-bold'>{attempts || 0}</span>
                  </div>
                  <div className='flex justify-between px-2 py-2'>
                    <span>Nilai Kamu: </span>
                    <span className='font-bold'>{earnPoints || 0}</span>
                  </div>
                  <div className='flex justify-between px-2 py-2'>
                    <span>Status Nilai: </span>
                    <span style={{color : `${flag ? "#82CD47" : "#ff2a66"}`}} className='font-bold'>{flag ? "Passed" : "Failed"}</span>
                  </div>
                </div>  
              </div>

              <div className='flex flex-col items-center justify-center'>
              {earnPoints < 80 ? (
                  <button onClick={onRestart} className='bg-[#9A3B3B] px-16 py-2 text-white rounded-lg'>Ulangi</button>
                ) : (
                  <Link to='/posttest' className='bg-[#9A3B3B] px-16 py-2 text-white rounded-lg'>Selanjutnya</Link>
                )}
              </div>
            </div>
            {/* <div>
              <div className="flex flex-col items-center justify-center border-yellow-700 border-2 rounded-xl drop-shadow-xl self-start">
                {earnPoints >= 80 ? (
                        <>
                          <img className='w-52' alt='' src={Kagum} />
                          <p className="text-[#9A3B3B] mt-4 text-center">Asikk, nilai kamu sudah cukup, klik tombol selanjutnya yaa</p>
                        </>
                      ) : (
                        <>
                          <img className='w-52' alt='' src={Nangis} />
                          <p className="text-[#9A3B3B] mt-4 text-center">Yahh, nilai kamu masih kurang, ulangi lagi yaa</p>
                        </>
                )}
              </div>
              <div className="flex flex-col col-span-3 items-end justify-end mr-24 self-start mt-4">
                  <button type="button" onClick={handleToggleAudio} className="text-white bg-[#9A3B3B] rounded-md p-2">
                    {isAudioPlaying ? 'Pause Joko' : 'Suara Joko'}
                  </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
