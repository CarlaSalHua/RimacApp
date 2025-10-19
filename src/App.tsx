import { StatusBar} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import Button from './components/Button/Button';


function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title="Hello World" onPress={() => {}} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;