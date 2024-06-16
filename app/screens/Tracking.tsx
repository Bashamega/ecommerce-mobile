import {
  Div,
  Scroll,
  Icon,
  P,
  Img,
  AntiIcon,
} from "../components/TailwindComponents";
import { FontAwesome, Entypo, MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export function Tracking({ navigation }: { navigation: any }) {
  const insets = useSafeAreaInsets();
  return (
    <Div
      className="relative h-full w-screen"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <Scroll>
        <Div>
          <Div className=" flex-row p-5 bg-white">
            <Icon
              color={"black"}
              onPress={() => {
                navigation?.navigate("home");
              }}
              name="chevron-back-outline"
              size={20}
            />
            <P className={"text-black font-bold"}>My Orders</P>
          </Div>
          <Div className=" bg-white py-5 px-10 border-y border-slate-400 flex-row space-x-1">
            <Div className=" rounded-lg p-[1px] w-1/4 h-24 bg-[#F69F21]">
              <Img
                source={require("../../assets/tracking.jpeg")}
                className=" rounded-lg w-full h-full"
              />
            </Div>
            <Div className="w-3/4">
              <Div className=" flex-row justify-between">
                <P className=" text-[10px]">Order #754373475</P>
                <P className=" text-[10px]">Amt: #40,000</P>
              </Div>
              <P className="font-bold">
                ZAGATTO Messenger bag, a spacious messenger bag
              </P>
              <P className="text-[10px]">Exp Delievry by Sun, May 10</P>
            </Div>
          </Div>
        </Div>
        <Div className="p-5">
          <Div className="flex-row gap-2">
            <Div className="p-5 bg-[#F69F21] w-24 h-24 flex justify-center items-center rounded-full">
              <FontAwesome size={40} color={"white"} name="cart-plus" />
            </Div>
            <Div>
              <P className="text-[#F69F21] font-bold text-lg">Order Placed</P>
              <P>May 29, 2022| 03:45 pm</P>
            </Div>
          </Div>
          <Div className=" h-20 border-l-4 ml-12 border-[#F69F21] w-20" />
          <Div className="flex-row gap-2">
            <Div className="p-5 bg-[#F69F21] w-24 h-24 flex justify-center items-center rounded-full">
              <Entypo size={40} color={"white"} name="shop" />
            </Div>
            <Div>
              <P className="text-[#F69F21] font-bold text-lg">
                Order Dispatched
              </P>
              <P>May 31, 2022| 11:45 pm</P>
            </Div>
          </Div>
          <Div className=" h-20 border-l-4 ml-12 border-[#F69F21] w-20" />
          <Div className="flex-row gap-2">
            <Div className="p-5 bg-[#F69F21] w-24 h-24 flex justify-center items-center rounded-full">
              <MaterialIcons size={40} color={"white"} name="local-shipping" />
            </Div>
            <Div>
              <P className="text-[#F69F21] font-bold text-lg">
                Order in Transit
              </P>
              <P className="text-[10px]">Reached at Jackline tower, Lagos</P>
            </Div>
          </Div>
          <Div className=" h-20 border-l-4 ml-12 border-[#F69F21] w-20 border-dotted" />
          <Div className="flex-row gap-2 items-center">
            <Div className="p-5 bg-white border border-[#F69F21] w-24 h-24 flex justify-center items-center rounded-full">
              <AntiIcon size={40} color={"#F69F21"} name="like1" />
            </Div>
            <Div>
              <P className="text-[#04040454] font-bold text-lg">
                Delivered Sucessfully
              </P>
            </Div>
          </Div>
          <Div className=" h-20 border-l-4 ml-12 border-[#F69F21] w-20" />
        </Div>
      </Scroll>
      <Div className=" absolute bottom-0 p-5 border-t w-full border-slate-400 bg-white flex-row space-x-1 items-center">
        <AntiIcon name="staro" color={"#F69F21"} size={50} />
        <Div>
          <P className="text-[#F69F21] text-lg font-bold">
            Don’t forget to rate
          </P>
          <P className=" text-slate-400">Amet minim mollit non deserunt</P>
          <Div className=" flex-row justify-between w-1/2">
            <AntiIcon name="star" color={"lightgrey"} size={30} />
            <AntiIcon name="star" color={"lightgrey"} size={30} />
            <AntiIcon name="star" color={"lightgrey"} size={30} />
            <AntiIcon name="star" color={"lightgrey"} size={30} />
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
