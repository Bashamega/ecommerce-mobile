import { Menu } from "../components/Menu";
import { Div } from "../components/TailwindComponents";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export function Home() {
    const insets = useSafeAreaInsets();
    return (
        <Div className={` relative h-full w-screen`} style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <Menu />
        </Div>
    )
}