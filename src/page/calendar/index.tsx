import {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BBottomNavigation from '../../component/bottomNavigation';
import {colorTheme, red, white} from '../../component/color';
import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
import {defaultStyles} from '../../component/defaultStyles';
import {scheduleData} from '../home/data';
import Clock from '../../image/icon/Ico-Clock.svg';

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
            arrowColor: colorTheme({isDarkMode, picColor: 'blue'})
          }}
        />
        <ScrollView>
          <View
            style={[
              defaultStyles.cardContainer,
              {
                backgroundColor: colorTheme({
                  isDarkMode,
                  picColor: 'colorTransparant40',
                }),
              },
            ]}>
            <Text
              style={{
                color: colorTheme({isDarkMode, picColor: '!color'}),
                marginBottom: 10,
              }}>
              {moment(selected, 'DD/MM/YYYY').format('dddd, DD MMM')}
            </Text>
            <View>
              <FlatList
                data={scheduleData}
                keyExtractor={item => item.course}
                renderItem={({item}) => {
                    const scheduleCourse = moment(item.schedule, 'DD/MM/YYYY');
                    const selectedDate = moment(selected, 'DD/MM/YYYY');
                    const today = moment();
                    
                    const daysDifference = scheduleCourse.diff(today, 'days');
                    const dateMatch = scheduleCourse.isSame(selectedDate, 'days');

                  return (
                    <View>
                      {dateMatch ? (
                        <View>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>
                            <View style={{gap: 2}}>
                              <Text
                                style={{
                                  fontSize: 18,
                                  fontWeight: '700',
                                  color: colorTheme({
                                    isDarkMode,
                                    picColor: '!color',
                                  }),
                                }}>
                                {item.class}
                              </Text>
                              <Text
                                style={{
                                  fontSize: 13,
                                  fontWeight: '700',
                                  color: colorTheme({
                                    isDarkMode,
                                    picColor: '!color',
                                  }),
                                }}>
                                {item.course}
                              </Text>
                              <Text
                                style={{
                                  fontSize: 16,
                                  fontWeight: '700',
                                  color: colorTheme({
                                    isDarkMode,
                                    picColor: '!color',
                                  }),
                                }}>{`\u2022 ${item.session}`}</Text>
                            </View>
                            <View style={{justifyContent: 'center'}}>
                              {item.schedule === 'now' ? (
                                <TouchableOpacity>
                                  <View
                                    style={{
                                      backgroundColor: colorTheme({
                                        isDarkMode,
                                        picColor: 'red',
                                      }),
                                      padding: 2,
                                      borderRadius: 5,
                                    }}>
                                    <Text
                                      style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        color: white,
                                      }}>
                                      {'Live Now'}
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                              ) : (
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                  }}>
                                  <Clock
                                    height={15}
                                    width={15}
                                    style={{marginRight: 3}}
                                    fill={colorTheme({
                                      isDarkMode,
                                      picColor: '!color',
                                    })}
                                  />
                                  <Text
                                    style={{
                                      fontSize: 16,
                                      fontWeight: '700',
                                      color: colorTheme({
                                        isDarkMode,
                                        picColor: '!color',
                                      }),
                                    }}>
                                    {daysDifference + ` day`}
                                  </Text>
                                </View>
                              )}
                            </View>
                          </View>
                          <View
                            style={{
                              height: 1,
                              backgroundColor: colorTheme({
                                isDarkMode,
                                picColor: '!color',
                              }),
                              marginBottom: 5,
                              marginTop: 2,
                            }}
                          />
                        </View>
                      ) : null}
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
        <BBottomNavigation />
      </ImageBackground>
    </View>
  );
};

export default CalendarScreen;
