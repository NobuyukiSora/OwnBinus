import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../page/home';
import Profile from '../../page/profile';
import {NavigationContainer} from '@react-navigation/native';
import navigationAction from '../navigationAction';
import {useColorScheme} from 'react-native';

const Stack = createStackNavigator();

export function StackNavigation() {
  const isDarkMode = useColorScheme() === 'dark';

  const style = {
    backgroundColor: isDarkMode ? '#000000' : '#ffffff',
    textColor: isDarkMode ? '#ffffff' : '#000000',
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
          notification: '',
          text: '',
          background: style.backgroundColor,
        },
      }}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
