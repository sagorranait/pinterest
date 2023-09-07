import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants';
import CustomButton from '../components/CustomButton';
import SocialButtons from '../components/SocialButtons';
import Logo from '../assets/logo.png';

export default function SignIn() {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegisterPressed = () => {
    console.warn("Sign up");
  };

  const onSignInPress = () => {
    navigation.navigate("sign-up");
  };

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };

  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };

  const onForgotPasswordPressed = () => {

  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          style={styles.input}
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />

        <CustomButton label="Sign In" onPress={onRegisterPressed} />

        <SocialButtons />
    
        <CustomButton
          label="Don't have an account? Create one"
          onPress={onSignInPress}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: COLORS.secondary,
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    borderColor: COLORS.secondary,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    height: 50,
  },
});