import { StyleSheet, TouchableOpacity, View, useColorScheme } from 'react-native';
import Course from '../../image/icon/Ico-Course.svg';
import Forum from '../../image/icon/Ico-Forum.svg';
import Health from '../../image/icon/Ico-Health.svg';
import Home from '../../image/icon/Ico-Home.svg';
import Schadule from '../../image/icon/Ico-Schadule.svg';
import { transparantBlack70, transparantWhite70 } from '../color';
import { Metrics } from '../metrics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BBottomNavigation = () => {
  const insets = useSafeAreaInsets()
  const isDarkMode = useColorScheme() === 'dark';
    const styleTheme = {
        backgroundColor: isDarkMode ? '#000000' : '#ffffff',
        navigationBarColor: isDarkMode ? transparantBlack70 : transparantWhite70,
      };
  return (
    <View style={{backgroundColor: styleTheme.navigationBarColor, paddingBottom: insets.bottom/2}}>
      <View style={Styles.buttonsContainer}>
        <TouchableOpacity>
          <Course height={20} width={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Forum height={20} width={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Home height={20} width={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Schadule height={20} width={20} />
        </TouchableOpacity>
        <TouchableOpacity>
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
