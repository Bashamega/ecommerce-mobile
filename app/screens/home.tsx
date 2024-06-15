import { Menu } from "../components/Menu";
import { Div } from "../components/TailwindComponents";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Filter } from "../components/filter";
import { Gal } from "../components/gal";
import { Grid } from "../components/grid";
export function Home({ navigation }: { navigation: any }) {
    const insets = useSafeAreaInsets();
    return (
        <Div className="relative h-full w-screen" style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
        }}>                
            <Filter />

            <Div className="p-5">
                <Gal />
                <Grid navigate={navigation}/>
            </Div>
            <Menu active={1} navigation={navigation}/>
        </Div>
    )
}