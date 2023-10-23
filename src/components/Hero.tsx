"use client";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
   const handleClick = () => {};
   return (
      <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
         <div className="flex-1 pt-20 sm:px-16 px-6">
            <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] leading-tight font-extrabold">
               Find, reserve, or lease a car — simply & efficiently!
            </h1>
            <p className="text-[27px] text-black-100 font-light mt-5 leading-tight">
               Streamline Your Car Rental Experience with our effortless booking
               process
            </p>
            <Button
               className="text-white rounded-lg mt-7 bg-amber-500"
               onClick={handleClick}
            >
               Explore Cars
            </Button>
         </div>
         <div className="xl:flex-[1.5] hidden md:flex justify-end items-end w-full xl:h-screen">
            <div className="relative xl:w-full w-[90%] xl:h-full h-[590px]">
               <Image
                  src={"/rocco.png"}
                  fill
                  alt="Car"
                  className="object-contain -rotate-2 2xl:-translate-y-20"
               />
               <div className="absolute 2xl:-top-24 2xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 2xl:h-screen w-full  h-[590px] overflow-hidden" />
            </div>
         </div>
      </div>
   );
};

export default Hero;
