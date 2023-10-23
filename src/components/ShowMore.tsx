"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const ShowMore = ({
   pageNumber,
   isNext,
}: {
   pageNumber: number;
   isNext: boolean;
}) => {
   const router = useRouter();

   const handleClick = () => {
      const searchLocation = window.location.search;
      const params = new URLSearchParams(searchLocation);
      const newLimit = (pageNumber + 1) * 8;
      console.log(newLimit);
      if (!params.has("limit") || pageNumber > 1) {
         params.set("limit", `${newLimit}`);
      }

      router.push(`?${params}`, { scroll: false });
   };
   console.log(pageNumber);
   return (
      !isNext && (
         <Button onClick={handleClick} className={`bg-amber-500 mx-auto`}>
            ShowMore
         </Button>
      )
   );
};

export default ShowMore;
