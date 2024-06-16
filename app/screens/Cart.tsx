import { Menu } from "../components/Menu";
import { Nav } from "../components/Nav";
import { Div, Icon, P } from "../components/TailwindComponents";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../components/Btn";
import { FontAwesome5, FontAwesome, AntDesign } from "@expo/vector-icons";
export function Cart({ navigation }: { navigation: any }) {
  const insets = useSafeAreaInsets();
  return (
    <Div
      className="relative h-full w-screen bg-[#FFFBF5] "
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <Nav text="Checkout" navigation={navigation} />
      <Div className="p-5 mb-14">
        <Div className=" flex-row mb-5  p-5 border border-[grey] rounded-2xl">
          <FontAwesome5 name="credit-card" size={30} color="grey" />
          <P className=" font-bold ml-2">Credit or Debit</P>
        </Div>
        <Div className=" flex-row mb-5  p-5 border border-[#F69F21] rounded-2xl">
          <FontAwesome5 name="money-bill" size={30} color="#F69F21" />
          <P className=" font-bold ml-2">Mobile Money</P>
          <Icon
            name="checkmark-circle"
            size={30}
            className=" absolute right-[10px] top-[50%]"
            color="#F69F21"
          />
        </Div>
        <Div className=" flex-row mb-5  p-5 border border-[grey] rounded-2xl">
          <FontAwesome name="bank" size={30} color="grey" />
          <P className=" font-bold ml-2">Bank Transfer</P>
        </Div>
        <Div className=" flex-row   p-5 border border-[grey] rounded-2xl">
          <FontAwesome5 name="store" size={30} color="grey" />
          <P className=" font-bold ml-2">Pay in store</P>
        </Div>
        <Div className=" mb-[100px] mt-5 border-y border-[#F69F219E]">
          <P>Select Bank</P>
          <Div className=" flex-row justify-between">
            <P className="text-slate-500">Select Prefered Bank</P>
            <AntDesign name="down" size={24} color="gray" />
          </Div>
        </Div>
        <Button
          title="Buy now"
          onPress={() => {
            navigation?.navigate("check");
          }}
        />
      </Div>
      <Menu navigation={navigation} active={4} />
    </Div>
  );
}
