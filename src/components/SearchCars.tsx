"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { fuels, yearsOfProduction } from "@/constants";

import CustomFilter from "./CustomFilter";
import { ComboBox } from "./ComboBox";
import { BsCarFrontFill, BsSearch } from "react-icons/bs";
import { Button } from "./ui/button";

const SearchCars = () => {
   const [model, setModel] = useState("");
   const make = useState("");
   const years = useState("");
   const fuelType = useState("");

   const router = useRouter();

   const handleSearch = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!model && !make) return;

      updateSearchParams(
         model.toLowerCase(),
         make[0].toLowerCase(),
         years[0],
         fuelType[0]
      );
   };

   const updateSearchParams = (
      model: string,
      make: string,
      year: string,
      fuel: string
   ) => {
      let searchLocation = window.location.search;
      const params = new URLSearchParams(searchLocation);

      if (searchLocation.length > 0) {
         searchLocation = "";
         params.delete("make");
         params.delete("model");
         params.delete("year");
         params.delete("fuel");
      }

      if (!params.has("make")) params.set("make", make);
      if (!params.has("model")) params.set("model", model);
      if (!params.has("year")) params.set("year", year);
      if (!params.has("fuel")) params.set("fuel", fuel);

      const newPath = `${searchLocation}?${params}`;
      router.push(newPath, { scroll: false });
   };

   return (
      <form
         onSubmit={handleSearch}
         className="mt-12 w-full flex-between items-center flex-wrap gap-5"
      >
         <div className="search-manufacturer">
            <ComboBox state={make} />
         </div>
         <div className="searchbar__item">
            <input
               type="text"
               name="model"
               value={model}
               className="peer searchbar__input transition-all"
               onChange={(e) => setModel(e.target.value)}
               placeholder="Model"
            />
            <BsCarFrontFill className="absolute w-5 h-5 ml-4 peer-hover:dark:text-white" />
         </div>
         <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter state={fuelType} options={fuels}>
               Fuel
            </CustomFilter>
            <CustomFilter state={years} options={yearsOfProduction}>
               Year
            </CustomFilter>
         </div>
         <Button type="submit" size={"icon"}>
            <BsSearch className="text-white" />
         </Button>
      </form>
   );
};

export default SearchCars;
