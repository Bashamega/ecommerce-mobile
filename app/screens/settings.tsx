import { Nav } from "../components/Nav";
import { AntiIcon, Div, FontisIcon, Icon, Img, P, Scroll } from "../components/TailwindComponents";
import { FontAwesome, EvilIcons, Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from "react-native-safe-area-context";
export function Settings({ navigation }: { navigation: any }) {
    const insets = useSafeAreaInsets();
    return (
        <Div className="relative h-full w-screen bg-[#FFFBF5] items-center" style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
        }}>
            <Div className=" bg-[#F69F21] p-10 w-full pb-[60px]">
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
            <Scroll className=" bg-white w-[80%] rounded-2xl mt-[-50px] p-5 gap-5">
                <Div className=" flex-row items-center relative border-b-2 border-[#F69F21CF]">
                    <Div className=" w-5 h-5 rounded-full flex items-center justify-center bg-[#F69F211F]">
                        <AntiIcon name="inbox" />
                    </Div>
                    <P className="text-slate-500 ml-2">My orders</P>
                    <FontisIcon className=" absolute right-0" name="angle-right" size={10} color="darkgrey" />
                </Div>
                <Div className=" flex-row items-center relative border-b-2 border-[#F69F21CF]">
                    <Div className=" w-5 h-5 rounded-full flex items-center justify-center bg-[#F69F211F]">
                        <Icon name="notifications" />
                    </Div>
                    <P className="text-slate-500 ml-2">Notification</P>
                    <P className=" p-1 px-2 rounded-full text-center bg-[#F69F211F] text-[#F69F21CF] absolute right-2 text-[8px]">3</P>
                    <FontisIcon className=" absolute right-0" name="angle-right" size={10} color="darkgrey" />
                </Div>
                <Div className=" flex-row items-center relative border-b-2 border-[#F69F21CF]">
                    <Div className=" w-5 h-5 rounded-full flex items-center justify-center bg-[#F69F211F]">
                        <Feather name="package" />
                    </Div>
                    <P className="text-slate-500 ml-2">Manage Address</P>
                    <FontisIcon className=" absolute right-0" name="angle-right" size={10} color="darkgrey" />
                </Div>
                <Div className=" flex-row items-center relative border-b-2 border-[#F69F21CF]">
                    <Div className=" w-5 h-5 rounded-full flex items-center justify-center bg-[#F69F211F]">
                        <AntiIcon name="wallet" />
                    </Div>
                    <P className="text-slate-500 ml-2">Mange Payment</P>
                    <FontisIcon className=" absolute right-0" name="angle-right" size={10} color="darkgrey" />
                </Div>
                <Div className=" flex-row items-center relative border-b-2 border-[#F69F21CF]">
                    <Div className=" w-5 h-5 rounded-full flex items-center justify-center bg-[#F69F211F]">
                        <FontAwesome name="language" />
                    </Div>
                    <P className="text-slate-500 ml-2">Change Language</P>
                    <P className="p-1  rounded-full text-center bg-[#F69F211F] text-[#755E5E] absolute right-2 text-[8px]">English</P>
                    <FontisIcon className=" absolute right-0" name="angle-right" size={10} color="darkgrey" />
                </Div>
                <Div className=" flex-row items-center relative border-b-2 border-[#F69F21CF]">
                    <Div className=" w-5 h-5 rounded-full flex items-center justify-center bg-[#F69F211F]">
                        <Feather name="help-circle" />
                    </Div>
                    <P className="text-slate-500 ml-2">Help</P>
                    <FontisIcon className=" absolute right-0" name="angle-right" size={10} color="darkgrey" />
                </Div>
                <Div className=" flex-row items-center relative border-b-2 border-[#F69F21CF]">
                    <Div className=" w-5 h-5 rounded-full flex items-center justify-center bg-[#F69F211F]">
                        <AntiIcon name="sharealt" />
                    </Div>
                    <P className="text-slate-500 ml-2">Referal</P>
                </Div>
                <Div className=" flex-row items-center relative border-b-2 border-[#F69F21CF]">
                    <Div className=" w-5 h-5 rounded-full flex items-center justify-center bg-[#F69F211F]">
                        <AntiIcon name="staro" />
                    </Div>
                    <P className="text-slate-500 ml-2">Rate App</P>
                </Div>
                <Div className=" flex-row items-center relative border-b-2 border-[#F69F21CF]">
                    <Div className=" w-5 h-5 rounded-full flex items-center justify-center bg-[#F69F211F]">
                        <AntiIcon name="book" />
                    </Div>
                    <P className="text-slate-500 ml-2">Term of Use</P>
                </Div>
                <Div className=" flex-row items-center relative border-b-2 border-[#F69F21CF]">
                    <Div className=" w-5 h-5 rounded-full flex items-center justify-center bg-[#F69F211F]">
                        <AntiIcon name="book" />
                    </Div>
                    <P className="text-slate-500 ml-2">Privacy Policy</P>
                </Div>
                <P className="text-[#F69F21] text-center">Logout</P>
            </Scroll>

        </Div>
    )
}