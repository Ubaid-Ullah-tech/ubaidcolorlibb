import React, { useEffect } from 'react';
import CardData from './CardData.json';
import { CardWithLink } from './Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Carduse = ({ showParagraph = true }) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 3000,
      easing: 'ease-in-sine',
      delay: 200,
    });
  }, []);

  return (
    <div className='bg-blue-gray-50 flex flex-col my-10 py-10'>
      {/* experiene  */}
      <div className='flex flex-col justify-center items-center px-10 gap-6'>
        <h1 className='text-3xl' data-aos='fade-up'>Experience Once In Your Life Time</h1>
        {showParagraph && (
          <p className='lg:w-1/2' data-aos='fade-up'>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
        )}
      </div>
      {/* cards  */}
      <div className='grid justify-center items-center lg:grid-cols-3 lg:px-10'>
        {CardData.map((card, index) => (
          <CardWithLink
            key={index}
            Image={card.Image}
            title={card.tittle}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Carduse;























// import React, { useEffect } from 'react'
// import CardData from './CardData.json'
// import { CardWithLink } from './Card'
// import AOS from 'aos'
// import 'aos/dist/aos.css';

// const Carduse = () => {

//     useEffect(() => {
//         AOS.init({
//           offset: 100,
//           duration: 3000,
//           easing: 'ease-in-sine',
//           delay: 200,
//         });
//       }, []);
    

//   return (
//     <div className='bg-blue-gray-50 flex flex-col my-10 py-10'>
//         {/* experiene  */}
//       <div className='flex flex-col justify-center items-center px-10 gap-6'>
//         <h1 className='text-3xl' data-aos='fade-up'>Experience Once In Your Life Time</h1>
//         <p className='lg:w-1/2' data-aos='fade-up'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
//       </div>
//       {/* cards  */}
//       <div className='grid  justify-center items-center lg:grid-cols-3 lg:px-10'>
//         {CardData.map((card , index )=>(
//             <CardWithLink
//             key={index}
//             Image={card.Image}
//             title={card.tittle}
//             description={card.description}
//             />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Carduse