import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import BBottomNavigation from '../../component/bottomNavigation';
import BButton from '../../component/button';
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
import navigationAction from '../../navigation/navigationAction';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const scoreData = [
  {title: 'GPA', score: '3.00', color: yellow},
  {title: 'SAT', score: '219', color: green},
  {title: 'ComServ', score: '13', color: orange},
];

const ongoingClass = [
  {
    course: 'Web Design',
    class: 'LA01 - LEC',
    session: 'HTML introduction',
    schedule: '-3d 13h',
  },
  {
    course: 'District Matematic',
    class: 'LA02 - LEC',
    session: 'Geometry',
    schedule: '5d 13h',
  },
  {
    course: 'Basic Programing',
    class: 'LA02 - LEC',
    session: 'C++',
    schedule: 'now',
  },
];

const Home = () => {
  const insets = useSafeAreaInsets();
  const isDarkMode = useColorScheme() === 'dark';
  const styleTheme = {
    backgroundColor: isDarkMode ? '#000000' : '#ffffff',
    textColor: isDarkMode ? '#ffffff' : '#000000',
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
        <ScrollView>
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
              <Text style={{color: styleTheme.textColor}}>{'HI'}</Text>
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
                                <View style={{backgroundColor: red, padding: 2, borderRadius: 5}}>
                                    <Text style={{
                                fontSize: 16,
                                fontWeight: '500',
                                color: white
                              }}>{'Live Now'}</Text>
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

          {/* <BButton
            title="Button"
            onPress={() => navigationAction.navigate('Profile', {})}></BButton> */}
        </ScrollView>
        <BBottomNavigation />
      </ImageBackground>
    </View>
  );
};

export default Home;
