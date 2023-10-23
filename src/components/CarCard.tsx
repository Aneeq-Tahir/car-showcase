import Image from "next/image";
import { calculateCarRent, getImages } from "@/lib/utils";
import { TbSteeringWheel, TbWheel } from "react-icons/tb";
import { BsFuelPumpFill, BsArrowRight } from "react-icons/bs";
import { Button } from "./ui/button";
import CarDetails from "./CarDetails";
import { Dialog, DialogTrigger } from "./ui/dialog";

import type { CarProps } from "@/types";

const CarCard = ({ car }: { car: CarProps }) => {
   const { city_mpg, make, model, transmission, year, drive } = car;
   const carRent = calculateCarRent(city_mpg, year);

   return (
      <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
         <div className="car-card__content">
            <h2 className="car-card__content-title">{make + " " + model}</h2>
         </div>
         <p className="flex mt-6 text-3xl font-extrabold">
            <span className="self-start text-sm font-semibold">$</span>
            {carRent}
            <span className="self-end text-sm font-medium">/day</span>
         </p>
         <div className="relative w-full h-40 my-3 object-contain">
            <Image
               src={getImages(car)}
               fill
               priority
               alt="carImg"
               className="object-contain"
            />
         </div>
         <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible justify-between text-gray w-full">
               <div className="flex flex-col justify-center items-center gap-2">
                  <TbSteeringWheel className="w-5 h-5" />
                  <p className="text-sm">
                     {transmission === "a" ? "Automatic" : "Manual"}
                  </p>
               </div>
               <div className="flex flex-col justify-center items-center gap-2">
                  <TbWheel className="w-5 h-5" />
                  <p className="text-sm">{drive.toUpperCase()}</p>
               </div>
               <div className="flex flex-col justify-center items-center gap-2">
                  <BsFuelPumpFill className="w-5 h-5" />
                  <p className="text-sm">{city_mpg} MPG</p>
               </div>
            </div>
            <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
               <Dialog>
                  <DialogTrigger asChild>
                     <Button className="w-full py-4 rounded-md bg-amber-500 text-sm font-bold">
                        View More <BsArrowRight className="ms-1" />
                     </Button>
                  </DialogTrigger>
                  <CarDetails car={car} />
               </Dialog>
            </div>
         </div>
      </div>
   );
};

export default CarCard;
