import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
  ImageSourcePropType,
  Dimensions,
  ImageBackground,
} from 'react-native';

const AddPostScreen: React.FC = () => {
  const [isGalleryModalVisible, setIsGalleryModalVisible] = React.useState(false);
  const [selectedMedia, setSelectedMedia] = React.useState<ImageSourcePropType | null>(null);

  const toggleGalleryModal = () => {
    setIsGalleryModalVisible(!isGalleryModalVisible);
  };

  const handleSelectMedia = (media: ImageSourcePropType) => {
    setSelectedMedia(media);
    setIsGalleryModalVisible(false);
  };

  const renderGalleryOption = ({ item, index }: { item: ImageSourcePropType, index: number }) => (
    <TouchableOpacity onPress={() => handleSelectMedia(item)} style={styles.galleryItem}>
      <Image source={item} style={styles.galleryImage} />
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('@/assets/imagesAcc/background3.png')} // Background image
      style={styles.backgroundImage} // Style for background image
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>New Post</Text>

        <View style={styles.galleryContainer}>
          <FlatList
            data={[
              require('@/assets/imagesAcc/Rectangle.png'),
              require('@/assets/imagesAcc/Rectangle.png'),
              require('@/assets/imagesAcc/Rectangle.png'),
              require('@/assets/imagesAcc/Rectangle.png'),
              require('@/assets/imagesAcc/Rectangle.png'),
            ]}
            renderItem={renderGalleryOption}
            keyExtractor={(item, index) => index.toString()} // Use index as key
            numColumns={2}
          />
        </View>

        <TouchableOpacity onPress={toggleGalleryModal} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>

        {/* Bottom Segmented Control */}
        <View style={styles.segmentedControl}>
          <TouchableOpacity style={styles.segmentButton}>
            <Text style={styles.segmentButtonText}>POST</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.segmentButton}>
            <Text style={styles.segmentButtonText}>STORY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.segmentButton}>
            <Text style={styles.segmentButtonText}>REEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.segmentButton}>
            <Text style={styles.segmentButtonText}>LIVE</Text>
          </TouchableOpacity>
        </View>

        {/* Gallery Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isGalleryModalVisible}
          onRequestClose={toggleGalleryModal}
        >
          <View style={styles.modalOverlay}>
            <FlatList
              data={[
                require('@/assets/imagesAcc/Rectangle.png'),
                require('@/assets/imagesAcc/Rectangle2.png'),
                require('@/assets/imagesAcc/Rectangle2.png'),
                require('@/assets/imagesAcc/Rectangle2.png'),
                require('@/assets/imagesAcc/Rectangle.png'),
              ]}
              renderItem={renderGalleryOption}
              keyExtractor={(item, index) => index.toString()} // Use index as key
              numColumns={2}
            />
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      paddingTop: 50,
      justifyContent: 'space-between', // Added to ensure elements are spaced correctly
    },
    headerText: {
      fontSize: 20,
      color: '#fff',
      textAlign: 'center',
      marginBottom: 10,
    },
    galleryContainer: {
      flex: 1,
      paddingHorizontal: 10,
    },
    galleryItem: {
      flex: 1,
      margin: 5,
    },
    galleryImage: {
      width: (width / 2) - 20,
      height: 150,
      borderRadius: 10,
    },
    nextButton: {
      backgroundColor: '#ff6600',
    //   paddingVertical: 15,
    //   paddingHorizontal: 30,
    padding:2,
      borderRadius: 30,
      alignSelf: 'center',
      marginBottom: 10,
      height:30,
      width:"20%",
    },
    nextButtonText: {
      color: '#fff',
      fontSize: 18,
      alignSelf:"center"
    },
    segmentedControl: {
      flexDirection: 'row',
      justifyContent: 'center', // Centering the segmented control
      backgroundColor: 'rgba(0,0,0,0.4)',
      paddingVertical: 10,
      borderRadius: 30,
      marginBottom: 20, // Added margin to ensure it's not too close to the bottom
      width:"60%",
      alignSelf:"center"
    },
    segmentButton: {
      flex: 1,
      alignItems: 'center',
    },
    segmentButtonText: {
      color: '#fff',
      fontSize: 14,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.85)',
      justifyContent: 'center',
      padding: 10,
    },
  });
  

export default AddPostScreen;
