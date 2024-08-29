import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

// Adjust the path to your image accordingly
const backgroundImage = require('@/assets/images/screen1.png');

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Set a timer to navigate after 1 second (1000 milliseconds)
    const timer = setTimeout(() => {
      router.replace('/new');
    }, 1000);

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <ImageBackground 
      source={backgroundImage} 
      style={styles.background}
    >
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' depending on how you want the image to fit
  },
});
