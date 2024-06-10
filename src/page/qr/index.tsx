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
import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera";
import { useIsFocused } from "@react-navigation/native";

const QRScreen = () => {
    const insets = useSafeAreaInsets();
  const isDarkMode = useColorScheme() === 'dark';
  const styleTheme = {
    color: isDarkMode ? black : white,
    inverseColor: isDarkMode ? white : black,
    color40: isDarkMode ? transparantBlack40 : transparantWhite40,
    color70: isDarkMode ? transparantBlack70 : transparantWhite70,
  };

  // open back camera
  const device = useCameraDevice('back')

  // run the camera while focus in page
  const isFocused = useIsFocused()


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
          
        <Camera
        style={{}}
        device={device}
        isActive={true}/>
        </ImageBackground>

        </View>
    )
}

// const device = useCameraDevice('back')
//   const { hasPermission } = useCameraPermission()

//   if (!hasPermission) return <PermissionsPage />
//   if (device == null) return <NoCameraDeviceError />
//   return (
//     <Camera
//       style={StyleSheet.absoluteFill}
//       device={device}
//       isActive={true}
//     />
//   )

export default QRScreen