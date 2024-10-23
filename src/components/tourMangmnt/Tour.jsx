import { Carousel } from "@material-tailwind/react";
import AOS from "aos";
import Blogs from "./Blogs";

export function CarouselDefault() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Title and Description */}
      <div className="flex flex-col justify-center items-center px-10 mb-10 gap-5">
        <h1 className="text-3xl" data-aos="fade-up">International Tour Management.</h1>
        <p className="lg:w-1/2" data-aos="fade-right" data-aos-delay="500">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </p>
      </div>
      
      {/* Carousel */}
      <div className="w-11/12 lg:w-3/6 lg:h-3/4" data-aos="fade-up" data-aos-delay="500">
        <Carousel className="rounded-xl h-full">
          <img
            src="https://www.alikestore.in/web-api/ImageCache/php-image-cache/cc8190a167425d69e7a3525ebdf57732.jpeg"
            alt="image 1"
            className="h-full w-full object-cover"
            data-aos="zoom-in" // Example of another effect on an image
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
            data-aos="zoom-in" // Example of another effect on an image
          />
          <img
            src="https://preview.colorlib.com/theme/hepta/images/slider-1.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
            data-aos="zoom-in" // Example of another effect on an image
          />
        </Carousel>
      </div>
      <div>
        <Blogs/>
      </div>
    </div>
  );
}