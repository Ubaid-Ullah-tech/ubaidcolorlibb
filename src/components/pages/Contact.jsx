import React, { useEffect } from 'react'
import pixels3 from '../../assets/images/pixels3.avif'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactForm from './ContactFoem';

const Contact = () => {

  useEffect(()=>{
    AOS.init({
      duration:2000
    })
},[])

  return (
    <div>
         <div className="relative text-center text-brown-50">
        <img
          src={pixels3}
          alt="Error"
          className="w-full h-screen object-cover sm:h-screen"
        />
        <div className="w-96 flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <h1 className="text-3xl mb-2" data-aos="flip-left">About Us</h1>
          <h1 className="text-2xl mb-2 tracking-widest " data-aos="flip-right">
            A free template by Colorlib. Download and share!
          </h1>
        </div>
      </div> 
      <div>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact
