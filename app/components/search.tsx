import { Text, TextInput } from "react-native";
import { Div, Input } from "./TailwindComponents";

export function Search(){
    return(
        <Div className=" flex-row justify-between w-4/5 border-[#F69F21] border p-2 rounded-lg">
            <Input placeholder="search" className="b-1 w-2/4"/>
            <Div className="w-1 h-full bg-[#DCDFE3]"/>
            <Text>Icon</Text>
        </Div>
    )
}