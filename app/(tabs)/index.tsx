import { Text, View, StyleSheet } from 'react-native';
 import { Link } from 'expo-router'; 

export default function Index() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.text}>Home screen</Text>
      <Link href="/about" style={estilo.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
