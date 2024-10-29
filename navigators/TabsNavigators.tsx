import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Entypo,MaterialIcons,Ionicons } from "@expo/vector-icons"
import HomePage from '../screen/HomePage'
import Forums from '../screen/Forums'
import Personal from '../screen/Personal'

const Tab = createBottomTabNavigator();

const TabsNavigators = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle: {
          backgroundColor: 'rgba(34,36,40,1)',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor :'#757474',
      }}
    >
      <Tab.Screen name="HomePage" component={HomePage}
        options={{
          headerShown:false,
          tabBarIcon(props){
            return <Entypo name="home" size={24} color="black" {...props}/>
          }
        }}
        />
        <Tab.Screen name="Forums" component={Forums}
        options={{
          headerShown:false,
          tabBarIcon(props){
            return <MaterialIcons name="forum" size={24} color="black" {...props}/>
          }
        }}
        />
        <Tab.Screen name="Personal" component={Personal}
        options={{
          headerShown:false,
          tabBarIcon(props){
            return <Ionicons name="person" size={24} color="black" {...props}/>
          }
        }}
        />
    </Tab.Navigator>
  )
}

export default TabsNavigators