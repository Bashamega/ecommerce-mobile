import { Div, Scroll } from "./TailwindComponents";
import { Card } from "./Card";

export function Grid({navigation}:{navigation:any}) {
    return (
        <Div className=" gap-5 my-5">
            {Array.from({ length: 50 }).map((_, index) => (
                <Div className=" flex-row w-full gap-1 justify-evenly" key={index}>
                    <Card id={index+1} navigation={navigation}/>
                    <Card id={index + 2} navigation={navigation}/>
                </Div>
            ))}
        </Div>
    );
}
