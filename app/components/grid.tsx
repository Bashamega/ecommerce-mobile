import { Div, Scroll } from "./TailwindComponents";
import { Card } from "./card";

export function Grid() {
    return (
        <Scroll className="flex gap-5 my-5">
            {Array.from({ length: 50 }).map((_, index) => (
                <Div className=" flex-row w-full gap-1 justify-evenly" key={index}>
                    <Card id={index+1}/>
                    <Card id={index + 2}/>
                </Div>
            ))}
        </Scroll>
    );
}
