import { Div, Input } from "./TailwindComponents";
import { Feather } from "@expo/vector-icons";
export function Search() {
  return (
    <Div className=" flex-row justify-evenly w-4/5 border-[#F69F21] border p-2 rounded-lg">
      <Input
        placeholder="search"
        className=" w-3/4 border-r-[1.7px] border-[#DCDFE3]"
      />
      <Feather name="search" size={24} color="gray" />
    </Div>
  );
}
