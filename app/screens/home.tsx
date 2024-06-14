import { Menu } from "../components/Menu";
import { Div } from "../components/TailwindComponents";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Filter } from "../components/filter";
export function Home() {
    const insets = useSafeAreaInsets();
    return (
        <Div className="relative h-full w-screen" style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
        }}>
            <Div className="p-5">
                <Filter/>
            </Div>
            <Menu />
        </Div>
    )
}