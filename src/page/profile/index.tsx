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
  transparantBlack40,
  transparantBlack70,
  white,
} from '../../component/color';
import IcoBack from '../../image/icon/Ico-Back.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../../component/header';
import {Metrics} from '../../component/metrics';

const Profile = () => {
  const insets = useSafeAreaInsets();
  const isDarkMode = useColorScheme() === 'dark';
  const styleTheme = {
    color: isDarkMode ? '#000000' : '#ffffff',
    inverseColor: isDarkMode ? '#ffffff' : '#000000',
    color40: isDarkMode ? transparantBlack40 : transparantBlack40,
    color70: isDarkMode ? transparantBlack70 : transparantBlack70,
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
        <Header color={styleTheme.inverseColor} />
        <ScrollView>

        <View>
          <View>
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
          <View>
            <Image
              source={require('../../image/card.png')}
              style={{
                resizeMode: 'contain',
                width: Metrics.screenWidth * 0.5,
              }}
            />
            <Text>{'Halo'}</Text>
          </View>
        </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Profile;
