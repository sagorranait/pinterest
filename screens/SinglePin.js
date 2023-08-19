import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
   Text, 
   View, 
   Image, 
   Pressable,
   StyleSheet,
} from 'react-native';

import pins from '../assets/data/pins';
import { COLORS } from '../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default SinglePin = () => {
  const route = useRoute();
  const { id } = route.params;
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [ratio, setRatio] = useState(1);
  
  const pin = pins.find(pin => pin.id === id);

  useEffect(() => {
    if (pin.image) {
      Image.getSize(pin.image, (width, height) => setRatio(width / height));
    }
  }, [pin.image]);

  const goBackHandler = () => {
   navigation.goBack();
  }

  return (
   <SafeAreaView style={styles.root}>
      <StatusBar style='light'/>
      <View style={styles.container}>
         <Image style={[styles.image, {aspectRatio: ratio}]} source={{ uri: pin.image }} />
         <Text style={styles.title}>{pin.title}</Text>
      </View>
      <Pressable onPress={goBackHandler} style={[styles.backBtn, { top: insets.top + 25 }]} >
         <Icon name='leftcircleo' size={30} color={COLORS.white} />
      </Pressable>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   root: {
      backgroundColor: COLORS.black,
   },
   container: {
      height: '100%',
      marginTop: 10,
      borderTopLeftRadius: 45,
      borderTopRightRadius: 45,
      backgroundColor: COLORS.white,
   },
   image: {
      width: '100%',
      borderTopLeftRadius: 45,
      borderTopRightRadius: 45,
   },
   title: {
      margin: 10,
      fontSize: 24,
      lineHeight: 35,
      fontWeight: '600',
      textAlign: 'center',
   },
   backBtn: {
      position: 'absolute',
      left: 15,
   }
});