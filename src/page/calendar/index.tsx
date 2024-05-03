import {useState} from 'react';
import {ImageBackground, Text, View, useColorScheme} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BBottomNavigation from '../../component/bottomNavigation';
import {colorTheme} from '../../component/color';
import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
import { defaultStyles } from '../../component/defaultStyles';

const CalendarScreen = () => {
  const insets = useSafeAreaInsets();
  const isDarkMode = useColorScheme() === 'dark';

  const [selected, setSelected] = useState(moment().format('DD/MM/YYYY'));

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../image/background.png')}
        style={{
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: colorTheme({isDarkMode, picColor: 'color'}),
          paddingTop: insets.top,
        }}>
        <Calendar
          onDayPress={day => {
            setSelected(
              moment(day.dateString, 'YYYY-MM-DD').format('DD/MM/YYYY'),
            );
          }}
          markedDates={{
            [moment(selected, 'DD/MM/YYYY').format('YYYY-MM-DD')]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: colorTheme({isDarkMode, picColor: 'blue'}),
            },
          }}
          style={{
            backgroundColor: colorTheme({
              isDarkMode,
              picColor: 'colorTransparant40',
            }),
            margin: 10,
            borderRadius: 10,
            padding: 5,
          }}
          theme={{
            monthTextColor: colorTheme({isDarkMode, picColor: '!color'}),
            calendarBackground: 'transparant',
            dayTextColor: colorTheme({isDarkMode, picColor: '!color'}),
            textDisabledColor: colorTheme({
              isDarkMode,
              picColor: '!colorTransparant40',
            }),
            textMonthFontWeight: '700',
            textSectionTitleColor: colorTheme({isDarkMode, picColor: '!color'}),
            selectedDotColor: colorTheme({isDarkMode, picColor: 'red'}),
          }}
        />
        <ScrollView>
          <View style={[defaultStyles.cardContainer, {backgroundColor: colorTheme({isDarkMode, picColor: 'colorTransparant40'})}]}>
            <Text style={{color: colorTheme({isDarkMode, picColor: '!color'})}}>{moment(selected, 'DD/MM/YYYY').format('dddd, DD MMM')}</Text>
          </View>
        </ScrollView>
        <BBottomNavigation />
      </ImageBackground>
    </View>
  );
};

export default CalendarScreen;
