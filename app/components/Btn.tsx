import { Touch, P } from "./TailwindComponents";

export function Button({ onPress, title }: { onPress: () => void, title: string }) {
    return (
        <Touch onPress={onPress} className="bg-[#F69F21] p-3 rounded-lg">
            <P className="text-white text-center font-bold">{title}</P>
        </Touch>
    );
}
