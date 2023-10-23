import { ModeToggle } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
   return (
      <header className="w-full">
         <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-6 sm:px-12 py-4">
            <Link href="/" className="object-contain">
               <Image
                  src="/logo.svg"
                  width={118}
                  height={18}
                  alt="logo"
                  className="dark:invert"
               />
            </Link>
            <div className="flex 2xl:mr-20">
               <Link href={""}>
                  <Button className="text-amber-500 min-w-[130px] text-lg">
                     Sign In
                  </Button>
               </Link>
               <ModeToggle />
            </div>
         </nav>
      </header>
   );
};

export default Navbar;
