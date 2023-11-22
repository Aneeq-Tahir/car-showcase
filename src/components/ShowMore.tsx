"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

type Props = {
   pageNumber: number;
   isNext: boolean;
};

const ShowMore = ({ pageNumber, isNext }: Props) => {
   const router = useRouter();
   const pageNumbers = Array.from(Array(7).keys()).map((i) => ++i);

   const handlePage = (page: number) => {
      const searchLocation = window.location.search;
      const params = new URLSearchParams(searchLocation);
      const newLimit = page * 8;

      if (!params.has("limit") || pageNumber >= 1) {
         params.set("limit", `${newLimit}`);
      }

      router.push(`?${params}`, { scroll: false });
   };

   return (
      <div className="flex gap-3 items-baseline">
         <Button
            onClick={() => handlePage(pageNumber - 1)}
            className={`${
               pageNumber > 1 ? "opacity-100" : "opacity-0"
            } bg-amber-500 mx-auto mt-5`}
         >
            Previous
         </Button>
         {pageNumbers.map((page) => (
            <button
               onClick={() => handlePage(page)}
               className={page === pageNumber ? "font-extrabold" : ""}
               key={page}
            >
               {page}
            </button>
         ))}
         {!isNext && (
            <Button
               onClick={() => handlePage(pageNumber + 1)}
               className={`bg-amber-500 mx-auto mt-5`}
            >
               Next
            </Button>
         )}
      </div>
   );
};

export default ShowMore;
