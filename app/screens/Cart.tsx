import { Menu } from "../components/Menu";
import { Nav } from "../components/Nav";
import { Div, Icon, P } from "../components/TailwindComponents";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../components/Btn";
import { FontAwesome5, FontAwesome, AntDesign } from "@expo/vector-icons";
import { PaymentMethod } from "../components/Method";
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
        <PaymentMethod icon="credit-card" title="Credit or Debit" selected={false}/>
        <PaymentMethod icon="money-bill" title="Mobile Money" selected={true}/>
        <PaymentMethod  title="Bank Transfer" selected={false} type="FontAwesome"/>
        <PaymentMethod icon="store" title="Pay in store" selected={false}/>
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
