import { Catalogue, Hero } from "@/components";
import { FilterProps } from "@/types";

export default function Home({ searchParams }: { searchParams: FilterProps }) {
   return (
      <main>
         <Hero />
         <Catalogue searchParams={searchParams} />
      </main>
   );
}
