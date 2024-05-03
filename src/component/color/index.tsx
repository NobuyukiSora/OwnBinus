import React from 'react';
import {colorThemeProps} from './props';

export const red = '#FF5959';
export const lightRed = '#D35050';
export const darkRed = '#B00000'

export const blue = '#5CB1FF';
export const lightBlue = '#77A2C9';
export const darkBlue = '#026ACA';

export const yellow = '#FFEE92';
export const green = '#AAFFB8';
export const orange = '#FFC46D';

export const white = '#ffffff';
export const black = '#000000';

export const transparantBlack70 = 'rgba(0, 0, 0, 0.70)';
export const transparantBlack40 = 'rgba(0, 0, 0, 0.40)';
export const transparantWhite70 = 'rgba(207, 207, 207, 0.7)';
export const transparantWhite40 = 'rgba(207, 207, 207, 0.4)';

// Now define your colorTheme function
export const colorTheme = (props: colorThemeProps): string => {
  const {isDarkMode, picColor = 'color'} = props;

  switch (picColor) {
    case 'color':
      return isDarkMode ? black : white;
    case 'colorTransparant40':
      return isDarkMode ? transparantBlack40 : transparantWhite40;
    case 'colorTransparant70':
      return isDarkMode ? transparantBlack70 : transparantWhite70;
    case '!color':
      return isDarkMode ? white : black;
    case '!colorTransparant40':
      return isDarkMode ? transparantWhite40 : transparantBlack40;
    case 'red':
      return isDarkMode ? red : lightRed;
    case 'blue':
      return isDarkMode ? blue : darkBlue;
    default:
      return isDarkMode ? black : white;
  }
};
