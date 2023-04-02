import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



export default GreetingScreen = ({ navigation }) => {
  return (
    <Button
      title="Say Hi!"
      onPress={() =>
        navigation.navigate('Greeting', { name: 'John Doe' })
      }
    />
  );
};

const GreetingScreen = ({ navigation, route }) => {
  return <Text>Hi {route.params.name}!</Text>;
};