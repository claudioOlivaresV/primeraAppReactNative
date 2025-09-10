import {SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Mapear Ionicons para que Paper lo use
const ionicons = (props: {name: string; color: string; size: number}) => (
  <Ionicons {...props} />
);
export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: ionicons,
      }}>
      <SafeAreaView style={{flex: 1}}>
        <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  );
};
