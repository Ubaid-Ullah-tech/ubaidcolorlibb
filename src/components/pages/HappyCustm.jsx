import { Avatar, Typography } from "@material-tailwind/react";
import ubaid from '../../assets/images/ubaidd.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export function AvatarWithText() {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 2000,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <div className="flex flex-col gap-6 pt-20 bg-teal-300 pb-20">
      <div className="mx-10" data-aos='flip-down'>
        <div className="flex items-center">
          <Avatar 
            src={ubaid} 
            alt="Ubaid Ullah's avatar" 
            className="w-16 h-16 object-cover" 
          />
          <div className="px-6">
            <Typography variant="h6">Ubaid Ullah</Typography>
          </div>
        </div>
        <div className="pt-5">
          <Typography variant="small" color="gray" className="font-normal">
            “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
          </Typography>
        </div>
      </div>

      {/* second  */}   
      <div className="mx-10" data-aos='flip-right'>
        <div className="flex items-center">
          <Avatar 
            src="https://docs.material-tailwind.com/img/face-2.jpg" 
            alt="Tania Andrew's avatar" 
            className="w-16 h-16 object-cover" 
          />
          <div className="px-6">
            <Typography variant="h6">Tania Andrew</Typography>
          </div>
        </div>
        <div className="pt-5">
          <Typography variant="small" color="gray" className="font-normal">
            “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
          </Typography>
        </div>
      </div>

      {/* third  */}
      <div className="mx-10" data-aos='flip-left'>
        <div className="flex items-center">
          <Avatar 
            src="https://docs.material-tailwind.com/img/face-2.jpg" 
            alt="Tania Andrew's avatar" 
            className="w-16 h-16 object-cover" 
          />
          <div className="px-6">
            <Typography variant="h6">Tania Andrew</Typography>
          </div>
        </div>
        <div className="pt-5">
          <Typography variant="small" color="gray" className="font-normal">
            “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
          </Typography>
        </div>
      </div>

      {/* fourth  */}
      <div className="mx-10" data-aos='flip-down'>
        <div className="flex items-center">
          <Avatar 
            src="https://docs.material-tailwind.com/img/face-2.jpg" 
            alt="Tania Andrew's avatar" 
            className="w-16 h-16 object-cover" 
          />
          <div className="px-6">
            <Typography variant="h6">Tania Andrew</Typography>
          </div>
        </div>
        <div className="pt-5">
          <Typography variant="small" color="gray" className="font-normal">
            “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
          </Typography>
        </div>
      </div>
    </div>
  );
}
