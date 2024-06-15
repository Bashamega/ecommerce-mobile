import { Div, Icon, P } from "./TailwindComponents"
export function Nav({text, navigation}:{text:string, navigation:any}){
    return(
        <Div className=" flex-row justify-center">
            <Icon className=" absolute left-2" onPress={()=>{navigation?.navigate("home")}} name="chevron-back-outline" size={20}/>
            <P>{text}</P>
        </Div>
    )
}