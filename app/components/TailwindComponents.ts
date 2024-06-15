import { styled } from "nativewind";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Ionicons,
  AntDesign,
  FontAwesome5,
  Fontisto,
} from "@expo/vector-icons";
export const Div = styled(View);
export const Input = styled(TextInput);
export const P = styled(Text);
export const Scroll = styled(ScrollView);
export const Img = styled(Image);
export const Icon = styled(Ionicons);
export const Touch = styled(TouchableOpacity);
export const AntiIcon = styled(AntDesign);
export const FontIcon = styled<{ name: string; size: number; color: string }>(
  FontAwesome5,
);
export const FontisIcon = styled(Fontisto);
