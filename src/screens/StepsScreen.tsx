import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { StepBar } from '@/components/common/StepBar/StepBar';
import FirstStepScreen from './FirstStepScreen';
import SecondStepScreen from './SecondStepScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/theme/colors';
import Line from '@/components/common/Line/Line';
import Header from '@/components/common/Header/Header';

const StepsScreen = () => {
  const [step, setStep] = useState(1);
  const total = 2;

  const handleNext = () => {
    setStep(s => Math.min(s + 1, total));
  };

  const handleBack = () => {
    setStep(s => Math.max(s - 1, 1));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Header />
          <StepBar
            totalSteps={total}
            currentStep={step}
            onNext={handleNext}
            onBack={handleBack}
            nextButton={false}
          />
        </View>
        <Line style={styles.line} />
        {step === 1 ? (
          <FirstStepScreen handleNext={handleNext} />
        ) : (
          <SecondStepScreen />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default StepsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral,
  },
  headerContainer: {
    paddingHorizontal: 24,
    backgroundColor: colors.neutral,
  },
  line: {
    marginVertical: 0,
    backgroundColor: colors.line,
  },
});
