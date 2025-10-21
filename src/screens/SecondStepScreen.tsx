import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '@/theme/colors';
import { useAppSelector } from '@/store';
import { Family } from '@/assets/icons';
import Line from '@/components/common/Line/Line';
const SecondStepScreen = () => {
  const { user } = useAppSelector((state) => state);
  const { selected: plan } = useAppSelector((state) => state.plan);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumen del seguro</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Precios calculados para:</Text>
        <View style={styles.nameContainer}>
          <Family width={24} height={24} />
          <Text style={styles.name}>
            {user.name} {user.lastName}
          </Text>
        </View>
        <Line style={styles.divider} />
        <Text style={styles.text}>Responsable de pago</Text>
        <Text style={styles.value}>DNI: {user.documentNumber}</Text>
        <Text style={styles.value}>Celular: {user.phone}</Text>
        
        <Text style={styles.text}>Plan elegido</Text>
        {plan ? (
          <>
            <Text style={styles.value}>{plan.name}</Text>
            <Text style={styles.value}>
              Costo del Plan: ${plan.price.toFixed(2)} al mes
            </Text>
          </>
        ) : (
          <Text style={styles.value}>No seleccionado</Text>
        )}
      </View>
    </View>
  );
};

export default SecondStepScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: colors.neutral,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    flexShrink: 1, 
    fontSize: 32, 
    fontWeight: '700', 
    marginVertical: 30 
  },
  card: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 32,
    gap: 6,
    borderWidth: 1,
    borderColor: colors.white,
    shadowColor: '#A9AFD9',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  label: { 
    fontSize: 10,
    textTransform: 'uppercase',
    color: colors.blackNeutral, 
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  nameContainer: { 
    flexDirection: 'row', 
    alignItems: 'flex-start',
    gap: 12,
    marginTop: 6
  },
  name: { 
    fontSize: 20,
    color: colors.blackNeutral, 
    fontWeight: '700',
    letterSpacing: -0.1,
  },
  value: { 
    fontSize: 14,
    color: colors.blackNeutral, 
    fontWeight: '400',
    letterSpacing: 0.1,
  },
  text: { 
    fontSize: 16,
    color: colors.blackNeutral, 
    fontWeight: '700', 
    letterSpacing: 0.2,
    marginTop: 12 
  },
  divider: { 
    height: 1, 
    backgroundColor: '#eee', 
    marginTop: 10,
    marginBottom: 0 
  },
});
