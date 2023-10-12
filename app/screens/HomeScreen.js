import { View, Text } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/base'
import { FIREBASE_AUTH } from '../../firebase'
const HomeScreen = () => {
  const auth = FIREBASE_AUTH;
  
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen