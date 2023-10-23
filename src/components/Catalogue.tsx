import { fetchCars } from "@/lib/utils";
import CarCard from "./CarCard";
import SearchCars from "./SearchCars";

import type { FilterProps } from "@/types";
import ShowMore from "./ShowMore";

const Catalogue = async ({ searchParams }: { searchParams: FilterProps }) => {
   const cars = await fetchCars({
      fuel: searchParams.fuel || "",
      limit: searchParams.limit || 8,
      make: searchParams.make || "",
      model: searchParams.model || "",
      year: searchParams.year || 2015,
   });
   const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;

   return (
      <div className="mt-12 sm:px-16 px-6 max-w-[1440px] mx-auto py-4">
         <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
            <h1 className="text-4xl font-bold dark:text-white">
               Car Catalogue
            </h1>
            <p>Explore the cars you might like</p>
            <SearchCars />
            {!isDataEmpty ? (
               <section className="mt-16 mx-auto flex justify-center items-center flex-col gap-2">
                  <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
                     {cars.map((car, i) => (
                        <CarCard key={i} car={car} />
                     ))}
                  </div>
                  <ShowMore
                     pageNumber={(searchParams.limit || 8) / 8}
                     isNext={(searchParams.limit || 8) > cars.length}
                  />
               </section>
            ) : (
               <div className="">
                  <h2 className="text-xl font-bold text-black">
                     Oops, no results
                  </h2>
                  <p className="">{cars?.message}</p>
               </div>
            )}
         </div>
      </div>
   );
};

export default Catalogue;
