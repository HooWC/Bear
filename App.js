import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import RootNavigators from './navigators/RootNavigators'

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigators />
    </NavigationContainer>
  );
}

