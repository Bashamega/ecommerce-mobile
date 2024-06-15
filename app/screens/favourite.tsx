import { Menu } from "../components/Menu";
import { Nav } from "../components/Nav";
import { Div, Scroll } from "../components/TailwindComponents";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Item } from "../components/Item";
import { Button } from "../components/Btn";
export function Favourite({ navigation }: { navigation: any }) {
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
        <Nav text="Favourite" navigation={navigation} />
        <Div className=" p-10 ">
          <Item disabled={false} />
          <Item disabled={false} />
          <Item disabled={true} />
          <Item disabled={false} />
          <Button
            title="Order Now"
            onPress={() => {
              navigation?.navigate("cart");
            }}
          />
        </Div>
      </Scroll>
      <Menu navigation={navigation} active={2} />
    </Div>
  );
}
