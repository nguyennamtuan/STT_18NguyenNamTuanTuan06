import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView,Image} from 'react-native';
import lab3a from  './lab3a';
import lab3b from  './lab3b';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App(navigation) {
  return (
    
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="Screen1">
          <Stack.Screen name="lab3a" component={lab3a} />
          <Stack.Screen name="lab3b" component={lab3b} />
        </Stack.Navigator>
      </NavigationContainer>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
});
