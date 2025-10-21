import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import Banner from '@/components/common/Banner/Banner';
import Line from '@/components/common/Line/Line';
import LoginForm from '@/components/form/LoginForm';
import { blurGreen, blurPurple } from '@/assets/images';
import { colors } from '@/theme/colors';

const LoginScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: colors.neutral}}>
      <ScrollView keyboardShouldPersistTaps="handled" >
        <View style={styles.container}>
          <Image source={blurGreen} style={styles.blurGreen} />
          <Header />
          <Banner />
          <Line style={styles.line} />
          <LoginForm />
          <Image source={blurPurple} style={styles.blurPurple} />
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    position: 'relative',
  },
  blurGreen: {
    position: 'absolute',
    top: -20,
    right: -100,
    zIndex: -1,
  },
  blurPurple: {
    position: 'absolute',
    bottom: 0,
    left: -90,
    zIndex: -1,
  },
  line: {
    backgroundColor: '#CCD1EE',
  },
});
