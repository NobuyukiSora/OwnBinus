import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../page/home';
import Profile from '../../page/profile';
import {NavigationContainer} from '@react-navigation/native';
import navigationAction from '../navigationAction';
import {useColorScheme} from 'react-native';
import CalendarScreen from '../../page/calendar';
import HomeScreen from '../../page/home';
import ProfileScreen from '../../page/profile';
import QRScreen from '../../page/qr';

const Stack = createStackNavigator();

export function StackNavigation() {
  const isDarkMode = useColorScheme() === 'dark';

  const style = {
    backgroundColor: isDarkMode ? '#000000' : '#ffffff',
    textColor: isDarkMode ? '#ffffff' : '#000000',
    notificationColor: isDarkMode ? '#000000' : '#ffffff',
  };
  return (
    <NavigationContainer
      ref={navigationAction.navigationRef}
      theme={{
        dark: true,
        colors: {
          primary: '',
          card: '',
          border: '',
          notification: style.notificationColor,
          text: style.textColor,
          background: style.backgroundColor,
        },

      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="QRScreen" component={QRScreen} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
