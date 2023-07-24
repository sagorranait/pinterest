import { View, StyleSheet, ScrollView } from 'react-native';
import Pin from '../components/Pin';

export default Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Pin/>
        <Pin/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 45,
  },
});