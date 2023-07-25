import { View, StyleSheet } from 'react-native';
import Pin from './Pin';


export default MasonryList = ({ pins }) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        { pins.filter((_, index)=> index % 2 === 0).map(pin => <Pin key={pin.id} data={pin}/>) }
      </View>
      <View style={styles.column}>
        { pins.filter((_, index)=> index % 2 === 1).map(pin => <Pin key={pin.id} data={pin}/>) }
      </View>
    </View>
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