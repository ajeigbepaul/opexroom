import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Avatar } from '@rneui/base'
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from '../../firebase'
const HomeScreen = () => {
  const navigation = useNavigation()
  const auth = FIREBASE_AUTH;
  useLayoutEffect(()=>{
  navigation.setOptions({
  title:"Opex Room",
  headerStyle:{backgroundColor:"dodgerblue"},
  headerTitleStyle:{color:"white"},
  headerTintColor:"white",
  headerLeft:()=>(<View className="ml-4"><Avatar rounded source={require("../../assets/icon.png")}/></View>)
  })
  },[])
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen