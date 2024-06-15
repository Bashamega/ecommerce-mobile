import { Text } from "react-native";
import { Div, P } from "./TailwindComponents";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
export function Menu({active, navigation}:{active:number, navigation:any}){
    return(
        <Div className="p-5 bg-[#F69F21] absolute left-0 bottom-0 w-full rounded-t-2xl flex-row justify-evenly">
            <Feather name="home" size={30} color={active == 1?"white":"black"} onPress={()=>{navigation?.navigate("home")}}/>
            <Feather name="heart" size={30} color={active == 2?"white":"black"} onPress={()=>{navigation?.navigate("wish")}}/>
            <Ionicons name="extension-puzzle-outline" size={30} color={active == 4?"white":"black"} onPress={()=>{navigation?.navigate("settings")}}/>
            <Div className="relative">
                <Ionicons name="cart-outline" size={30} color={active == 4?"white":"black"} onPress={()=>{navigation?.navigate("cart")}}/>
                <P className=" bg-white rounded-full absolute top-0 right-[-5px] text-center flex-row items-center justify-center font-[1px] w-5 h-5">4</P>
            </Div>
            <Feather name="menu" size={24} color={active == 4?"white":"black"} />
        </Div>
    )
}
