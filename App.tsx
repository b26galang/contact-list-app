import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

// import our screens
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';

// create this Stack variable based on our param list that we made in types
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

