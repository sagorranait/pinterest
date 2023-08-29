import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants';
import CustomButton from '../components/CustomButton';
import SocialButtons from '../components/SocialButtons';

export default function SignIn() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
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

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

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

        <CustomButton label="Register" onPress={onRegisterPressed} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialButtons />
    
        <CustomButton
          label="Have an account? Sign in"
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    margin: 10,
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