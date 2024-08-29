import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

const interests = [
  'News and Events',
  'Entertainment',
  'Lifestyle',
  'Personal Development',
  'Humor and Memes',
  'Sports',
  'Science',
  'History',
  'Animals',
  'Education',
  'Technology Information',
  'Product and Brand',
  'Marketing',
  'Scary Things',
  'Movies',
  'Music',
];

const Interest: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const router=useRouter()
  const handleInterestSelect = (interest: string) => {
    setSelectedInterests(prevState => 
      prevState.includes(interest)
        ? prevState.filter(item => item !== interest)
        : [...prevState, interest]
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Personalize your experience</Text>
        <Text style={styles.subtitle}>
          You can customize your feed by following topics or people that interest you the most
        </Text>
        <View style={styles.buttonsContainer}>
          {interests.map((interest, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                selectedInterests.includes(interest) && styles.selectedButton,
              ]}
              onPress={() => handleInterestSelect(interest)}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedInterests.includes(interest) && styles.selectedButtonText,
                ]}
              >
                {interest}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity onPress={()=>{
        router.replace("/(tabs)/home")
      }} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>
          {selectedInterests.length === 0 ? 'Skip for now' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Interest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e55733',
    padding: 20,
    paddingTop: 50,
  },
  scrollViewContent: {
    alignItems: 'flex-start',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  button: {
    borderRadius: 35,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
  },
  selectedButton: {
    backgroundColor: '#000',
    borderWidth: 0,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
  },
  selectedButtonText: {
    color: '#fff',
  },
  nextButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
