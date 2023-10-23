import React from "react";

import {
   DropdownMenu,
   DropdownMenuRadioItem,
   DropdownMenuContent,
   DropdownMenuTrigger,
   DropdownMenuRadioGroup,
} from "./ui/dropdown-menu";

import { Button } from "./ui/button";
import { CustomFilterProps } from "@/types";
import { LuChevronsUpDown } from "react-icons/lu";

const CustomFilter = ({ children, options, state }: CustomFilterProps) => {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant="outline">
               {state[0] ? state[0] : children} <LuChevronsUpDown className="ml-2" />
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="w-56 max-h-[14.5rem]">
            <DropdownMenuRadioGroup value={state[0]} onValueChange={state[1]}>
               {options.map((v) => (
                  <DropdownMenuRadioItem key={v.title} value={v.value}>
                     {v.title}
                  </DropdownMenuRadioItem>
               ))}
            </DropdownMenuRadioGroup>
         </DropdownMenuContent>
      </DropdownMenu>
   );
};

export default CustomFilter;
