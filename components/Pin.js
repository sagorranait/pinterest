import { useState } from 'react';
import { 
   Text, 
   View,
   Image,
   Pressable,
   StyleSheet
} from 'react-native';
import { COLORS } from '../constants';
import Icon from 'react-native-vector-icons/AntDesign';

export default Pin = () => {
  const [ratio, setRatio] = useState(1);

  Image.getSize(
   'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg', 
   (width, height) => setRatio(width / height)
  );

  const onLikeHandler = () => {}

  return (
    <View style={styles.pin}>
      <View>
         <Image style={[styles.image, {aspectRatio: ratio}]} source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg' }} />
         <Pressable onPress={onLikeHandler} style={styles.heartBtn}>
            <Icon name='hearto' size={20} color={COLORS.black} />
         </Pressable>
      </View>
      <Text style={styles.title}>notJust Dev Hoodie</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   pin: {
      width: '100%'
   },
   image: {
      width: '100%',
      borderRadius: 25,
   },
   heartBtn: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      padding: 10,
      borderRadius: 20,
      backgroundColor: COLORS.lightGray,
   },
   title: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
   },
});