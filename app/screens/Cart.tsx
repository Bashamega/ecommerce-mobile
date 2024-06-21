import { Menu } from "../components/Menu";
import { Nav } from "../components/Nav";
import { Div, P } from "../components/TailwindComponents";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../components/Btn";
import { AntDesign } from "@expo/vector-icons";
import { PaymentMethod } from "../components/Method";
import { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
export function Cart({ navigation }: { navigation: any }) {
  const [selected, setSelected] = useState<number>(1)
  const [selectedBank, setSelectedBank] = useState<{ name: string } | null>(null)
  const insets = useSafeAreaInsets();
  const Banks: { name: string }[] = [
    { name: "JPMorgan Chase" },
    { name: "Bank of America" },
    { name: "Wells Fargo" },
    { name: "Citigroup" },
    { name: "Goldman Sachs" },
    { name: "Morgan Stanley" },
    { name: "U.S. Bancorp" },
    { name: "PNC Financial Services" },
    { name: "Capital One" },
    { name: "TD Bank" },
    { name: "HSBC" },
    { name: "Charles Schwab" },
    { name: "American Express" },
    { name: "BNY Mellon" },
    { name: "Truist Financial" },
    { name: "Fifth Third Bank" },
    { name: "Citizens Financial Group" },
    { name: "KeyBank" },
    { name: "Ally Financial" },
    { name: "Regions Financial" }
  ];
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
        <PaymentMethod icon="credit-card" title="Credit or Debit" selected={selected == 1} onClick={() => setSelected(1)} />
        <PaymentMethod icon="money-bill" title="Mobile Money" selected={selected == 2} onClick={() => setSelected(2)} />
        <PaymentMethod title="Bank Transfer" selected={selected == 3} type="FontAwesome" onClick={() => setSelected(3)} />
        <PaymentMethod icon="store" title="Pay in store" selected={selected == 4} onClick={() => setSelected(4)} />
        <Div className=" mb-[100px] mt-5 border-y border-[#F69F219E]">
          <SelectDropdown
            data={Banks}
            onSelect={(selectedItem, index) => {
              setSelectedBank(selectedItem)
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <Div>
                  <P>Select Bank</P>
                  <Div className=" flex-row justify-between">
                    <P className="text-slate-500">{selectedItem?selectedItem.name:"Select Prefered Bank"}</P>
                    <AntDesign name="down" size={24} color="gray" />
                  </Div>
                </Div>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <Div className=" p-5" key={index}>
                  <P>{item?.name}</P>
                </Div>
              );
            }}
            showsVerticalScrollIndicator={false}

          />
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
