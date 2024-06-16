import { Div, Icon, Img, P, Touch } from "./TailwindComponents";
import { AntDesign } from "@expo/vector-icons";
export function Card({ id, navigation }: { id: number; navigation: any }) {
  const isDivisibleBy4 = id % 4 === 0;
  const isDivisibleBy3 = id % 3 === 0;
  const isDivisibleBy2 = id % 2 === 0;
  let imageSource;

  if (isDivisibleBy4) {
    imageSource = require("../../assets/clothes/4.jpeg");
  } else if (isDivisibleBy3) {
    imageSource = require("../../assets/clothes/3.jpeg");
  } else if (isDivisibleBy2) {
    imageSource = require("../../assets/clothes/2.jpeg");
  } else {
    imageSource = require("../../assets/clothes/1.jpeg"); // Fallback image if not divisible by 4, 3, or 2
  }
  return (
    <Touch
      key={id}
      onPress={() => {
        navigation?.navigate("details");
      }}
      className=" w-[143px] bg-[#FFFBF5] relative shadow rounded-lg  h-[219px] border border-[#F69F21] "
    >
      <Img source={imageSource} className="w-full h-1/2 rounded-lg" />
      <Icon
        size={10}
        name="heart"
        className="text-[#F69F21] absolute top-[10px] right-[10px]"
      />
      <Div className="p-2">
        <P className=" font-bold  text-[8px]">ZAGATTO Messenger</P>
        <Div className="flex-row items-center">
          <AntDesign name="star" size={8} color="#F69F21" />
          <P className="text-[8px] text-[#F69F21]">4.7</P>
        </Div>
        <Div className=" flex-row justify-between">
          <P className="font-bold text-[8px]">#5,000</P>
          <P className="text-[8px] text-white bg-[#F69F21] py-1 px-3 rounded-full">
            Add to cart
          </P>
        </Div>
      </Div>
    </Touch>
  );
}
