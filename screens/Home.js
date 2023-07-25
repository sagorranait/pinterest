import { View, StyleSheet, ScrollView } from 'react-native';
import Pin from '../components/Pin';
import pins from '../assets/data/pins';
import { SafeAreaView } from 'react-native-safe-area-context';

export default Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.column}>
            { pins.filter((_, index)=> index % 2 === 0).map(pin => <Pin key={pin.id} data={pin}/>) }
          </View>
          <View style={styles.column}>
            { pins.filter((_, index)=> index % 2 === 1).map(pin => <Pin key={pin.id} data={pin}/>) }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  column: {
    flex: 1,
  }
});