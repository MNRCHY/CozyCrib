import React from 'react'
import Logo from '../assets/Logo2.webp'
import { useNavigate } from 'react-router-dom'

export default function Footer() {

    const navigate = useNavigate()

  return (
    <div className='w-full bg-dark px-5 pt-3 mb-1'>
        <div className='flex gap-5'>
            <img src={Logo} className='w-12' alt='logo'/>
            <div className='flex flex-col justify-center'>
                <h6 className='text-light font-semibold'>Site map:</h6>
                <div className='flex gap-5'>
                    <button className='text-light text-sm'>Home</button>
                    <h6 className='text-light text-sm'>|</h6>
                    <button className='text-light text-sm' onClick={() => navigate('/menu')}>Menu</button>
                    <h6 className='text-light text-sm'>|</h6>
                    <button className='text-light text-sm'>Products</button>
                    <h6 className='text-light text-sm'>|</h6>
                    <button className='text-light text-sm'>About Us</button>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
                <h6 className='text-light text-xs mb-3 opacity-50'>All Rigths Reserved | Moechtar Wira | 2023</h6>
        </div>
    </div>
  )
}
