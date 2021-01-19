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
    </View>
  );
};

export default NavigatePage;
