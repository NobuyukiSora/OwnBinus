import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {blue, transparantBlack} from '../color';
import Home from '../../image/icon/Ico-Home.svg';
import Schadule from '../../image/icon/Ico-Schadule.svg';
import Course from '../../image/icon/Ico-Course.svg';
import Health from '../../image/icon/Ico-Health.svg';
import Forum from '../../image/icon/Ico-Forum.svg';
import {Metrics} from '../metrics';

const BBottomNavigation = () => {
  return (
    <View style={Styles.bottomNavigation}>
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
  bottomNavigation: {
    backgroundColor: transparantBlack,
  },
  buttonsContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 50,
    width: Metrics.screenWidth,
    alignItems: 'center'
  },
});

export default BBottomNavigation;
