import { Nav } from "../components/Nav";
import { Div, Img, P } from "../components/TailwindComponents";
import { FontAwesome, EvilIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from "react-native-safe-area-context";
export function Settings({ navigation }: { navigation: any }) {
    const insets = useSafeAreaInsets();
    return (
        <Div className="relative h-full w-screen bg-[#FFFBF5]" style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
        }}>
            <Div className=" bg-[#F69F21] p-10">
                <Nav text="Settings" navigation={navigation} light={true} />
                <Div className=" bg-white p-1 rounded-full w-[50px] ml-[80%]">
                    <FontAwesome name="moon-o" size={24} color="#F69F21" />
                </Div>
                <Div className=" flex gap-2 flex-row items-center">
                    <Img source={require("../../assets/photo.jpeg")} className=" border border-white rounded-full w-20 h-20 " />
                    <Div className="w-2/5">
                        <P className=" text-white w-full">Cameron Willamson</P>
                        <P className="text-white text-[8px]">View Profile</P>
                    </Div>
                    <Div className="  absolute right-0">
                        <EvilIcons name="pencil" size={24} color="white" />
                    </Div>
                </Div>
            </Div>

        </Div>
    )
}