import { View, Pressable, Text } from 'react-native';
import React from 'react';
import { CheckIcon, UserIcon } from '@/assets/icons';
import { styles } from './Card.styles';
import { colors } from '@/theme/colors';

interface CardProps {
  active?: boolean;
  title: string;
  text: string;
  onPress: () => void;
  Icon?: any;
}

const Card = ({ active, title, text, onPress, Icon = UserIcon }: CardProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, {borderColor: active ? colors.black : colors.white}]}
    >
      <View style={styles.iconContent}>
        {active ? (
          <CheckIcon width={24} height={24} />
        ) : (
          <View style={styles.iconCircle} />
        )}
      </View>

      <View style={styles.cardHeader}>
        <Icon width={32} height={32} />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <Text style={styles.cardText}>{text}</Text>
    </Pressable>
  );
};

export default Card;

