import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
          <AppNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
