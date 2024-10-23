import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carduse from '../experience/Carduse';
import hotel1 from '../../assets/images/hotel1.webp'

import hotel2 from '../../assets/images/hotel2.webp'

import { GalleryWithCarousel } from '../pages/ImageCarousel.jsx'
import Blogs from '../tourMangmnt/Blogs.jsx';

const Hotels = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      {/* img  */}
      <div className="relative text-center text-brown-50">
        <img
          src={hotel1}
          alt="Error"
          className="w-full h-screen object-cover sm:h-screen"
        />
        <div className="w-96 flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <h1 className="text-3xl mb-2 text-blue-900" data-aos="flip-left">Our Hotel</h1>
          <h1 className="text-2xl mb-2 tracking-widest text-blue-900" data-aos="flip-right">
            A free template by Colorlib. Download and share!
          </h1>
        </div>
      </div>
      {/* experience */}
      <div>
        <Carduse showParagraph={false} />
      </div>
      {/* Rooms */}
      <div className='pt-3 pb-10'>
        {/* family Room */}
        <div className='w-full min-w-full flex flex-col lg:flex-row justify-center items-center mb-10'>
            {/* left  */}
            <div className='w-3/6 flex justify-center items-center '>
             <img 
             className='w-96 h-52'
             src={hotel1} alt="Error" />
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
        {/* presedential room */}
        <div className='w-full min-w-full flex flex-col lg:flex-row justify-center items-center'>
            {/* left  */}
            <div className='w-3/6 flex justify-center items-center'>
             <img 
             className='w-96 h-52'
             src={hotel2} alt="" />
            </div>
            {/* right  */}
            <div className='w-3/6'>
               <h1 className='mt-3 mb-3'>Presidential Room</h1>
               <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                   <br />
               A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
               <button className='border border-blue-100 px-2 py-1 mt-5 mb-7'>LEARN MORE</button>
               <hr />
            </div>
        </div>
        {/* hotel Gallery */}
        <div className='pt-10'>
            <h1 className='flex justify-center items-center'>Hotel Gallery</h1>
            <p  className='flex justify-center items-center px-20 lg:px-40 pt-10 pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime iusto reprehenderit, impedit at nesciunt mollitia, voluptate ducimus dolor facilis laudantium accusamus itaque minus dolore explicabo asperiores veniam aliquid porro.</p>
            <div  className='flex justify-center items-center'>
            {/* <ImageCarousel/> */}
            <GalleryWithCarousel/>
            </div>
        </div>
        {/* hotel Features */}
        <div>
            <Blogs/>
        </div>
      </div>
    </div>
  );
};

export default Hotels;