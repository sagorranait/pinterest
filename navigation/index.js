import { COLORS } from '../constants';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Likes from '../screens/Likes';
import AddNew from '../screens/AddNew';
import Profile from '../screens/Profile';
import SinglePin from '../screens/SinglePin';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabBar = () => {

  return (
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
              <Icon 
                name="home" 
                color={color} 
                size={size} 
                style={focused && styles.tabBarIcon} 
              />
            ),
          }}
        />
        <Tab.Screen 
          name="likes" 
          component={Likes} 
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon 
                name="heart" 
                color={color} 
                size={size} 
                style={focused && styles.tabBarIcon} 
              />
            ),
          }}
        />
        <Tab.Screen 
          name="AddNew" 
          component={AddNew} 
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon 
                name="plus" 
                color={color} 
                size={size} 
                style={focused && styles.tabBarIcon} 
              />
            ),
          }}
        />
        <Tab.Screen 
          name="profile" 
          component={Profile} 
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon 
                name="user" 
                color={color} 
                size={size} 
                style={focused && styles.tabBarIcon} 
              />
            ),
          }}
        />
      </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="bottomTab">
        <Stack.Screen name="bottomTab" component={BottomTabBar} options={{ headerShown: false }} />
        <Stack.Screen name="single-pin" component={SinglePin} options={{ headerShown: false }} />
      </Stack.Navigator>
      {/* Bottom Tab Navigation */}
    </NavigationContainer>
  )
}

export default Navigation;

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    height: 70,
  },
  tabBarIcon: {
    width: 50,
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