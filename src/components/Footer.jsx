import React from 'react'
import location from '../assets/location.png'
import phone from '../assets/telephone.png'
import email from '../assets/email.png'

function Footer() {
  return (
    <div>
        <div className='p-2 bg-gray-600 mt-5 text-white'>
        <p className='text-base pt-2 text-left leading-relaxed w-[60%] font-mono font-bold items-start mb-10'>"Nuk ka dy raste që janë të njëjta dhe një strategji e menduar mirë ndërtohet për çdo rast.</p>
            
            <p className='text-sm flex whitespace-pre py-1'><img src={location} width={20}/>  Tirane, Rr. Sami Frasheri, Pallati "Delta"</p>
            <p className='text-sm flex whitespace-pre py-1'><img src={phone} width={20}/>  04 2241538</p>
            <p className='text-sm flex whitespace-pre py-1'><img src={email} width={20}/>  info@dominus.al</p>
        </div>
        <div className='p-2 align-bottom bg-gray-800 text-white flex justify-center'>
            <p className='font-sans text-sm'>© 2024 All rights reserved - DOMINUS Shpk</p>
        </div>
    </div>
  )
}

export default Footer
