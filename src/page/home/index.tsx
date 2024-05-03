import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BBottomNavigation from '../../component/bottomNavigation';
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
  yellow,
} from '../../component/color';
import {Metrics} from '../../component/metrics';
import Clock from '../../image/icon/Ico-Clock.svg';
import {announcement, dataProfile, ongoingClass, scoreData, upcomingClass} from './data';
import moment from 'moment';
import navigationAction from '../../navigation/navigationAction';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const isDarkMode = useColorScheme() === 'dark';
  const styleTheme = {
    backgroundColor: isDarkMode ? black : white,
    textColor: isDarkMode ? white : black,
    cardColor: isDarkMode ? transparantBlack40 : transparantWhite40,
    barColor: isDarkMode ? transparantBlack70 : transparantWhite70,
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../image/background.png')}
        style={{
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: styleTheme.backgroundColor,
          paddingTop: insets.top,
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* PROFILE */}
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: styleTheme.cardColor,
              margin: 10,
              padding: 10,
              borderRadius: 10,
              justifyContent: 'space-between',
            }}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../image/profile.jpeg')}
                style={{
                  resizeMode: 'contain',
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                }}
              />
              <Text style={{color: styleTheme.textColor}}>{`HI, ${dataProfile.name}`}</Text>
            </View>
            <View>
              <FlatList
                data={scoreData}
                numColumns={2}
                keyExtractor={item => item.score}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{marginBottom: 10}}
                renderItem={({item}) => {
                  return (
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: Metrics.screenWidth / 3.5,
                        margin: 5,
                      }}>
                      <Text style={{fontSize: 15, color: item.color}}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: 25,
                          color: item.color,
                          fontWeight: '700',
                        }}>
                        {item.score}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
            <TouchableOpacity
            onPress={() => navigationAction.navigate('ProfileScreen', {})}
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                padding: 5,
                margin: 5,
              }}>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '700',
                  color: styleTheme.textColor,
                }}>
                {'More Detail'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* ONGOING */}
          <View
            style={{
              backgroundColor: styleTheme.cardColor,
              margin: 10,
              padding: 10,
              borderRadius: 10,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '700',
                  color: styleTheme.textColor,
                  marginBottom: 10,
                }}>
                {'Ongoing'}
              </Text>
            </View>
            <View>
              <FlatList
                data={ongoingClass}
                keyExtractor={item => item.course}
                renderItem={({item}) => {
                  return (
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
                              color: styleTheme.textColor,
                            }}>
                            {item.class}
                          </Text>
                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: '700',
                              color: styleTheme.textColor,
                            }}>
                            {item.course}
                          </Text>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: '700',
                              color: styleTheme.textColor,
                            }}>{`\u2022 ${item.session}`}</Text>
                        </View>
                        <View style={{justifyContent: 'center'}}>
                          {item.schedule === 'now' ? (
                            <TouchableOpacity>
                              <View
                                style={{
                                  backgroundColor: red,
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
                            <Text
                              style={{
                                fontSize: 16,
                                fontWeight: '700',
                                color: styleTheme.textColor,
                              }}>
                              {item.schedule}
                            </Text>
                          )}
                        </View>
                      </View>
                      <View
                        style={{
                          height: 1,
                          backgroundColor: styleTheme.barColor,
                          marginBottom: 5,
                          marginTop: 2,
                        }}
                      />
                    </View>
                  );
                }}
              />
            </View>
          </View>

          {/* UPCOMING */}
          <View
            style={{
              backgroundColor: styleTheme.cardColor,
              margin: 10,
              padding: 10,
              borderRadius: 10,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '700',
                  color: styleTheme.textColor,
                  marginBottom: 10,
                }}>
                {'Upcoming'}
              </Text>
            </View>
            <View>
              <FlatList
                data={upcomingClass}
                keyExtractor={item => item.course}
                renderItem={({item}) => {
                  return (
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{gap: 2}}>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: '700',
                              color: styleTheme.textColor,
                            }}>
                            {item.type}
                          </Text>
                          <Text
                            style={{
                              fontSize: 18,
                              fontWeight: '700',
                              color: styleTheme.textColor,
                            }}>
                            {item.course}
                          </Text>
                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: '700',
                              color: styleTheme.textColor,
                            }}>
                            {item.class}
                          </Text>
                        </View>
                        <View style={{justifyContent: 'center'}}>
                          {item.schedule === 'now' ? (
                            <TouchableOpacity>
                              <View
                                style={{
                                  backgroundColor: red,
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
                            <View style={{right: 0}}>
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
                                  fill={styleTheme.textColor}
                                />
                                <Text
                                  style={{
                                    textAlign: 'right',
                                    fontSize: 16,
                                    fontWeight: '700',
                                    color: styleTheme.textColor,
                                  }}>
                                  {item.schedule}
                                </Text>
                              </View>
                              <Text
                                style={{
                                  textAlign: 'right',
                                  fontSize: 16,
                                  fontWeight: '700',
                                  color: styleTheme.textColor,
                                }}>
                                {item.time}
                              </Text>
                            </View>
                          )}
                        </View>
                      </View>
                      <View
                        style={{
                          height: 1,
                          backgroundColor: styleTheme.barColor,
                          marginBottom: 5,
                          marginTop: 2,
                        }}
                      />
                    </View>
                  );
                }}
              />
            </View>
          </View>

          {/* UPCOMING */}
          <View
            style={{
              backgroundColor: styleTheme.cardColor,
              margin: 10,
              padding: 10,
              borderRadius: 10,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '700',
                  color: styleTheme.textColor,
                  marginBottom: 10,
                }}>
                {'Announcement'}
              </Text>
            </View>
            <View>
              <FlatList
                data={announcement}
                keyExtractor={item => item.title}
                renderItem={({item}) => {
                  const timeCount = moment(item.date, 'DD/MM/YYYY').fromNow();

                  return (
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{gap: 2}}>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: '700',
                              color: styleTheme.textColor,
                            }}>
                            {item.from}
                          </Text>
                          <Text
                            style={{
                              fontSize: 18,
                              fontWeight: '700',
                              color: styleTheme.textColor,
                            }}>
                            {item.title}
                          </Text>
                          {!!item.miniDesc ? (
                            <Text
                              style={{
                                fontSize: 13,
                                fontWeight: '700',
                                color: styleTheme.textColor,
                              }}>
                              {item.miniDesc}
                            </Text>
                          ) : null}
                        </View>
                        <View style={{justifyContent: 'center'}}>
                          <Text
                            style={{
                              textAlign: 'right',
                              fontSize: 16,
                              fontWeight: '700',
                              color: styleTheme.textColor,
                            }}>
                            {timeCount
                              .replace(' days ago', 'd')
                              .replace('a month ago', '1m')
                              .replace(' months ago', 'm')
                              .replace('a year ago', '1y')
                              .replace(' years ago', 'y')}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          height: 1,
                          backgroundColor: styleTheme.barColor,
                          marginBottom: 5,
                          marginTop: 2,
                        }}
                      />
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

export default HomeScreen;
