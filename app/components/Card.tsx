import { Div, AntiIcon, Img, P, Touch } from "./TailwindComponents";
import { AntDesign } from "@expo/vector-icons";
export function Card({ id, navigation }: { id: number; navigation: any }) {
  const isDivisibleBy4 = id % 4 === 0;
  const isDivisibleBy3 = id % 3 === 0;
  const isDivisibleBy2 = id % 2 === 0;

  const images = {
    1: require('../../assets/clothes/1.jpeg'),
    2: require('../../assets/clothes/2.jpeg'),
    3: require('../../assets/clothes/3.jpeg'),
    4: require('../../assets/clothes/4.jpeg'),
  };
  const key = isDivisibleBy4 ? 4 : isDivisibleBy3 ? 3 : isDivisibleBy2 ? 2 : 1
  return (
    <Touch
      key={id}
      onPress={() => {
        navigation?.navigate("details");
      }}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
      }}
      className=" w-[143px] bg-[#FFFBF5] relative shadow rounded-lg  h-[220px] border border-[#F69F21] "
    >
      <Img source={images[key]} className="w-full h-[156px] rounded-lg" />
      <AntiIcon
        size={10}
        name="hearto"
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
