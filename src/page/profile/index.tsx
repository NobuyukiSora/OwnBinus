import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import navigationAction from '../../navigation/navigationAction';
import {
    red,
  transparantBlack40,
  transparantBlack70,
  transparantWhite40,
  transparantWhite70,
  white,
} from '../../component/color';
import IcoBack from '../../image/icon/Ico-Back.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../../component/header';
import {Metrics} from '../../component/metrics';
import {dataProfile} from '../home/data';

const Profile = () => {
  const insets = useSafeAreaInsets();
  const isDarkMode = useColorScheme() === 'dark';
  const styleTheme = {
    color: isDarkMode ? '#000000' : '#ffffff',
    inverseColor: isDarkMode ? '#ffffff' : '#000000',
    color40: isDarkMode ? transparantBlack40 : transparantWhite40,
    color70: isDarkMode ? transparantBlack70 : transparantWhite70,
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../image/background.png')}
        style={{
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: styleTheme.color,
          paddingTop: insets.top,
        }}>
        <Header
          color={styleTheme.inverseColor}
          onPress={() => navigationAction.goBack()}
        />
        <ScrollView>
          <View style={{}}>
            <View
              style={{
                paddingLeft: Metrics.screenWidth * 0.18,
                alignItems: 'center',
              }}>
              <Image
                source={require('../../image/card.png')}
                style={{
                  resizeMode: 'contain',
                  width: Metrics.screenWidth * 0.5,
                  height: Metrics.screenWidth * 0.35,
                }}
              />
              <View
                style={{
                  backgroundColor: styleTheme.color40,
                  width: Metrics.screenWidth * 0.5,
                  borderRadius: 10,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: styleTheme.inverseColor,
                    fontWeight: '700',
                  }}>{`Hai, ${dataProfile.name}`}</Text>
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                marginLeft: Metrics.screenWidth * 0.1,
              }}>
              <Image
                source={require('../../image/profile.jpeg')}
                style={{
                  resizeMode: 'contain',
                  width: 150,
                  height: 150,
                  borderRadius: 100,
                }}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: styleTheme.color40,
              margin: 10,
              padding: 10,
              borderRadius: 10,
            }}>
            <Text style={{color: styleTheme.inverseColor}}>{'Payment'}</Text>
            <View
              style={{
                height: 1,
                backgroundColor: styleTheme.inverseColor,
                marginBottom: 5,
                marginTop: 2,
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={{color: styleTheme.inverseColor}}>
                  {'Already paid'}
                </Text>
                <Text
                  style={{
                    color: styleTheme.inverseColor,
                    fontSize: 20,
                    fontWeight: '700',
                  }}>{`${dataProfile.paid.toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                })}`}</Text>
              </View>
              <View style={{}}>
                <Text
                  style={{color: styleTheme.inverseColor, textAlign: 'right'}}>
                  {'Upcoming'}
                </Text>
                <Text
                  style={{color: styleTheme.inverseColor, textAlign: 'right', fontWeight: '700'}}>
                  {dataProfile.upcomingPaid.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}
                </Text>
                <Text
                  style={{color: red, textAlign: 'right'}}>
                  {'Unpaid'}
                </Text>
                <Text
                  style={{color: red, textAlign: 'right', fontWeight: '700'}}>
                  {dataProfile.unpaid.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Profile;
