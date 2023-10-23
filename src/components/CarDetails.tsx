import React from "react";
import { CarProps } from "@/types";
import { DialogContent, DialogHeader } from "./ui/dialog";
import Image from "next/image";
import { getImages } from "@/lib/utils";

const CarDetails = ({ car }: { car: CarProps }) => {
   return (
      <DialogContent className="sm:max-w-[425px] p-6">
         <DialogHeader>
            <div className="relative bg-amber-500 w-full h-40 bg-cover bg-center rounded-md">
               <Image
                  src={getImages(car)}
                  fill
                  priority
                  className="object-contain"
                  alt={""}
               />
            </div>
            <div className="flex gap-3">
               <div className="flex-1 relative w-full h-24 rounded-lg">
                  <Image
                     src={getImages(car, "29")}
                     fill
                     priority
                     className="object-contain"
                     alt={""}
                  />
               </div>
               <div className="flex-1 relative w-full h-24 rounded-lg">
                  <Image
                     src={getImages(car, "33")}
                     fill
                     priority
                     className="object-contain"
                     alt={""}
                  />
               </div>
               <div className="flex-1 relative w-full h-24 rounded-lg">
                  <Image
                     src={getImages(car, "13")}
                     fill
                     priority
                     className="object-contain"
                     alt={""}
                  />
               </div>
            </div>
            <div className="flex flex-col flex-1">
               <h2 className="font-semibold text-xl capitalize">
                  {car.make} {car.model}
               </h2>
               <div className="mt-3 flex flex-wrap gap-[2px]">
                  {Object.entries(car).map(([key, value]) => (
                     <div
                        key={key}
                        className="flex justify-between gap-5 w-full text-right"
                     >
                        <h4 className="text-gray-500 capitalize">
                           {key.split("_").join(" ")}
                        </h4>
                        <p className="text-black-100 font-semibold">{value}</p>
                     </div>
                  ))}
               </div>
            </div>
         </DialogHeader>
      </DialogContent>
   );
};

export default CarDetails;
