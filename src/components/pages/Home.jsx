import React, { useEffect } from 'react';
import travel1 from '../../assets/images/travel1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    
  useEffect(() => {
    AOS.init({
      // offset: 200,
      duration: 1000,
      // easing: 'ease-in-sine',
      // delay: 100,
    });
  }, []);

  // Scroll down function
  const scrollDown = () => {
    window.scrollBy({
        top: window.innerHeight * 0.7, // Scroll down by half the viewport height
        left: 0,
        behavior: 'smooth' // Smooth scroll
    });
};

  return (
    <>
    <div className="relative text-center text-brown-50">
      <img
        src={travel1}
        alt="Error"
        className="w-full h-screen sm:h-screen blur-sm" // Apply blur effect using Tailwind CSS
      />
      <div className="w-96 flex flex-col  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <h1 className="text-3xl mb-2" data-aos="flip-left">Travel & Tours</h1>
        <h1 className="text-2xl mb-2 tracking-widest" data-aos="flip-right">A free template by Colorlib. Download and share!</h1>
        <button className="text-xl border p-4 hover:backdrop-blur-md" data-aos="fade-up">VISIT COLORLIB</button>
       {/* Scroll Down Button */}
       <button 
                onClick={scrollDown} 
                className='mx-auto mt-32 my-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
            >
                Scroll Down
            </button>
      </div>
      
    </div>
    
    </>
  );
}

export default Home;
