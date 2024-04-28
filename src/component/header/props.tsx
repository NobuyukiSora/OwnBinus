import { ColorValue, TextStyle, TouchableOpacityProps } from "react-native";

export interface HeaderProps  extends TouchableOpacityProps{
    title?: String
    color: ColorValue
    iconContainerStyle?: TextStyle
    textStyle?: TextStyle
}