import { ImageBackground, View, useColorScheme } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
    black,
    green,
    orange,
    red,
    transparantBlack40,
    transparantBlack70,
    transparantWhite40,
    transparantWhite70,
    white,
  } from '../../component/color';

const QRScreen = () => {
    const insets = useSafeAreaInsets();
  const isDarkMode = useColorScheme() === 'dark';
  const styleTheme = {
    color: isDarkMode ? black : white,
    inverseColor: isDarkMode ? white : black,
    color40: isDarkMode ? transparantBlack40 : transparantWhite40,
    color70: isDarkMode ? transparantBlack70 : transparantWhite70,
  };

    return(
        <View style={{flex:1}}>
            <ImageBackground
        source={require('../../image/background.png')}
        style={{
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: styleTheme.color,
          paddingTop: insets.top,
        }}>

        </ImageBackground>

        </View>
    )
}

export default QRScreen