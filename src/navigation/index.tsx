import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import HeadphoneCarousel from '../pages/headphoneCarousel';
import Carousel3D from '../pages/carousel3D';
import NavigationPage from '../pages/navigatePage';
import AnimatedTabIndicator from '../pages/animatedTabIndicator';
import OnBoardScreen from '../pages/onBoardScreen';

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
        initialRouteName={'NavigationPage'}>
        <Stack.Screen name="NavigationPage" component={NavigationPage} />
        <Stack.Screen name="HeadphoneCarousel" component={HeadphoneCarousel} />
        <Stack.Screen name="Carousel3D" component={Carousel3D} />
        <Stack.Screen
          name="AnimatedTabIndicator"
          component={AnimatedTabIndicator}
        />
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
