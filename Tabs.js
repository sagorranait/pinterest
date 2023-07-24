import Home from './screens/Home';
import Likes from './screens/Likes';
import AddNew from './screens/AddNew';
import Profile from './screens/Profile';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from './constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={()=>({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: COLORS.white,
          tabBarInactiveTintColor: COLORS.dark,
        })}
      >
        <Tab.Screen 
          name="home" 
          component={Home} 
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon name="home" color={color} size={size} style={focused && styles.tabBarIcon} />
            ),
          }}
        />
        <Tab.Screen 
          name="likes" 
          component={Likes} 
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon name="heart" color={color} size={size} style={focused && styles.tabBarIcon} />
            ),
          }}
        />
        <Tab.Screen 
          name="AddNew" 
          component={AddNew} 
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon name="plus" color={color} size={size} style={focused && styles.tabBarIcon} />
            ),
          }}
        />
        <Tab.Screen 
          name="profile" 
          component={Profile} 
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon name="user" color={color} size={size} style={focused && styles.tabBarIcon} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Tabs;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    borderTopWidth: 0,
    bottom: 15,
    right: 10,
    left: 10,
    elevation: 0,
    backgroundColor: COLORS.whiteTransparent,
    borderRadius: 10,
    height: 75,
  },
  tabBarIcon: { 
    backgroundColor: COLORS.primary, 
    padding: 12, 
    borderRadius: 50,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
});