import { useFonts } from 'expo-font'; 
import { View, Text, StyleSheet } from 'react-native'; 

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/Montserrat-Regular.ttf'), 
    'MontserratBold': require('./assets/Montserrat-Bold.ttf'), 
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fonts Loaded!</Text> 
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  text: {
    fontFamily: 'MontserratBold', 
    fontSize: 24, 
  },
});