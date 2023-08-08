import { 
  View, 
  StyleSheet, 
  useWindowDimensions 
} from 'react-native';
import Pin from './Pin';

export default MasonryList = ({ pins }) => {
  const width = useWindowDimensions().width;
  const numColumns = Math.ceil(width / 350);

  return (
    <View style={styles.container}>
      {Array.from(Array(numColumns)).map((_, rowIndex)=>
        <View key={rowIndex} style={styles.column}>
          { pins.filter((_, index) => index % numColumns === rowIndex).map(pin => <Pin key={pin.id} data={pin}/>) }
        </View>
      )}
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