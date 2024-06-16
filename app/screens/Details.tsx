import { Nav } from "../components/Nav";
import { Div, Scroll, P, AntiIcon } from "../components/TailwindComponents";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Circle } from "../components/Gallery";
import { Grid } from "../components/Grid";
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
          <Div className=" flex-row items-center py-5 justify-between">
            <P>Color</P>
            <Div className="flex-row justify-center items-center space-x-2">
              <Div className="h-8 w-8 rounded-full bg-[#FFE606]" />
              <Div className="h-8 w-8 rounded-full bg-[#D130C1]" />
              <Div className="h-14 w-14 rounded-full bg-[#66AE83] border border-[#F69F21]" />
              <Div className="h-8 w-8 rounded-full bg-[#8C3838]" />
              <Div className="h-8 w-8 rounded-full bg-[#EB903C]" />
              <AntiIcon name="right" size={30} color="gray" />
            </Div>
          </Div>
          <Div className=" flex-row justify-end">
            <P className="text-[#F69F21]">View size chart</P>
          </Div>
          <Div className="flex-row  justify-between pt-2">
            <P className=" w-2/3 text-center p-5 rounded-lg text-white font-bold bg-[#F69F21]">Buy now</P>
            <AntiIcon name="shoppingcart" size={30} color={"#F69F21"} className="p-5 rounded-lg border border-[#F69F21] w-1/4" />
          </Div>
          <Div className=" pt-5 pb-10">
            <Div className="flex-row pb-2">
              <P className=" font-bold border-b-2 border-[#F69F21] w-3/4">Details</P>
              <P className=" font-bold border-b-2 border-black w-1/4 text-right">Reviews</P>
            </Div>
            <Div>
              <P>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
                <P className="font-bold  text-[#F69F21]"> Read More</P>
              </P>
              
            </Div>
          </Div>
          <Div>
            <Div className=" flex-row justify-between">
              <P className="font-bols">Recommended Products</P>
              <P className="text-[#F69F21]">View all</P>
            </Div>
            <Grid navigation={navigation}/>
          </Div>
        </Div>
      </Scroll>
    </Div>
  );
}
