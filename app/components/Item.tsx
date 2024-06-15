import { Div, Img, P, AntiIcon, FontIcon } from "./TailwindComponents"
export function Item({disabled}:{disabled:boolean}) {
    return (
        <Div className="bg-white realtive rounded w-full p-5 flex-row gap-1">
            <AntiIcon name="checksquare" size={30} className=" absolute top-[-15px] left-[-15px]" color={disabled?"#CCCCCC":"#F69F21"} />
            <FontIcon name="trash" size={30} className=" absolute top-[-15px] right-[-15px]" color="#F69F21" />
            <Img source={require("../../assets/clothes/4.jpeg")} className=" rounded-lg w-1/4 h-full" />
            <Div>
                <P className=" font-bold">Product Name</P>
                <P className="text-[#F69F21]">Light Blue, Meduim</P>
                <Div className=" flex-row gap-3">
                    <P className="font-bold text-lg">#5,000</P>
                    <Div className="flex-row items-center">
                        <AntiIcon name="star" size={20} color="#F69F21" />
                        <P className=" text-[#F69F21]">4.7</P>
                    </Div>
                </Div>

            </Div>
            <Div className=" flex justify-center items-center">
                <AntiIcon name="plus" size={24} color="#F69F21" />
                <P className="text-[#00000073]">3</P>
                <AntiIcon name="minus" size={24} color="#F69F21" />
            </Div>
        </Div>
    )
}