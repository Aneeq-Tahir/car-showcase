"use client";

import * as React from "react";
import { LuCheck, LuChevronsUpDown } from "react-icons/lu";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
} from "@/components/ui/command";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";
import { manufacturers } from "@/constants";

import type { State } from "@/types";

export function ComboBox({ state }: { state: State }) {
   const [open, setOpen] = React.useState(false);
   const [make, setMake] = state;
   return (
      <Popover open={open} onOpenChange={setOpen}>
         <PopoverTrigger asChild>
            <Button
               variant="outline"
               role="combobox"
               aria-expanded={open}
               className="w-[400px] justify-between"
            >
               {make
                  ? manufacturers.find(
                       (manufacturer) => manufacturer.toLowerCase() === make,
                       0
                    )
                  : "Search Make..."}
               <LuChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-[400px] h-56 p-0">
            <Command>
               <CommandInput placeholder="Search ..." />
               <CommandEmpty>No Manufacturer found.</CommandEmpty>
               <CommandGroup>
                  {manufacturers.map((manufacturer) => (
                     <CommandItem
                        key={manufacturer.toLowerCase()}
                        onSelect={(currentmake) => {
                           setMake(currentmake === make ? "" : currentmake);
                           setOpen(false);
                        }}
                     >
                        <LuCheck
                           className={cn(
                              "mr-2 h-4 w-4",
                              make === manufacturer.toLowerCase()
                                 ? "opacity-100"
                                 : "opacity-0"
                           )}
                        />
                        {manufacturer}
                     </CommandItem>
                  ))}
               </CommandGroup>
            </Command>
         </PopoverContent>
      </Popover>
   );
}
