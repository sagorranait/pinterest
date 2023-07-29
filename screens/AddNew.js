import { useEffect, useState } from 'react';
import { 
  Text, 
  View, 
  Alert,
  Image, 
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { COLORS } from '../constants/index';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/EvilIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';

export default AddNew = () => {
  const [ratio, setRatio] = useState(1);
  const [pinData, setPinData] = useState({
		image: '',
		title: '',
		description: ''
	});

  useEffect(() => {
    if (pinData.image) {
      Image.getSize(pinData.image, (width, height) => setRatio(width / height));
    }
  }, [pinData.image]);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPinData((preData) => {
        return { ...preData, 'image': result.assets[0].uri }
      });
    } else {
      Alert.alert('You did not select any image.');
    }
  };

  const inputHandler = (identifier, enteredText) => {
    setPinData((currentText)=> {
			return {
        ...currentText,
			  [identifier]: enteredText
      }
		});
  }

  const savePinHandler = () => {

  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <CustomButton label='Create Pin' outline={false} position='flex-end' onPress={savePinHandler}  />
          <View style={styles.formArea}>
            <View style={[styles.imageArea, { borderWidth: pinData.image ? 0 : 1 }]}>
              { pinData.image ? 
              <Image source={{ uri: pinData.image }} style={[styles.image, {aspectRatio: ratio}]} /> :
              <>              
                <Icon name="image" color={COLORS.gray} size={100} />
                <Text style={styles.imageText} >Image Placeholder</Text>
              </>
              }
              <CustomButton 
                label={pinData.image ? 'Choose Another' : 'Select An Image'} 
                icon='upload-to-cloud'
                outline={true}
                onPress={pickImageAsync}
                position='center'
              />
            </View>
            <View style={styles.inputArea}>
              <View style={styles.input}>
                <Text style={styles.inputTitle}>Title</Text>
                <TextInput
                  value={pinData.title}
                  style={styles.textInput}
                  placeholder='Give your pin a title.'
                  onChange={inputHandler.bind(this, 'title')}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.inputTitle}>Description</Text>
                <TextInput
                  value={pinData.title}
                  style={styles.textInput}
                  placeholder='Tell everyone what your Pin about.'
                  onChange={inputHandler.bind(this, 'title')}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.gray,
  },
  image: {
    width: '100%',
    borderRadius: 15,
  },
  imageText: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.gray,
    margin: 15,
  },
  inputArea: {
  },
  inputTitle: {
    fontSize: 18,
    marginTop: 15,
    paddingLeft: 7,
    fontWeight: '600',
    paddingBottom: 10,
    color: COLORS.black,
  },
  textInput: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: COLORS.gray,
  },
});