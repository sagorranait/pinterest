import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
   Text, 
   View, 
   Image, 
   Pressable,
   StyleSheet,
   Alert,
   ScrollView,
} from 'react-native';
import { COLORS } from '../constants';
import { useNhostClient } from '@nhost/react';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default SinglePin = () => {
  const nhost = useNhostClient();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const route = useRoute();
  const { id } = route.params;

  const [ratio, setRatio] = useState(1);
  const [pin, setPin] = useState(null);
  
  const fetchPins = async () => {
   const response = await nhost.graphql.request(`
     query PinById ($id: uuid!) {
         pins_by_pk(id: $id) {
            id
            title
            image
            description
         }
      }
   `, { id });

   if (response.error) {
     Alert.alert('Error Fetching Pins !!!');
   }else{
     setPin(response?.data?.pins_by_pk || {});
   }
 }

   useEffect(() => {
      fetchPins();
   }, [])

  useEffect(() => {
    if (pin?.image) {
      Image.getSize(pin?.image, (width, height) => setRatio(width / height));
    }
  }, [pin?.image]);

  const goBackHandler = () => {
   navigation.goBack();
  }

  

  return (
   <SafeAreaView style={styles.root}>
      <ScrollView>
         <StatusBar style='light'/>
         <View style={styles.container}>
            <Image style={[styles.image, {aspectRatio: ratio}]} source={{ uri: pin?.image }} />
            <Text style={styles.title}>{pin?.title}</Text>
            <Text style={styles.description}>{pin?.description}</Text>
         </View>
         <Pressable onPress={goBackHandler} style={[styles.backBtn, { top: insets.top + 5 }]} >
            <Icon name='leftcircleo' size={30} color={COLORS.white} />
         </Pressable>
      </ScrollView>
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
   description: {
      fontSize: 16,
      lineHeight: 22,
      textAlign: 'center',
      marginBottom: 15,
   },
   backBtn: {
      position: 'absolute',
      left: 15,
   }
});