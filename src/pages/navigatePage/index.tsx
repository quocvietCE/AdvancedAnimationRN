import React, {useCallback} from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './style';

const NavigatePage = ({navigation}) => {
  const navigateToHeadPhoneCarousel = useCallback(() => {
    navigation.navigate('HeadphoneCarousel');
  }, [navigation]);

  const navigateToCarousel3D = useCallback(() => {
    navigation.navigate('Carousel3D');
  }, [navigation]);

  const navigateAnimatedTabsAndIndicator = useCallback(() => {
    navigation.navigate('AnimatedTabIndicator');
  }, [navigation]);

  const navigateToOnBoardScreen = useCallback(() => {
    navigation.navigate('OnBoardScreen');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Animated Page</Text>
      <Pressable
        style={styles.btnNavigation}
        onPress={navigateToHeadPhoneCarousel}>
        <Text style={styles.title}>HeadPhone Carousel</Text>
      </Pressable>

      <Pressable style={styles.btnNavigation} onPress={navigateToCarousel3D}>
        <Text style={styles.title}>Carousel 3D</Text>
      </Pressable>

      <Pressable
        style={styles.btnNavigation}
        onPress={navigateAnimatedTabsAndIndicator}>
        <Text style={styles.title}>Animated Tabs & Animated Indicator</Text>
      </Pressable>

      <Pressable style={styles.btnNavigation} onPress={navigateToOnBoardScreen}>
        <Text style={styles.title}>Onboard Screen</Text>
      </Pressable>
    </View>
  );
};

export default NavigatePage;
