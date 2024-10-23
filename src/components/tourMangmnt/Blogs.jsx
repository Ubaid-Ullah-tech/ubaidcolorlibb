import React, { useEffect } from 'react';
import { CardDefault } from './BlogPost';
import Post from './Post.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 3000,
      easing: 'ease-in-sine',
      delay: 200,
    });
  }, []);

  return (
    <div className="bg-green-300 pb-20">
      <div className="flex flex-col justify-center items-center pt-3">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-10 mt-12" data-aos="fade-up">
          Recent Blog Posts
        </h1>
        <p className="text-lg md:text-xl text-gray-700 w-3/4 md:w-1/2 text-center" data-aos="flip-left">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
          Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 justify-center items-center p-5">
        {Post.map((ubaid) => (
          <CardDefault
            key={ubaid.id}
            image={ubaid.image}
            title={ubaid.title}
            description={ubaid.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
