import { Menu } from "../components/Menu";
import { Nav } from "../components/Nav";
import { Div, Icon, P, AntiIcon, Input } from "../components/TailwindComponents";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../components/Btn";
export function Payment({ navigation }: { navigation: any }) {
    const insets = useSafeAreaInsets();
    return (
        <Div className="relative h-full w-screen" style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
        }}>
            <Nav text="Payment" navigation={navigation} />
            <Div className="p-5 relative">
                <Icon name="checkmark-circle" size={30} className=" absolute right-[10px]" color="#F69F21" />
                <Div className=" h-[200px] bg-[#C4C4C4] rounded-2xl mt-[15px] mb-5" />
                <Div className=" gap-5">
                    <Div className=" flex-row justify-between bg-[#f0dfc6] p-2">
                        <P>Add New Card</P>
                        <AntiIcon name="up" size={24} color="gray" />
                    </Div>
                    <Input placeholder="Name On Card" />
                    <Input placeholder="Card Serial Number" />
                    <Div className=" flex-row justify-between">
                        <Input placeholder="Expiring date" className="w-1/2" />
                        <Input placeholder="CCV" className="w-1/2" />
                    </Div>
                    <Div>
                        <Button title="Add card" onPress={()=>{navigation?.navigate("track")}}/>
                    </Div>
                    <Div className=" flex-row justify-between bg-[#f0dfc6] p-2">
                        <P>Saved Card</P>

                        <AntiIcon name="down" size={24} color="gray" />
                    </Div>
                </Div>
            </Div>
        </Div>
    )
}