import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ucard = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    const [readMore, setReadMore] = useState(false);

    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit distinctio necessitatibus optio accusamus sint vitae delectus tempora cum! Maxime doloribus rerum pariatur harum neque obcaecati incidunt laboriosam voluptatibus quos perspiciatis.";

    const details = description.split(' ').slice(0, 10).join(' ') + '...';

    const handleMore = () => {
        setReadMore(true);
    }

    const handleLess = () => {
        setReadMore(false);
    }

    return (
        <div className='bg-green-300 flex justify-center items-center py-6'>
            <div className='border flex flex-col justify-center items-center w-full lg:w-72 max-w-full py-4 px-6 m-10 rounded-md'>
                <img
                    data-aos='fade-up'
                    className='w-full lg:w-72 h-52 object-cover'
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTa0tuaMXvDBuJp2LfEXIpDnOt7-leCVujqUFModBarOPTFQ244"
                    alt="Ubiad Ullah"
                    style={{ imageRendering: 'crisp-edges' }} // Prevents blurry images
                />
                <h1 className='text-xl font-bold my-3'>Ubiad Ullah</h1>
                <p className='text-base leading-relaxed text-center'>
                    {readMore ? description : details}
                </p>

                <div className='mt-4'>
                    {!readMore ? (
                        <button
                            className='text-blue-600 underline'
                            onClick={handleMore}
                        >
                            Read More
                        </button>
                    ) : (
                        <button
                            className='text-blue-600 underline'
                            onClick={handleLess}
                        >
                            Read Less
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Ucard;











// import React, { useEffect, useState } from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Ucard = () => {

//     useEffect(()=>{
//         AOS.init({
//         duration: '2000'
//         })
//     })
//      const [readMore , setReadMore] = useState(false);

//     const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit distinctio necessitatibus optio accusamus sint vitae delectus tempora cum! Maxime doloribus rerum pariatur harum neque obcaecati incidunt laboriosam voluptatibus quos perspiciatis.";
    
//      const details = description.split(' ').slice(0,10).join(' ')+ '...';

//      const handleMore = ()=>{
//          setReadMore(true)
//      }

//      const handleLess = ()=>{
//        setReadMore(false)
//      }
//     return (
//     <div className='bg-green-300 flex justify-center items-center'>
//       <div className='border flex flex-col justify-center items-center w-3/6 lg:w-72 py-2 px-4 m-10 rounded-md'>
//       <img  data-aos='fade-up'
//       className='w-72 h-52'
//       src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTa0tuaMXvDBuJp2LfEXIpDnOt7-leCVujqUFModBarOPTFQ244" alt="" />
//       <h1>Ubiad ullah</h1>
//       {/* <p>{description}</p> */}
//       <p >{readMore ? description : details}</p>
      
//       <div>
//          {!readMore ? (
//            <button onClick={handleMore}>
//             ReadtMore
//            </button>  
//          ):(
//             <button onClick={handleLess}>
//             ReadLess
//             </button>
//          )}
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Ucard
