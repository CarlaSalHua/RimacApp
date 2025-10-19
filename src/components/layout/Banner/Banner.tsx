import { Image, Text, View } from 'react-native';
import React from 'react';
import { familyImg } from '@/assets/images';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './Banner.styles';

const Banner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <LinearGradient
          colors={['#00FF7F', '#00F4E2']}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={styles.linearGradient}
        >
          <Text style={styles.subtitle}>Seguro Salud Flexible</Text>
        </LinearGradient>
        <Text style={styles.title}>Creado para ti y tu familia</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={familyImg} resizeMode="cover" style={styles.image} />
      </View>
    </View>
  );
};

export default Banner;


