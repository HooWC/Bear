import { 
  View, 
  Text,Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar, } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from "react-native-animatable";
import { BlurView } from "expo-blur";
import {startbackground,logoImage} from '../assets'
import { useNavigation } from "@react-navigation/native";

const StartPage = () => {

  const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor="black" />

      {/* Background Image */}
      <Image source={startbackground} style={styles.ImageBackground}/>

      {/* Logo */}
      <View style={styles.LogoView}>
        <Image source={logoImage} style={styles.LogoImage}/>
        <Text style={styles.LogoText}>BeerQuest</Text>
        <Text style={styles.LogoText}>啤酒探索者</Text>
        <Text></Text>
      </View>

      {/* Start Button */}
      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={() => (navigation as any).navigate("TabsNavigators")}
          style={styles.btnViewOutside}
        >
          <Animatable.View 
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            style={styles.btnTou}
            >
            <Text style={styles.GOText}>GO</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
  },
  LogoView:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50,
  },
  LogoImage:{
    width:180,
    height:130,
  },
  LogoText:{
    color:'white',
    fontSize:20,
    letterSpacing:10,
    fontWeight:'700',
  },
  ImageBackground:{
    position:'absolute',
    bottom:0,
    height:'60%',
    width:'100%',
  },
  btnView:{
    position:'absolute',
    bottom:40,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'
  },
  btnViewOutside:{
    width:80,
    height:80,
    borderRadius:50,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth:3,
    borderRightWidth:3,
    borderTopWidth:5,
    borderColor:'#b80e06',
  },
  btnTou:{
    width:60,
    height:60,
    borderRadius:50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#f5140a',
  },
  GOText:{
    color:'white',
    fontWeight:'bold',
    fontSize:25,
  },
})


export default StartPage