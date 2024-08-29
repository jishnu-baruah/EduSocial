import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { useRouter } from 'expo-router';

interface Section {
  id: string;
  image: any; // Replace `any` with the correct type if you have it
  heading: string;
  subText: string;
}

const sections: Section[] = [
  {
    id: '1',
    image: require('@/assets/images/screen2logo.png'),
    heading: 'Connect with Content Creators',
    subText: 'Empower your creativity and connect with a vibrant community—earn, engage, and thrive with every post!',
  },
  {
    id: '2',
    image: require('@/assets/images/screen2logo.png'),
    heading: 'Discover New Features',
    subText: 'Explore the latest tools and features to enhance your creative journey.',
  },
  {
    id: '3',
    image: require('@/assets/images/screen2logo.png'),
    heading: 'Get Started Quickly',
    subText: 'Learn how to get started and make the most of your experience with our platform.',
  },
  {
    id: '4',
    image: require('@/assets/images/screen2logo.png'),
    heading: 'Join the Community',
    subText: 'Become part of a supportive community and share your creative work with others.',
  },
];

const windowWidth = Dimensions.get('window').width;

const New: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / windowWidth);
    setCurrentIndex(index);
  };

  const handlePressNext = (): void => {
    if (currentIndex === sections.length - 1) {
      router.replace('./login'); // Navigate to login screen
    } else {
      const newIndex = Math.min(currentIndex + 1, sections.length - 1);
      setCurrentIndex(newIndex);
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: newIndex * windowWidth,
          animated: true,
        });
      }
    }
  };

  const renderDot = (index: number): JSX.Element => (
    <View
      key={index}
      style={[
        styles.dot,
        currentIndex === index ? styles.activeDot : styles.inactiveDot,
        currentIndex === index ? styles.activeDotSize : styles.inactiveDotSize,
      ]}
    />
  );

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        style={styles.scrollView}
        ref={scrollViewRef}
      >
        {sections.map((item) => (
          <View key={item.id} style={styles.list}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>{item.heading}</Text>
              <Text style={styles.subText}>{item.subText}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.sliderContainer}>
          {sections.map((_, index) => renderDot(index))}
        </View>
        <TouchableOpacity onPress={handlePressNext}>
          <Image source={require('@/assets/images/circleLogo.png')} style={styles.circleLogo} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default New;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e55733',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  scrollView: {
    flexGrow: 0,
  },
  list: {
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 216.31,
    height: 283.3,
    marginBottom: 20,
  },
  textContainer: {
    padding: 13,
    marginTop: 30,
    alignItems: 'center',
  },
  headingText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  dot: {
    borderRadius: 5,
    margin: 5,
  },
  activeDot: {
    backgroundColor: '#fff',
  },
  inactiveDot: {
    backgroundColor: '#bbb',
  },
  activeDotSize: {
    width: 20,
    height: 10,
  },
  inactiveDotSize: {
    width: 10,
    height: 10,
  },
  circleLogo: {
    width: 62,
    height: 62,
  },
});
