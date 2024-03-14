import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { commonStyles } from './CommonStyle'

const Loader = () => {
  return (
    <View style={commonStyles.loader}>
      <ActivityIndicator size={"large"}/>
    </View>
  )
}

export default Loader