import LoginScreen from "@/screens/LoginScreen";
import StepsScreen from "@/screens/StepsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  StepsStatus: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen}  />
      <Stack.Screen name="StepsStatus" component={StepsScreen} />
    </Stack.Navigator>
  );
}