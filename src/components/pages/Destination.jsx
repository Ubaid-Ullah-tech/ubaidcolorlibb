import { Typography, Rating } from "@material-tailwind/react";
import ubaid from '../../assets/images/ubaidd.jpg';
import pixels3 from '../../assets/images/pixela2.webp';
import pixels2 from '../../assets/images/pixels4.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export function RatingWithComment() {

   useEffect(()=>{
     AOS.init({
      delay:200,
    duration:2000
     })
   },[])
  return (
    <div className="px-8 text-center bg-cyan-100 pt-16 flex flex-col justify-center items-center pb-10">
      {/* First Destination */}
      <div className="flex flex-col justify-center items-center w-2/3"> 
        <h1 className="text-3xl mb-5" data-aos='flip-up'>Top Destination</h1>
        <Typography className="mb-10" data-aos='fade-right'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque animi exercitationem, eius, tempora fugiat repellendus commodi soluta harum sequi laborum aperiam, aliquam minus perferendis nobis quasi. Aliquid, incidunt nostrum?
        </Typography>
        <div>
        <img 
          className="rounded-lg w-96 h-72" data-aos='fade-up'
          src={ubaid} alt="Error" 
          />
        </div>
        <Typography variant="h6" className="mt-4">
          Ubaid Ullah
        </Typography>
        <Rating value={5} readonly />
      </div>

      {/* Second Destination */}
      <div className="mt-8">
       
        <img 
          className="rounded-lg  w-96 h-72"  data-aos='fade-up'
          src={pixels3} alt="Error" 
        />
        <Typography variant="h6" className="mt-4">
          Tania Andrew
        </Typography>
        <Rating value={4} readonly />
      </div>

      {/* Third Destination */}
      <div className="mt-8 flex flex-col justify-center items-center">
       
        <img
          className="rounded-lg  w-96 h-72"  data-aos='fade-up'
          src={pixels2} alt="Error" 
        />
        <Typography variant="h6" className="mt-4">
          Tania Andrew
        </Typography>
        <Rating value={3} readonly />
      </div>
    </div>
  );
}
