import { Text } from "react-native";
import { Div } from "./TailwindComponents";

export function Menu(){
    return(
        <Div className="p-5 bg-[#F69F21] absolute left-0 bottom-0 w-full rounded-t-2xl flex-row justify-evenly">
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
            <Text>5</Text>
        </Div>
    )
}
