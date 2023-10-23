export type FilterProps = {
   make: string;
   year: number;
   fuel: string;
   limit: number;
   model: string;
};

export type State = [string, React.Dispatch<React.SetStateAction<string>>];

export type Options = {
   title: string;
   value: string;
};

export type CustomFilterProps = {
   children: string;
   options: Options[];
   state: State
}

export type CarProps = {
   city_mpg: number;
   class: string;
   combination_mpg: number;
   cylinders: number;
   displacement: number;
   drive: string;
   fuel_type: string;
   highway_mpg: number;
   make: string;
   model: string;
   transmission: "a" | "m";
   year: number;
};
