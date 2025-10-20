import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Input from '../common/Input/Input';
import Checkbox from '../common/Checkbox/Checkbox';
import Button from '../common/Button/Button';
import { Controller, useForm } from 'react-hook-form';
import { LoginFormValues, loginSchema } from '@/schemas/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { colors } from '@/theme/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/AppNavigator';

const LoginForm = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { dni: '', phone: '', policy1: true, policy2: true },
  });

  const onSubmit = async (values: LoginFormValues) => {
    console.log(values);
    navigation.navigate('StepsStatus');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <View
        style={styles.container}
      >
        <Text style={styles.title}>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.</Text>

        <Controller
          control={control}
          name="dni"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Nro. de documento"
              keyboardType="number-pad"
              value={value}
              onChangeText={onChange}
              maxLength={8}
              error={errors.dni?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <Input
              label="Celular"
              keyboardType="phone-pad"
              value={value}
              onChangeText={onChange}
              maxLength={9}
              error={errors.phone?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="policy1"
          render={({ field: { value, onChange } }) => (
            <Checkbox
              checked={value}
              onChange={onChange}
              label="Acepto la Política de Privacidad"
            />
          )}
        />
        {!!errors.policy1 && (
          <Text style={styles.err}>{errors.policy1.message}</Text>
        )}
        <Controller
          control={control}
          name="policy2"
          render={({ field: { value, onChange } }) => (
            <Checkbox
              checked={value}
              onChange={onChange}
              label="Acepto la Política Comunicaciones Comerciales"
            />
          )}
        />
        {!!errors.policy2 && (
          <Text style={styles.err}>{errors.policy2.message}</Text>
        )}

        <Text style={styles.text}>
            Aplican Términos y Condiciones.
        </Text>

        <View style={{ height: 16 }} />
        <Button title="Cotiza aquí" onPress={handleSubmit(onSubmit)} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingBottom: 80,
  },
  title: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
    fontWeight: '600',
    marginVertical: 8,
    color: colors.black100,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.black100,
    textDecorationLine: 'underline',
  },
  err: {
    color: colors.redRimac,
    marginBottom: 8,
  },
});
