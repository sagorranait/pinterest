import { useState } from 'react';
import { 
  Text, 
  View, 
  Alert,
  Pressable,
  StyleSheet, 
} from 'react-native';
import { COLORS } from '../constants/index';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/EvilIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';

export default AddNew = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const savePinHandler = () => {

  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      Alert.alert('You did not select any image.');
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CustomButton label='Create Pin' outline={false} position='flex-end' />
        <View style={styles.formArea}>
          <View style={styles.imageArea}>
            <Icon name="image" color={COLORS.gray} size={100} />
            <Text style={styles.imageText} >Image Placeholder</Text>
          </View>
          <CustomButton 
            label='Select An Image' 
            icon='upload-to-cloud'
            outline={true}
            onPress={pickImageAsync}
            position='center'
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  formArea: {
    
  },
  imageArea: {
    width: '100%',
    minHeight: 280,
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.gray,
  },
  imageText: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.gray,
    margin: 15,
  }
});