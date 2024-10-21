import React from 'react'
import counseling from '../assets/counseling.svg'
import bailiff from '../assets/bailiff.svg'
import collection from '../assets/collection.svg';

function ServicesComponent() {
  return (
    <div className='p-10 rounded-3xl color: bg-[var(--Remi)] ml-0 mr-auto mt-10 '>
            <h1 className='text-2xl font-semibold'>
              Our Services
            </h1>
            <p className='pt-5 text-left leading-relaxed text-lg'>
              At Dominus, we specialize  in delivering top-notch [service/industry focus, e.g., software development, legal consulting, digital marketing]
              solutions tailored to meet the unique needs of our clients. With over 11 years of experience, our team of experts is dedicated to providing
              exceptional service and driving impactful results.
            </p>
            <div className='flex justify-center items-center space-x-10 py-5'>

              <div className="flex flex-col items-center p-5 hover:bg-gray-500 rounded-xl">
                <img src={counseling} alt="Legal Counseling" width="150" height="150" className='m-2'/>
                <p className="text-base mt-2">Legal Counseling</p>
              </div>  
              <div className="flex flex-col items-center p-5 hover:bg-gray-500 rounded-xl">  
                <img src={bailiff} alt="Bailiff Services" width="150" height="150" className='m-2'/>
                <p className="text-base mt-2">Bailiff Services</p>
              </div>
              <div className="flex flex-col items-center p-5 hover:bg-gray-500 rounded-xl">
                <img src={collection} alt="Collection" width="150" height="150" className='m-2'/>
                <p className="text-base mt-2">Collection</p>
              </div>
            </div>

          </div>
  )
}

export default ServicesComponent
