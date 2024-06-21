import React from "react";
import { Div, P } from "./TailwindComponents";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
type PaymentMethodProps = {
  selected: boolean;
  icon?: string; 
  title: string;
  type?: 'FontAwesome' | 'FontAwesome5';
};

export function PaymentMethod({ selected, icon, title, type }: PaymentMethodProps) {
  return (
    <Div className={"flex-row mb-5 p-5 border rounded-2xl " + (selected ? "border-[#F69F21]" : "border-[grey]")}>
      {type === "FontAwesome" ? (
        <FontAwesome name={"bank"} size={30} color={selected ? "#F69F21" : "grey"} />
      ) : (
        <FontAwesome5 name={icon} size={30} color={selected ? "#F69F21" : "grey"} />
      )}
      <P className="font-bold ml-2">{title}</P>
    </Div>
  );
}
