import { StyleSheet, TouchableOpacity, View, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Course from '../../image/icon/Ico-Course.svg';
import Forum from '../../image/icon/Ico-Forum.svg';
import Health from '../../image/icon/Ico-Health.svg';
import Home from '../../image/icon/Ico-Home.svg';
import Schadule from '../../image/icon/Ico-Schadule.svg';
import navigationAction from '../../navigation/navigationAction';
import { colorTheme } from '../color';
import { Metrics } from '../metrics';

const BBottomNavigation = () => {
  const insets = useSafeAreaInsets()
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={{backgroundColor: colorTheme({isDarkMode, picColor: 'colorTransparant70'}), paddingBottom: insets.bottom/2}}>
      <View style={Styles.buttonsContainer}>
        <TouchableOpacity>
          <Course height={20} width={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Forum height={20} width={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigationAction.resetNavigation('HomeScreen', {})}>
          <Home height={20} width={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigationAction.resetNavigation('CalendarScreen', {})}>
          <Schadule height={20} width={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigationAction.resetNavigation('QRScreen', {})}>
          <Health height={20} width={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  buttonsContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 50,
    width: Metrics.screenWidth,
    alignItems: 'center'
  },
});

export default BBottomNavigation;
