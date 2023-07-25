import { 
  Text, 
  View, 
  Image,
  ScrollView,
  StyleSheet, 
} from 'react-native';
import { COLORS } from '../constants';
import pins from '../assets/data/pins';
import MasonryList from '../components/MasonryList';
import { SafeAreaView, } from 'react-native-safe-area-context';

export default Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: 'https://avatars.githubusercontent.com/u/60606778?v=4'}}/>
          </View>
          <Text style={styles.title}>Sagor Rana</Text>
          <Text style={styles.subTitle}>534 Followers | 12 Followings</Text>
        </View>
        <MasonryList pins={pins}/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header:{
    margin: 20,
    alignItems: 'center'
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderRadius: 80,
    borderColor: COLORS.primary,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 80,
  },
  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    color: COLORS.lightBlack,
    fontWeight: '600'
  }
});