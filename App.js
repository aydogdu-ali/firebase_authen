import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';



const Stack = createNativeStackNavigator();

// component={LoginScreen}  options={{headerShown:false}} bu bize login sayfasının ismini gizlememizi sağlar.
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
