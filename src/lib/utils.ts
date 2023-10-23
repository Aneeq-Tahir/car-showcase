import { CarProps, FilterProps } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}
export async function fetchCars(filter: FilterProps) {
   const { fuel, limit, make, model, year } = filter;
   const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`;
   const headers = {
      "X-RapidAPI-Key": "4845993783mshea875ef3b2fa599p1c7bffjsnfea657cb1dfb",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
   };

   try {
      const response = await fetch(url, { headers });
      const data = await response.json();
      return data;
   } catch (error) {
      console.error(error);
      throw new Error((error as { message: string }).message);
   }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
   const basePricePerDay = 50; // Base rental price per day in dollars
   const mileageFactor = 0.1; // Additional rate per mile driven
   const ageFactor = 0.05; // Additional rate per year of vehicle age

   // Calculate additional rate based on mileage and age
   const mileageRate = city_mpg * mileageFactor;
   const ageRate = (new Date().getFullYear() - year) * ageFactor;

   // Calculate total rental rate per day
   const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

   return rentalRatePerDay.toFixed(0);
};

export const getImages = (car: CarProps, angle?: string) => {
   const url = new URL("https:cdn.imagin.studio/getimage");
   const { make, year, model } = car;

   url.searchParams.append("customer", "hrjavascript-mastery");
   url.searchParams.append("modelFamily", model.split(" ")[0]);
   url.searchParams.append("make", make);
   url.searchParams.append("angle", `${angle}`);
   url.searchParams.append("modelYear", `${year}`);
   url.searchParams.append("zoomType", "fullscreen");

   return `${url}`;
};
