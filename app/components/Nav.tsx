import { Div, Icon, P } from "./TailwindComponents";
export function Nav({
  text,
  navigation,
  light,
}: {
  text: string;
  navigation: any;
  light?: boolean;
}) {
  return (
    <Div className=" flex-row justify-center">
      <Icon
        className=" absolute left-2"
        color={light ? "white" : "black"}
        onPress={() => {
          navigation?.navigate("home");
        }}
        name="chevron-back-outline"
        size={20}
      />
      <P className={light ? "text-white" : "text-black"}>{text}</P>
    </Div>
  );
}
