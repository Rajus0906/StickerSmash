// Import our core components: View (like an HTML <div>), 
// Text (like an HTML <p>), 
// and StyleSheet (our tool for styling, like CSS).

// I am importing from the toolbox call react-native that holds all these components.
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";



export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href= "/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e', //This makes the text like a light lavender colour
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff', 
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff'
  },

  });
