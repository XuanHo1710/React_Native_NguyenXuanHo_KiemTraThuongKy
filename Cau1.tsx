import { SafeAreaView, StyleSheet} from 'react-native';
import Caculator from './components/Caculator'

export default function App() {
 

  return ( 
    <SafeAreaView style={styles.container}>
      <Caculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#ecf0f1',
    padding: 10,
    gap: 10
  }
});
