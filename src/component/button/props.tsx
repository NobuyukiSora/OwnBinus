import { ColorValue, TextStyle, TouchableOpacityProps } from "react-native"

export interface BButtonProps  extends TouchableOpacityProps{
    title?: string
    backgroundColor?: ColorValue
    color?: ColorValue
    style?: TextStyle
    styleButton?: TextStyle
    styleText?: TextStyle
}