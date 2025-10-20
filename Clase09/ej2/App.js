import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Image from './src/components/Image';

export default function App() {
  return (
    <View>
      <Text style={styles.text}>Probando imagenes</Text>
      <Image/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginLeft: 600
  }
});
