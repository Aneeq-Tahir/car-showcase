import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
   return (
      <footer className="flex flex-col text-black-100 mt-5 border-gray-200 dark:!border-gray-500 border-t">
         <div className="flex flex-wrap max-md:flex-col justify-between gap-5 px-6 py-10 sm:px-16">
            <div className="flex flex-col justify-start items-start gap-6">
               <Image
                  src={"/logo.svg"}
                  alt="logo"
                  width={118}
                  height={18}
                  className="dark:invert"
               />
               <p className="text-base text-gray-600 dark:!text-gray-200">
                  &copy; CarHub {new Date().getFullYear()} <br />
                  All rights reserved
               </p>
            </div>
            <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
               {footerLinks.map((v) => (
                  <div
                     key={v.title}
                     className="flex flex-col gap-6 text-base min-w-[170px]"
                  >
                     <h3 className="font-bold">{v.title}</h3>
                     {v.links.map((item) => (
                        <Link
                           key={item.title}
                           href={item.url}
                           className="text-gray-500"
                        >
                           {item.title}
                        </Link>
                     ))}
                  </div>
               ))}
            </div>
         </div>

         <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-200 dark:!border-gray-600 sm:px-16 px-6 py-10">
            <p className="dark:text-gray-700">@{new Date().getFullYear()} CarHub. All Rights Reserved</p>
            <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
               <Link href={"#"} className="text-gray-500">
                  Privacy Policy
               </Link>
               <Link href={"/"} className="text-gray-500">
                  Terms of Service
               </Link>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
