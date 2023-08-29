import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomButton from './CustomButton';

const SocialButtons = () => {
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  return (
    <View style={styles.iconArea}>
      <CustomButton
        label="Apple"
        onPress={onSignInApple}
      />
      <CustomButton
        label="Google"
        onPress={onSignInGoogle}
      />
      <CustomButton
        label="Facebook"
        onPress={onSignInFacebook}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  }
});

export default SocialButtons;