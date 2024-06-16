import { Div } from "./TailwindComponents";

export const Circle = ({ dark }: { dark?: boolean }) => (
  <Div
    className={` ${dark ? "bg-[#F69F21] w-3 h-3" : "bg-[#F69F2173] w-2 h-2"} bg-opacity-50 rounded-full`}
  />
);
export function Gal() {
  return (
    <Div className=" flex-col justify-center items-center">
      <Div className=" w-full h-[200px] bg-[#C4C4C4] rounded-2xl" />
      <Div className=" flex-row justify-evenly w-1/2 my-2 items-center">
        <Circle />
        <Circle />
        <Circle dark={true} />
        <Circle />
        <Circle />
      </Div>
    </Div>
  );
}
