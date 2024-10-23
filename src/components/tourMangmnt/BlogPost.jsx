import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
  export function CardDefault({image , title , description}) {
   const [showfull , setShowFull] = useState(false);

       const handleShow = ()=>{
           setShowFull(true);
       }

       const handleLess = ()=>{
           setShowFull(false);
       }

       const truncated = description.split(' ').slice(0,15).join(' ')+ '.... ';
    
       useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 2000,
          easing: 'ease-in-sine',
          delay: 100,
        });
      }, []);

    
       return (

        
       <div className="flex justify-center items-center pt-20 mx-3">
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56" data-aos="flip-left">
         <img src={image} alt="" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
           {title}
          </Typography>
          <Typography className="" data-aos="fade-up">
            {showfull ? description : truncated }
           {/* {description} */}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
            {!showfull ? (

                <Button onClick={handleShow}>Read More</Button>
            ):(
          <Button onClick={handleLess}>Read Less</Button>

            )}
        </CardFooter>
      </Card>
      </div>
    );
  }