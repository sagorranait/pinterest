import { 
  View, 
  Text, 
  Pressable, 
  StyleSheet,
} from 'react-native';
import { COLORS } from '../constants';
import Icon from 'react-native-vector-icons/Entypo';

export default function CustomButton({ label, icon, outline, onPress, position }) {
  return (
    <View style={[styles.btnArea, { alignItems: position }]}>
      <Pressable 
        style={[styles.btn, {backgroundColor: outline ? '' : COLORS.primary,}]} 
        onPress={onPress}
      >
        { icon && <Icon 
          name={icon} 
          size={20} 
          color={outline ? COLORS.primary : COLORS.white} 
        /> }
        <Text 
          style={
            [
              styles.label, 
              { color: outline ? COLORS.primary : COLORS.white, marginLeft: icon ? 10 : 0 }
            ]
          }
        >
          {label}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  btnArea:{
    paddingVertical: 15,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: COLORS.primary,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
  },
})