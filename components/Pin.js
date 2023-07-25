import { useEffect, useState } from 'react';
import { 
   Text, 
   View,
   Image,
   Pressable,
   StyleSheet
} from 'react-native';
import { COLORS } from '../constants';
import Icon from 'react-native-vector-icons/AntDesign';

export default Pin = ({ data }) => {
  const { title, image } = data;
  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);
  
  const onLikeHandler = () => {}

  return (
    <View style={styles.pin}>
      <View>
         <Image style={[styles.image, {aspectRatio: ratio}]} source={{ uri: image }} />
         <Pressable onPress={onLikeHandler} style={styles.heartBtn}>
            <Icon name='hearto' size={20} color={COLORS.black} />
         </Pressable>
      </View>
      <Text style={styles.title} numberOfLines={2} >{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   pin: {
      width: '100%',
      padding: 4,
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
      borderRadius: 15,
      backgroundColor: COLORS.lightGray,
   },
   title: {
      margin: 5,
      fontSize: 16,
      lineHeight: 22,
      fontWeight: '600',
   },
});