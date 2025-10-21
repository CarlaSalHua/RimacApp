/* eslint-disable react-native/no-inline-styles */
import React, { useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './StepBar.styles';
import { Back, BackActive } from '@/assets/icons';

type StepperProps = {
  totalSteps: number;
  currentStep: number;
  onBack?: () => void;
  onNext?: () => void;
  showBack?: boolean; // mostrar/ocultar botón volver
  disabledNext?: boolean; // deshabilitar avanzar
  nextButton?: boolean; // mostrar/ocultar botón siguiente
};

export function StepBar({
  totalSteps,
  currentStep,
  onBack,
  onNext,
  showBack = true,
  disabledNext = false,
  nextButton = true,
}: StepperProps) {
  const clampedStep = Math.min(Math.max(currentStep, 1), totalSteps);
  const progress = useMemo(
    () => (totalSteps <= 1 ? 1 : (clampedStep - 0.5) / (totalSteps - 1)),
    [clampedStep, totalSteps],
  );

  return (
    <View style={styles.wrapper}>
      {/* Botón circular volver */}
      {showBack ? (
        <Pressable
          onPress={onBack}
          disabled={clampedStep === 1}
          style={({ pressed }) => [
            styles.backButton,
            clampedStep === 1 && styles.backDisabled,
            pressed && styles.backPressed,
          ]}
          accessibilityRole="button"
          accessibilityLabel="Volver"
        >
          {
            clampedStep === 1 ? <Back  width={24} height={24} /> : <BackActive width={24} height={24} />
          }
        </Pressable>
      ) : (
        <View style={{ width: 32 }} />
      )}

      {/* Texto PASO X DE N */}
      <Text style={styles.stepText}>
        PASO {clampedStep} DE {totalSteps}
      </Text>

      {/* Barra de progreso */}
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>

      {/* Botón “Siguiente” desabilitado*/}
      {nextButton && (
        <Pressable
          onPress={onNext}
          disabled={disabledNext || clampedStep === totalSteps}
          style={({ pressed }) => [
            styles.nextButton,
            (disabledNext || clampedStep === totalSteps) && styles.nextDisabled,
            pressed && styles.nextPressed,
          ]}
          accessibilityRole="button"
          accessibilityLabel="Siguiente"
        >
          <Text style={styles.nextText}>Siguiente</Text>
        </Pressable>
      )}
    </View>
  );
}


