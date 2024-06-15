import { Menu } from "../components/Menu";
import { Div, Scroll } from "../components/TailwindComponents";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Filter } from "../components/Filter";
import { Gal } from "../components/Gallery";
import { Grid } from "../components/Grid";
export function Home({ navigation }: { navigation: any }) {
  const insets = useSafeAreaInsets();
  return (
    <Div
      className="relative h-full w-screen"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <Filter />

      <Scroll className="p-5 flex-1 overflow-hidden">
        <Gal />
        <Grid navigation={navigation} />
      </Scroll>
      <Menu active={1} navigation={navigation} />
    </Div>
  );
}
