import React, { useEffect } from 'react';
import woman from '../../assets/images/woman.avif';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VideoDialog from './Vedio';

const TwoDiv = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className='flex flex-col lg:flex-row justify-center items-center lg:px-10 lg:py-20 mt-10 gap-10'>
      {/* Left Section */}
      <div className='w-full lg:w-1/2' data-aos='fade-up'>
        <img 
          src={woman} 
          alt="A representation of our services" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      {/* Right Section */}
      <div className='w-full lg:w-1/2 p-5' data-aos='fade-up' data-aos-duration='2000'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
          Welcome To Our Website
        </h1>
        <p className='text-lg text-gray-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum suscipit facere ratione eius
          ipsam enim harum sed accusantium assumenda veniam praesentium, amet ea rerum magnam nisi
          incidunt dignissimos eveniet deserunt.
        </p>
      </div>
      {/* Video Dialog Section */}
      <div className='w-full lg:w-1/2 flex justify-center' data-aos='fade-up'>
        <VideoDialog />
      </div>
    </div>
  );
}

export default TwoDiv;
