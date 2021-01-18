import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import HeadphoneCarousel from '../pages/headphoneCarousel';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'HeadphoneCarousel'}>
        <Stack.Screen name="HeadphoneCarousel" component={HeadphoneCarousel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
