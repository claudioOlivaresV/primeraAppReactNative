import {SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlexRowScreen} from './src/presentation/screens/FlexRowScreen';

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
        <FlexRowScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
