import React from 'react';
import {colorThemeProps} from './props';

export const red = '#FF5C5C';
export const lightRed = '#FFC0C0';
export const darkRed = '#C72E2E';

export const blue = '#5CB1FF';
export const lightBlue = '#77A2C9';
export const darkBlue = '#0500FF';

export const orange = '#FFB052';
export const lightOrange = '#FFD9AC';
export const darkOrange = '#BF7A29';

export const yellow = '#FFDA57';
export const lightYellow = '#FFF0B9';
export const darkYellow = '#C6A42D';

export const green = '#60FF67';
export const lightGreen = '#92FF96';
export const darkGreen = '#27C42E';

export const cyan = '#67DBFF';
export const lightCyan = '#99E6FF';
export const darkCyan = '#309EC1';

export const purple = '#6066FF';
export const lightPurple = '#AEB1FF';
export const darkPurple = '#1B22BD';

export const pink = '#FC78FF';
export const lightPink = '#FDB1FF';
export const darkPink = '#A83EAA';

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
      return isDarkMode ? lightRed : darkRed;
    case 'blue':
      return isDarkMode ? lightBlue : darkBlue;
    case 'orange':
      return isDarkMode ? lightOrange : darkOrange;
    case 'yellow':
      return isDarkMode ? lightYellow : darkYellow;
    case 'green':
      return isDarkMode ? lightGreen : darkGreen;
    case 'cyan':
      return isDarkMode ? lightCyan : darkCyan;
    case 'purple':
      return isDarkMode ? lightPurple : darkPurple;
    case 'pink':
      return isDarkMode ? lightPink : darkPink;
    default:
      return isDarkMode ? black : white;
  }
};
