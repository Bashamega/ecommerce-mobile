import { Nav } from "../components/Nav";
import { Div, Scroll, P, AntiIcon } from "../components/TailwindComponents";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Circle } from "../components/Gallery";
export function Details({ navigation }: { navigation: any }) {
  const insets = useSafeAreaInsets();
  return (
    <Div
      className="relative h-full w-screen bg-[#FFFBF5]"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <Scroll>
        <Nav text="Details" navigation={navigation} />
        <Div className="mt-5 flex-row justify-center space-x-5">
          <Div className="h-[330px] w-[250px] bg-[#C4C4C4] rounded-2xl" />
          <Div className="h-[330px] w-[250px] bg-[#C4C4C4] rounded-2xl" />
          <Div className="h-[330px] w-[250px] bg-[#C4C4C4] rounded-2xl" />
        </Div>
        <Div className=" flex-row justify-center w-full">
          <Div className="flex-row justify-between w-1/5 my-2 items-center">
            <Circle />
            <Circle />
            <Circle dark={true} />
            <Circle />
            <Circle />
          </Div>
        </Div>
        <Div className=" px-5 pt-10">
          <Div className=" flex-row justify-between">
            <P className=" font-bold">Product Name</P>
            <P className="text-[#F69F21]">#5,000</P>
          </Div>
          <Div className=" flex-row justify-between">
            <Div className="border-b border-[#F69F21] bg-[#FFFBF5] flex-row w-2/5 justify-evenly">
              <P>Size</P>
              <Div className=" bg-[#FFFBF5] flex-row items-end">
                <P className="text-slate-300">M</P>
                <AntiIcon name="down" size={14} color="gray" />
              </Div>
            </Div>
            <Div className="border-b border-[#F69F21] bg-[#FFFBF5] flex-row w-2/5 justify-evenly">
              <P>Quantity</P>
              <Div className=" bg-[#FFFBF5] flex-row items-center">
                <AntiIcon name="minus" size={14} color="gray" />
                <P className="text-slate-300">3</P>
                <AntiIcon name="plus" size={14} color="gray" />
              </Div>
            </Div>
          </Div>
        </Div>
      </Scroll>
    </Div>
  );
}
