import React, {useEffect, useState} from 'react'
import LoginA from '../images/A.png'
import BgLogin from '../images/BgLogin.png'
import axios from 'axios'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', {
      email: email,
      password: password
    })
    .then(res => {
      console.log(res.data.name, ' : ', res.data)
      if(res.data.code === 500){
        alert('User Not Found')
      }
      if(res.data.code === 404){
        alert('Password is wrong')
      }
      if(res.data.code === 200){
        sessionStorage.setItem('TOKEN', res.data.token)
        sessionStorage.setItem('name', res.data.name)
        navigate('/')
        window.location.reload()
      }
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    const storedToken = sessionStorage.getItem('TOKEN');
    const storedName = sessionStorage.getItem('name');
    if (storedToken && storedName){
      navigate('/')
    } 
  }, [])

  return (
    <div className='mx-10 grid grid-cols-3'>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-20 w-auto" src={LoginA} />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Masuk akun kamu</h2>
        </div>
      
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" action="#">
            <div>
              <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <div className="mt-2">
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                  value={email} 
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              </div>
            </div>
      
            <div>
              <div className="flex items-center justify-between">
                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div className="mt-2">
                <input 
                  id="password" 
                  name="password" 
                  type="password" 
                  required className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
              </div>
            </div>
      
            <div>
              <button type="button" onClick={handleSubmit} className="flex w-full justify-center rounded-md bg-[#9A3B3B] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#6F2525] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Masuk</button>
            </div>
          </form>
      
          <p className="mt-10 text-center text-sm text-gray-500">
            Belum punya akun?
            <Link to="/register">
              <a href="#" className="font-semibold text-[#9A3B3B] hover:text-[#6F2525] mx-1">Daftar</a>
            </Link>
          </p>
        </div>
      </div>
      <div className='col-span-2 flex-col flex items-center justify-center text-center'>
        <img className='w-2/3' src={BgLogin}/>
      </div>
  </div>
  )
}
