import { 
  Image,
  StyleSheet, 
} from 'react-native';

export default ImageViewer = ({ placeholderImageSource, selectedImage }) => {
  const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({});
