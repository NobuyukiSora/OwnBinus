export interface colorThemeProps {
  isDarkMode: boolean;
  picColor?:
    | 'color'
    | 'colorTransparant40'
    | 'colorTransparant70'
    | '!color'
    | '!colorTransparant40'
    | 'red'
    | 'blue';
}
