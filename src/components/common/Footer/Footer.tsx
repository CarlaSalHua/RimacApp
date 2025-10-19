import { Image, Text, View } from 'react-native'
import React from 'react'
import { logoWhite } from '@/assets/images'
import { styles } from './Footer.styles'
import Line from '../Line/Line'

const Footer = () => {
  return (
    <View style={styles.container}>
      <Image source={logoWhite} resizeMode="contain" style={styles.logo} />
      <Line />
      <Text style={styles.text}>© 2023 RIMAC Seguros y Reaseguros.</Text>
    </View>
  )
}

export default Footer