import React, { useRef, useEffect, useState} from 'react'
import Sidebar from '../../auth/Sidebar'
import Welcome from '../../images/melek.png'
import { useNavigate } from 'react-router-dom'
import audioSandhangan1 from '../../audio/audio_sandhangan1.mp3'
import VidMateri from '../../video/Materi1.mp4'
import ReactPlayer from 'react-player'

import { Link} from 'react-router-dom';

export default function Materi() {

   const audioRef = useRef(new Audio(audioSandhangan1));
   const navigate = useNavigate();
   const [isPlaying, setIsPlaying] = useState(false);
   
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
          <p className='text-xl font-semibold font-[Poppins]'>Materi Kelas 5</p>
          <div className=" items-center gap-4 mb-4">
            <div className="justify-center items-center rounded-lg dark:bg-gray-800 font-[Poppins]">
              <p className='text-lg font-bold mx-2 p-2 text-[#9A3B3B]'>Sandhangan</p>
              <div class="w-full text-center mx-2 p-2 grid grid-cols-5 gap-4 overflow-y-auto" style={{ maxHeight: '400px' }}>
                <ReactPlayer controls={true} url={VidMateri} height={350} width={900} />         
              </div>
              <div className='flex flex-col items-start justify-start mt-10 mx-4'>
                <Link to='/latihan-struktur' className='bg-[#433A30] px-16 py-2 text-white rounded-lg'>Selanjutnya</Link>
              </div>
            </div>
            {/* <div className="col-span-1 flex flex-col items-center justify-center mb-44">
              <div className="border-yellow-700 border-2 rounded-xl drop-shadow-xl w-80 flex flex-col items-center justify-center">
                <img className="w-52" alt="" src={Welcome} />
                <p className="text-[#9A3B3B] mt-4 text-center">Halooo, berikut ada materi penggunaan sandhangan yang harus kamu pelajari lhoo, liat videonya yaa</p>
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
  </div>
  )}
