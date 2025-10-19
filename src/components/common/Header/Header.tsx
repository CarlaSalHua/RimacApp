import {
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { logoRimac } from '@/assets/images';
import { Phone } from '@/assets/icons';
import { styles } from './Header.styles';

const Header = () => {
  const handlePress = () => {
    Linking.openURL('tel: 01 4116001');
  };

  return (
    <View style={styles.container}>
      <Image source={logoRimac} resizeMode="contain" style={styles.logo} />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Phone width={20} height={20} />
        <Text style={styles.text}>(01) 411 6001</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;


