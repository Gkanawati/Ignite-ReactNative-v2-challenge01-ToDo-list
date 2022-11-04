import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { Home } from './src/pages/Home';
import { Loading } from './src/components/Loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#1A1A1A' }}>
      <StatusBar style='light' />
      {fontsLoaded ? <Home /> : <Loading />}
    </View>
  );
}
