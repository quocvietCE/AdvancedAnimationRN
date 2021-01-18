import React, {useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import styles, {DOT_SIZE} from './style';

import data from '../../mockData/dataHeadphoneCarousel';
const {width, height} = Dimensions.get('window');

const Pagination = ({scrollX}) => {
  const inputRange = [-width, 0, width];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-DOT_SIZE, 0, DOT_SIZE],
  });
  return (
    <View style={[styles.pagination]}>
      <Animated.View
        style={[styles.paginationIndicator, {transform: [{translateX}]}]}
      />
      {data.map((item) => {
        return (
          <View key={item.key} style={styles.paginationDotContainer}>
            <View
              style={[styles.paginationDot, {backgroundColor: item.dotBg}]}
            />
          </View>
        );
      })}
    </View>
  );
};

const Ticker = ({scrollX}) => {
  const inputRange = [-width, 0, width];
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [40, 0, -40],
  });
  return (
    <View style={[styles.tickerContainer]}>
      <Animated.View style={{transform: [{translateY}]}}>
        {data.map((item, index) => {
          return (
            <Text key={index} style={styles.ticker}>
              {item.type}
            </Text>
          );
        })}
      </Animated.View>
    </View>
  );
};

const Circle = ({scrollX}) => {
  return (
    <View
      style={[
        StyleSheet.absoluteFillObject,
        styles.circleContainer,
        // {borderWidth: 1},
      ]}>
      {data.map((p, index) => {
        const inputRange = [
          (index - 0.55) * width,
          index * width,
          (index + 0.55) * width,
        ];
        return (
          <Animated.View
            key={index}
            style={[
              styles.circle,
              {
                backgroundColor: p.dotBg,
                opacity: scrollX.interpolate({
                  inputRange,
                  outputRange: [0, 0.3, 0],
                }),
                transform: [
                  {
                    scale: scrollX.interpolate({
                      inputRange,
                      outputRange: [0, 1, 0],
                    }),
                  },
                ],
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const Item = ({imageUri, heading, description, index, scrollX}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  console.log('inputRange: ', inputRange);
  const inputRangeOpacity = [
    (index - 0.3) * width,
    index * width,
    (index + 0.3) * width,
  ];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });
  console.log('scale: ', scale);

  const translateXHeading = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.2, 0, -width * 0.2],
  });
  const translateXDescription = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.6, 0, -width * 0.6],
  });

  const opacity = scrollX.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [0, 1, 0],
  });

  return (
    <View style={styles.itemStyle}>
      <Animated.Image
        style={[styles.imageStyle, {transform: [{scale}]}]}
        source={imageUri}
      />
      <View style={styles.textContainer}>
        <Animated.Text
          style={[
            styles.heading,
            {opacity, transform: [{translateX: translateXHeading}]},
          ]}>
          {heading}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.description,
            {opacity, transform: [{translateX: translateXDescription}]},
          ]}>
          {description}
        </Animated.Text>
      </View>
    </View>
  );
};

const HeadphoneCarousel = () => {
  const _scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View
      style={[
        styles.container,
        // {justifyContent: 'center', alignItems: 'center'},
      ]}>
      <Circle scrollX={_scrollX} />
      <Image
        style={[styles.logo]}
        // source={{require = '../../assets/headphonesCarousel/ue_black_logo.png'}}
        source={require('../../assets/headphonesCarousel/ue_black_logo.png')}
      />
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.key}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item, index}) => (
          <Item {...item} index={index} scrollX={_scrollX} />
        )}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: _scrollX}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
      />
      <Pagination scrollX={_scrollX} />
      <Ticker scrollX={_scrollX} />
    </View>
  );
};

export default HeadphoneCarousel;
