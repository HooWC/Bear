import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator  } from "@react-navigation/native-stack"
import StartPage from '../screen/StartPage'
import TabsNavigators from "./TabsNavigators"

const Stack = createNativeStackNavigator();

const RootNavigators = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StartPage" component={StartPage} options={{headerShown:false}}/>
      <Stack.Screen name="TabsNavigators" component={TabsNavigators} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default RootNavigators