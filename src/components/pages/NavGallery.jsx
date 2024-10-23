import React, { useEffect } from 'react'

import elon from '../../assets/images/pixels3.avif'
import pixels from '../../assets/images/pexels.jpeg'
import pixels1 from '../../assets/images/pixels1.webp'
import pixela2 from '../../assets/images/pixela2.webp'
import pixels3 from '../../assets/images/pixels3.avif'
import pixels4 from '../../assets/images/pixels4.webp'
import elon1 from '../../assets/images/elon1.webp'
import hotel1 from '../../assets/images/hotel1.webp'
import hotel2 from '../../assets/images/hotel2.webp'





import AOS from 'aos';
import 'aos/dist/aos.css';


const NavGallery = () => {
    useEffect(()=>{
        AOS.init({
            duration: 2000
        })
    })
  return (
    <div>
      <div className="relative text-center text-brown-50">
        <img
          src={pixels3}
          alt="Error"
          className="w-full h-screen object-cover sm:h-screen"
        />
        <div className="w-96 flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <h1 className="text-3xl mb-2" data-aos="flip-left">Gallery</h1>
          <h1 className="text-2xl mb-2 tracking-widest " data-aos="flip-right">
            A free template by Colorlib. Download and share!
          </h1>
        </div>
      </div>

      <div className=' pt-10 pb-10'>
        <h1 className='text-center'>Gallery</h1>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 pt-10 pb-10 px-5'>
            <img
            className='w-80 h-52' data-aos='fade-up'
            src={pixels} alt="Error" />

          <img
            className='w-80 h-52' data-aos='fade-right'
            src={pixels1} alt="Error" />

<img
            className='w-80 h-52' data-aos='fade-down'
            src={pixela2} alt="Error" />
            
            <img
            className='w-80 h-52'data-aos='flip-up'
            src={pixels4} alt="Error" />


<img
            className='w-80 h-52' data-aos='fade-left'
            src={hotel1} alt="Error" />

<img
            className='w-80 h-52' data-aos='flip-left'
            src={elon1} alt="Error" />
<img
            className='w-80 h-52' data-aos='fade-up'
            src={elon} alt="Error" />
<img
            className='w-80 h-52' data-aos='fade-right'
            src={hotel2} alt="Error" />
        </div>
      </div>
    </div>
  )
}

export default NavGallery
