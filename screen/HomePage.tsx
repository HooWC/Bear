import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput, 
} from 'react-native'
import React from 'react'
import {avatar} from '../assets'
import { Ionicons,AntDesign,MaterialIcons  } from '@expo/vector-icons'; 

const HomePage = () => {
  return (
    <ScrollView style={{backgroundColor:"black"}}>
      <View style={{paddingVertical:24,gap:24}}>

        {/* Header Section */}  
        <View style={{
          paddingHorizontal:24,
          flexDirection:'row',
          alignItems: 'center',
          gap:10,
        }}>
          <Image source={avatar} style={{width:52,aspectRatio:1,borderRadius:52}}/>
          <View style={{ flex: 1 }}>
            <Text style={{
              fontSize:18,
              fontWeight:'600',
              marginBottom:2,
              color:'white'
            }}
            >Hoo Weng Chin</Text>
            <Text style={{
              fontSize:12,
              color:"#969696"
            }}>Personal introduction...</Text>
          </View>
          <TouchableOpacity style={{
            width: 45,
            aspectRatio: 1,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 45,
            borderWidth: 1,
            borderColor:'#c2c2c2',
          }}>
            <Ionicons name="notifications" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Search Bar Section */}
        <View style={{
          flexDirection:'row',
          paddingHorizontal:7,
          paddingLeft:20,
          gap:12,
          alignItems: 'center',
        }}>
          <AntDesign name="search1" size={24} color="white" 
            style={{
              position:'absolute',
              left:40,
            }}/>
          <TextInput style={{
              flex: 1,
              height: 52,
              borderRadius: 52,
              borderWidth: 1,
              borderColor: '#c2c2c2',
              alignItems: "center",
              paddingHorizontal: 10,
              paddingLeft:52,
            }}
            placeholder="Write Something Here..."
            placeholderTextColor="#c2c0c0"
            />
            <TouchableOpacity style={{
              width:50,
              aspectRatio:1,
              backgroundColor:'white',
              borderRadius:50,
              alignItems: "center",
              justifyContent: "center",
            }}>
              <MaterialIcons name="tune" size={24} color="black" />
            </TouchableOpacity>
        </View>

        {/* Grid Collection View */}
        <View style={{ paddingHorizontal: 24 }}>
            <View style={{
              flexDirection:'row',
              alignItems: "center",
              justifyContent:'space-between',
              marginBottom:12
            }}>
              <Text style={{
                color:'white',
                fontSize:20,
                fontWeight: 'bold'
              }}>
                New Collections
              </Text>
              <TouchableOpacity>
                <Text style={{color:'#c4c4c4',fontSize:13}}>See All</Text>
              </TouchableOpacity>
            </View>

            <View style={{
              flexDirection:'row',
              height:200,
              gap:12,
              backgroundColor:'red'
            }}>
             {/*  <Card
                onPress={() => {

                }}
              /> */}
            </View>
        </View>

      </View>
    </ScrollView>
  )
}

export default HomePage

const styles = StyleSheet.create({})