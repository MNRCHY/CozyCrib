import React from 'react'
import Logo from '../assets/img/Logo2.webp'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {

    const navigate = useNavigate()

  return (
    <div className='flex justify-between w-full bg-dark py-3 px-5'>
        <div>
            <img src={Logo} className='w-12' alt='logo'/>
        </div>
        <div className='flex flex-col justify-center'>
            <div className='flex justify-between gap-32'>
                <div className='flex gap-10'>
                    <button className='text-light' onClick={() => navigate('/')}>Home</button>
                    <button className='text-light' onClick={() => navigate('/menu')}>Menu</button>
                    <button className='text-light' onClick={() => navigate('/products')}>Products</button>
                    <button className='text-light' onClick={() => navigate('#')}>About Us</button>
                </div>
                <div className='flex gap-5'>
                    <button className=' text-primary'>Sign In</button>
                    <h1 className=' text-primary'>|</h1>
                    <button className=' text-primary'>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}
