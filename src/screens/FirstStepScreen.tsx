import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useMemo } from 'react';
import { colors } from '@/theme/colors';
import Card from '@/components/common/Card/Card';
import PlanCard from '@/components/common/PlanCard/PlanCard';
import Carousel from '@/components/common/Carousel/Carousel';
import type { Plan } from '@/types/index';
import { useAppDispatch, useAppSelector } from '@/store';
import { loadPlans, selectPlan } from '@/store/planSlice';
import { ProtectIcon } from '@/assets/icons';

interface FirstStepScreenProps {
  handleNext: () => void;
}

const FirstStepScreen = ({ handleNext }: FirstStepScreenProps) => {
  const dispatch = useAppDispatch();
  const [sel, setSel] = React.useState<'me' | 'other' | null>(null);
  const { all } = useAppSelector(state => state.plan);
  const { age: userAge, name } = useAppSelector(state => state.user);

  useEffect(() => {
    if (sel) {
      dispatch(loadPlans());
    }
  }, [sel, dispatch]);

  const visiblePlans = useMemo(() => {
    if (!sel) return [];
    const list = all;
    const withAge = list.filter(p => userAge <= p.age);
    if (sel === 'other') {
      return withAge.map(p => ({
        ...p,
        price: +(p.price * 0.95).toFixed(2),
      }));
    }
    return withAge;
  }, [sel, all, userAge]);

  const renderItem = ({ item }: { item: Plan }) => (
    <PlanCard
      item={item}
      onSelect={() => {
        dispatch(selectPlan(item));
        handleNext();
      }}
      contentHorizontalPadding={50}
    />
  );

  return (
    <View style={styles.contain}>
      <View style={styles.container}>
        <Text style={styles.title}>{name} ¿Para quién deseas cotizar?</Text>
        <Text style={styles.subtitle}>
          Selecciona la opción que se ajuste más a tus necesidades.
        </Text>
        <Card
          active={sel === 'me'}
          onPress={() => setSel('me')}
          title="Para mí"
          text="Cotiza tu seguro de salud y agrega familiares."
          Icon={ProtectIcon}
        />
        <Card
          active={sel === 'other'}
          onPress={() => setSel('other')}
          title="Para alguien más"
          text="Cotiza para un familiar o cualquier persona."
        />
      </View>
      {visiblePlans.length > 0 && (
        <Carousel
          data={visiblePlans}
          onIndexChange={i => console.log('page:', i)}
          renderItem={renderItem}
          contentHorizontalPadding={50}
        />
      )}
    </View>
  );
};

export default FirstStepScreen;

const styles = StyleSheet.create({
  contain: {
    marginBottom: 48,
  },
  container: {
    padding: 24,
    paddingBottom: 32,
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.blackNeutral,
    marginBottom: 16,
  },
});
