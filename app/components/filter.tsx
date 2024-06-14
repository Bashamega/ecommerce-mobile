import { Div, P } from "./TailwindComponents";
import { Search } from "./search";

export function Filter() {
    return (
        <Div className=" bg-[#FFFBF5] w-screen mb-5 px-5 pt-10">
            <Div className="flex justify-evenly flex-row items-center ">
                <Search />
                <P>Icon</P>
            </Div>
            <Div className="flex justify-evenly flex-row items-center w-2/3 mt-5 ">
                <P className=" border-b-2 border-[#F69F21] font-bold">Popular</P>
                <P>Recently Viwed</P>
            </Div>

        </Div>
    )
}