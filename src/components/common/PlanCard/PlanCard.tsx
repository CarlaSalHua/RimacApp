import { Dimensions, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import Button from '../Button/Button';
import { Plan } from '@/types';
import Line from '../Line/Line';
import { styles } from './PlanCard.styles';
import { getBulletIcon, getPlanIcon } from '@/utils/icons';

interface PlanCard {
  item: Plan;
  onSelect: () => void;
  contentHorizontalPadding?: number;
}

const PlanCard = ({
  item,
  onSelect,
  contentHorizontalPadding = 30,
}: PlanCard) => {
  const Icon = getPlanIcon(item.name);
  const { width: screenWidth } = Dimensions.get('window');
  const itemSpacing = 14;

  const itemWidth = useMemo(
    () => screenWidth - contentHorizontalPadding * 2,
    [screenWidth, contentHorizontalPadding],
  );

  return (
    <View style={[styles.card, { width: itemWidth, marginRight: itemSpacing }]}>
      <View>
        <View style={styles.header}>
          <Text style={styles.name}>{item?.name}</Text>
          {Icon}
        </View>
        <Text style={styles.subtitle}>Costo del plan</Text>
        <Text style={styles.price}>${item?.price.toFixed(2)} al mes</Text>
        <Line style={styles.line} />
        <View style={styles.description}>
          {item.description.map((d, i) => (
            <View key={i} style={styles.containerRow}>
              <View style={styles.iconContainer}>
                {getBulletIcon(i)}
              </View>
              <Text key={i} style={styles.bullet}>
                {d}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <Button style={styles.button} textStyle={styles.btnText} title="Seleccionar plan" onPress={onSelect} />
    </View>
  );
};

export default PlanCard;

