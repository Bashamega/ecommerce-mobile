import { Div, Img, P } from "./TailwindComponents";
export function Card({ key }: { key: number }) {
    return (
        <Div key={key} className=" shadow rounded bg-white h-[200px]">
            <Img source={require("../../assets/clothes/1.jpeg")} className="w-full h-1/2"/>
            <Div className="p-2">
                <P className=" font-bold  text-[8px]">ZAGATTO Messenger</P>
                <Div className="flex-row items-center">
                    <P>Icon</P>
                    <P className="text-[8px] text-[#F69F21]">4.7</P>
                </Div>
                <Div className=" flex-row justify-between">
                    <P className="font-bold">#5,000</P>
                    
                </Div>
            </Div>
        </Div>
    )
}