import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
 
export function CardWithLink({Image, title , description}) {

  useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 3000,
        easing: 'ease-in-sine',
        delay: 100,
      });
    }, []);

  return (
    <Card className="mt-6 w-96" data-aos='fade-up'>
      <CardBody className="flex flex-col justify-center items-center gap-3">
       <img 
        className="w-24 h-24 rounded-full" data-aos="fade-right"
       src={Image}
        alt="error" />
        <Typography variant="h5" color="blue-gray" className="mb-2">
           {title}
        </Typography>
        <Typography className="" data-aos="fade-left">
         {description}
        </Typography>
      </CardBody>
     
    </Card>
  );
}















