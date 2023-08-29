import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomBar from './BottomBar';
import SinglePin from '../screens/SinglePin';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="bottomTab">
        {/* <Stack.Screen name="bottomTab" component={BottomBar} options={{ headerShown: false }} />
        <Stack.Screen name="single-pin" component={SinglePin} options={{ headerShown: false }} /> */}
        <Stack.Screen name="sign-up" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" component={SignIn} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;

