import React, { useEffect } from 'react'
import elon from '../../assets/images/elon.jpeg'
// import hotel1 from '../../assets/images/hotel1.webp'
 import elon1 from '../../assets/images/elon1.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GalleryWithCarousel } from './ImageCarousel';
import { DefaultGallery } from './Gallery';

const About = () => {

  useEffect(()=>{
       AOS.init({
        duration:2000
       })
  },[])


  return (
    <div>
       <div className="relative text-center text-brown-50">
        <img
          src={elon}
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
         <div className='pt-10 pb-10'>
          {/* family Room */}
        <div className='w-full min-w-full flex flex-col lg:flex-row justify-center items-center mb-10'>
            {/* left  */}
            <div className='w-3/6 flex justify-center items-center '>
             <img 
             className='w-96 h-52'
             src={elon1} alt="Error" />
            </div>
            {/* right  */}
            <div className='w-3/6'>
               <h1 className='mb-3 mt-3'>Family Room</h1>
               <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                   <br />
               A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
               <button className='border border-blue-100 px-2 py-1 mt-5 mb-1'>LEARN MORE</button>
            </div>
        </div>
         </div>
         <div className='pb-10'>
         <GalleryWithCarousel/>
         </div>
         <div className='flex flex-col justify-center items-center px-10'>
          <h1>Team</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, sequi? Magni, odio accusamus? Quam cumque, vel accusamus possimus aspernatur, earum accusantium saepe illo obcaecati error eius cupiditate voluptatum quia eum.</p>
          <div className=' pt-10 pb-10'>
            <DefaultGallery/>
          </div>
         </div>
    </div>
  )
}

export default About